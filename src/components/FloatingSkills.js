import { useState, useEffect } from 'react';

const FloatingSkills = ({ isSkillsPage, isIntroPage }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [permissionGranted, setPermissionGranted] = useState(false);

  const skills = [
    { name: 'Python', color: 'bg-blue-500', icon: '🐍' },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: '⚡' },
    { name: 'React', color: 'bg-cyan-500', icon: '⚛️' },
    { name: 'Java', color: 'bg-red-500', icon: '☕' },
    { name: 'SQL', color: 'bg-blue-600', icon: '🗄️' },
    { name: 'Excel', color: 'bg-green-600', icon: '📊' },
    { name: 'Power BI', color: 'bg-yellow-500', icon: '📈' },
    { name: 'Azure', color: 'bg-blue-500', icon: '☁️' },
    { name: 'Git', color: 'bg-orange-600', icon: '🔀' },
    { name: 'Firebase', color: 'bg-orange-500', icon: '🔥' },
    { name: 'VS Code', color: 'bg-blue-600', icon: '💻' },
    { name: 'JIRA', color: 'bg-blue-500', icon: '📋' },
  ];

  // Generate random positions for each skill
  const [skillPositions] = useState(() =>
    skills.map((_, index) => ({
      x: Math.random() * 80 + 10, // 10-90% of screen width
      y: Math.random() * 80 + 10, // 10-90% of screen height
      delay: index * 0.1,
      speed: 0.5 + Math.random() * 0.5, // Random speed multiplier
    }))
  );

  // Handle device orientation (mobile tilt)
  useEffect(() => {
    const handleOrientation = (event) => {
      if (permissionGranted) {
        // beta: front-to-back tilt (-180 to 180)
        // gamma: left-to-right tilt (-90 to 90)
        const x = event.gamma ? event.gamma / 45 : 0; // Normalize to -2 to 2
        const y = event.beta ? (event.beta - 45) / 45 : 0; // Normalize and center
        setTilt({ x: Math.max(-2, Math.min(2, x)), y: Math.max(-2, Math.min(2, y)) });
      }
    };

    // Handle mouse movement (desktop fallback)
    const handleMouseMove = (event) => {
      if (!permissionGranted) {
        const x = (event.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (event.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        setTilt({ x, y });
      }
    };

    // Request permission for iOS 13+
    const requestPermission = async () => {
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission === 'granted') {
            setPermissionGranted(true);
          }
        } catch (error) {
          console.log('Permission denied');
        }
      } else if (window.DeviceOrientationEvent) {
        // Non-iOS devices
        setPermissionGranted(true);
      }
    };

    requestPermission();
    window.addEventListener('deviceorientation', handleOrientation);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [permissionGranted]);

  // Don't show on intro page
  if (isIntroPage) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {skills.map((skill, index) => {
        const pos = skillPositions[index];
        
        // Calculate movement based on tilt
        const moveX = isSkillsPage ? 0 : tilt.x * 20 * pos.speed;
        const moveY = isSkillsPage ? 0 : tilt.y * 20 * pos.speed;
        
        // On skills page, move to grid position (we'll calculate this)
        const gridCol = index % 4;
        const gridRow = Math.floor(index / 4);
        const targetX = isSkillsPage ? 20 + gridCol * 20 : pos.x;
        const targetY = isSkillsPage ? 30 + gridRow * 15 : pos.y;

        return (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-out ${
              isSkillsPage ? 'opacity-0' : 'opacity-30'
            }`}
            style={{
              left: `${targetX}%`,
              top: `${targetY}%`,
              transform: `translate(${moveX}px, ${moveY}px) translate(-50%, -50%)`,
              transitionDelay: `${pos.delay}s`,
            }}
          >
            <div
              className={`${skill.color} text-white px-4 py-2 rounded-full font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2 text-sm`}
              style={{
                opacity: 0.6,
                filter: 'blur(1px)',
              }}
            >
              <span className="text-lg">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FloatingSkills;
