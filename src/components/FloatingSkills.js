import { useState, useEffect, useRef } from 'react';

const FloatingSkills = ({ isSkillsPage, isIntroPage }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const skillRefs = useRef([]);

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

  // Generate random static positions for each skill
  const [skillPositions] = useState(() =>
    skills.map(() => ({
      x: Math.random() * 70 + 15, // 15-85% of screen width
      y: Math.random() * 70 + 15, // 15-85% of screen height
    }))
  );

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate repulsion from cursor
  const calculateRepulsion = (skillX, skillY) => {
    if (isSkillsPage) return { x: 0, y: 0 };

    const skillPosX = (skillX / 100) * window.innerWidth;
    const skillPosY = (skillY / 100) * window.innerHeight;
    
    const dx = skillPosX - mousePos.x;
    const dy = skillPosY - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const repelDistance = 150; // Distance at which repulsion starts
    
    if (distance < repelDistance && distance > 0) {
      const force = (repelDistance - distance) / repelDistance;
      const angle = Math.atan2(dy, dx);
      return {
        x: Math.cos(angle) * force * 50,
        y: Math.sin(angle) * force * 50,
      };
    }
    
    return { x: 0, y: 0 };
  };

  // Don't show on intro page
  if (isIntroPage) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {skills.map((skill, index) => {
        const pos = skillPositions[index];
        const repulsion = calculateRepulsion(pos.x, pos.y);
        
        // On skills page, calculate target position in the actual Skills section
        // We'll hide them and let the real Skills component show
        const targetX = isSkillsPage ? 50 : pos.x;
        const targetY = isSkillsPage ? 50 : pos.y;

        return (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className={`absolute transition-all duration-700 ease-out ${
              isSkillsPage ? 'opacity-0 scale-150' : 'opacity-40'
            }`}
            style={{
              left: `${targetX}%`,
              top: `${targetY}%`,
              transform: `translate(calc(-50% + ${repulsion.x}px), calc(-50% + ${repulsion.y}px))`,
              transitionProperty: isSkillsPage ? 'all' : 'transform',
              transitionDuration: isSkillsPage ? '1000ms' : '200ms',
            }}
          >
            <div
              className={`${skill.color} text-white px-4 py-2 rounded-full font-semibold shadow-lg backdrop-blur-sm flex items-center gap-2 text-sm`}
              style={{
                filter: 'blur(0.5px)',
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
