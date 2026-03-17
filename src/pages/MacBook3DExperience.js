import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MacBook3DExperience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWindowFullscreen, setIsWindowFullscreen] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [showPortfolioWindow, setShowPortfolioWindow] = useState(false);
  
  const fullCommand = 'open harry-portfolio';
  
  // Portfolio data
  const experiences = [
    {
      title: 'AI Automation Developer',
      company: 'Government of Ontario',
      period: 'January 2026 – Present',
      location: 'Toronto, ON',
      current: true,
      description: 'Built and deployed workflow automations using n8n, containerized with Docker, to integrate and orchestrate internal government applications across multiple departments.',
      highlights: [
        'Delivered automation solutions that helped 3 internal teams achieve 80% efficiency improvements',
        'Designed and implemented containerized automation workflows for cross-departmental integration',
        'Conducted technical consultations to identify and prioritize high-impact automation opportunities'
      ],
      skills: ['n8n', 'Docker', 'Workflow Automation', 'API Integration', 'Process Optimization', 'Python']
    },
    {
      title: 'Software Engineer - QA & Automation',
      company: 'Government of Ontario',
      period: 'May 2025 – December 2025',
      location: 'Toronto, ON',
      description: 'Analyze complex system behaviour and large datasets across cloud-hosted OACIS modules to support accurate reporting, workflow validation, and requirement alignment.',
      skills: ['SQL', 'Python', 'Process Mapping', 'Data Validation', 'Analytics', 'Agile/Scrum']
    },
    {
      title: 'Coding Instructor (iOS Development)',
      company: 'Career Education Council',
      period: 'June 2024 – May 2025',
      location: 'Guelph, ON',
      partTime: true,
      description: 'Teach Swift programming, app design fundamentals, and mobile development workflows to high-school students through hands-on projects.',
      skills: ['Swift', 'Xcode', 'Teaching', 'Documentation', 'UX Thinking']
    }
  ];

  const projects = [
    {
      title: 'AcciTaxi',
      date: 'January 2026 - Hackathon',
      description: 'An accessibility-first ride-hailing and rental platform addressing mobility barriers and inclusive employment in Canada. Features AI-powered text-to-speech/speech-to-text communication.',
      tech: ['React', 'Tailwind', 'MongoDB', 'Google Gemini API', 'Eleven Labs API'],
      image: '/projects/AcciTaxi.png',
      hackathon: true
    },
    {
      title: 'Spirit Interface',
      date: 'December 2024 - Hackathon',
      description: 'An interactive AI-powered ghost chat application with dynamic mood-based behavior, sentiment analysis, and atmospheric effects.',
      tech: ['TypeScript', 'Next.js', 'AI', 'Sentiment Analysis'],
      image: '/projects/SpiritInterface.png',
      hackathon: true
    },
    {
      title: 'AI Budget Tracker',
      date: 'September 2024',
      description: 'Developed an AI-assisted financial dashboard that automatically categorizes transactions and generates spending trends using Python automation.',
      tech: ['Python', 'Power BI', 'Excel Automation', 'AI'],
      image: '/projects/budget tracker.jpg'
    },
    {
      title: 'Project Memora',
      date: 'December 2024',
      description: 'Designed and built an assistive mobile app that supports individuals with memory impairments using reminders, photo recognition, and voice-driven prompts.',
      tech: ['Flutter', 'Firebase', 'AI Analytics', 'Mobile Development'],
      image: '/projects/memora.jpg'
    }
  ];
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'C#', category: 'Programming' },
    { name: 'SQL', category: 'Programming' },
    { name: 'n8n', category: 'Automation' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Azure AI', category: 'Cloud' },
    { name: 'Firebase', category: 'Cloud' },
    { name: 'Git', category: 'Tools' },
    { name: 'JIRA', category: 'Tools' },
    { name: 'Power BI', category: 'Analytics' },
    { name: 'Excel', category: 'Analytics' },
    { name: 'Agile/Scrum', category: 'Methodologies' },
    { name: 'REST APIs', category: 'Integration' },
    { name: 'Testing', category: 'Quality' }
  ];

  const education = [
    {
      degree: 'Artificial Intelligence & Applied Machine Learning',
      school: 'University of Waterloo',
      period: 'Nov 2025 – Feb 2026',
      description: 'Completed a technical certification focused on real-world AI applications including machine learning, neural networks, NLP, computer vision, robotics, and forecasting.'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Sheridan College',
      period: 'Expected Graduation: 2027',
      scholarship: true,
      description: 'Pursuing a comprehensive computer science education with focus on software development, algorithms, and modern technologies.'
    }
  ];
  
  // Use window scroll
  const { scrollYProgress } = useScroll();
  
  // MacBook zoom effect
  const macbookScale = useTransform(scrollYProgress, [0, 0.5], [1, 4]);
  const macbookOpacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const macbookY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 0.5, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -100]);

  // Show terminal after 4 seconds
  useEffect(() => {
    const showTerminalTimeout = setTimeout(() => {
      setShowTerminal(true);
    }, 4000);
    return () => clearTimeout(showTerminalTimeout);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (!showTerminal) return;
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullCommand.length) {
        setTerminalText(fullCommand.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowTerminal(false);
          setShowPortfolioWindow(true);
        }, 500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [showTerminal, fullCommand]);
  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Section 1: MacBook Full Screen */}
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
          {/* 3D MacBook Model */}
          <motion.div
            style={{ 
              scale: macbookScale,
              y: macbookY,
              opacity: macbookOpacity
            }}
            className="absolute inset-0 flex items-center justify-center bg-black"
          >
            <div className="w-full h-full bg-black">
              <iframe
                title="Macbook Pro 2017 No Brand"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/005f9c9eeacf433fa90fecf1c4269f1c/embed?autostart=1&autospin=0&camera=0&ui_theme=dark&ui_watermark=0&ui_infos=0&ui_controls=0&ui_stop=0&preload=1"
                style={{ backgroundColor: '#000000' }}
              />
            </div>
          </motion.div>

          {/* Terminal Window */}
          {scrollProgress < 0.35 && showTerminal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto"
            >
              <div className="flex items-center justify-center w-full h-full">
                <div 
                  className="bg-gray-900/98 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden"
                  style={{ width: '700px', height: '400px', marginTop: '-280px' }}
                >
                  <div className="bg-gray-800/95 px-4 py-2.5 flex items-center border-b border-gray-700/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-xs font-medium">zsh</div>
                    <div className="w-16" />
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-green-400 mb-2">harry@macbook ~ %</div>
                    <div className="text-white">
                      {terminalText}
                      <span className="animate-pulse">▊</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {/* Portfolio Window */}
          {scrollProgress < 0.35 && showPortfolioWindow && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ opacity: heroOpacity, y: heroY }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto"
            >
              <div className="flex items-center justify-center w-full h-full">
                <motion.div 
                  initial={{ width: '800px', height: '500px' }}
                  animate={{
                    width: isWindowFullscreen ? '800px' : '600px',
                    height: isWindowFullscreen ? '500px' : 'auto'
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden"
                  style={{ marginTop: '-280px' }}
                >
                  <div className="bg-gray-800/95 px-4 py-2.5 flex items-center border-b border-gray-700/50">
                    <div className="flex gap-2">
                      <div 
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                        onClick={() => setIsWindowFullscreen(false)}
                      />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
                      <div 
                        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer group relative"
                        onClick={() => setIsWindowFullscreen(!isWindowFullscreen)}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-2 h-2 text-gray-900" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-center text-gray-400 text-xs font-medium">Portfolio.app</div>
                    <div className="w-16" />
                  </div>
                  
                  <div className={`${isWindowFullscreen ? 'p-12 h-full overflow-y-auto' : 'p-10'} transition-all duration-300`}>
                    <motion.h1
                      animate={{ fontSize: isWindowFullscreen ? '3.5rem' : '3rem' }}
                      transition={{ duration: 0.3 }}
                      className="font-bold text-white mb-4"
                    >
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Welcome
                      </span>
                    </motion.h1>
                    <motion.p
                      animate={{ fontSize: isWindowFullscreen ? '1.25rem' : '1.125rem' }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 mb-6"
                    >
                      AI Automation • DevOps • Cybersecurity
                    </motion.p>
                    
                    {isWindowFullscreen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-gray-400 text-base space-y-4"
                      >
                        <p>Transforming business processes with intelligent automation, delivering <span className="text-blue-400 font-bold">80% efficiency improvements</span>.</p>
                        <p>Currently working as an <span className="text-purple-400 font-semibold">AI Automation Developer</span> at Government of Ontario.</p>
                        <div className="pt-4">
                          <p className="text-sm text-gray-500">Scroll down to explore my work →</p>
                        </div>
                      </motion.div>
                    )}
                    
                    {!isWindowFullscreen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-gray-400 text-sm animate-bounce mt-6"
                      >
                        ↓ Scroll to Enter ↓
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
          {/* Content Inside MacBook Screen */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0 flex items-center justify-center z-30 px-6"
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
              >
                Inside My World
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 drop-shadow-lg"
              >
                Transforming business processes with intelligent automation, delivering <span className="text-blue-400 font-bold">80% efficiency improvements</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-400 drop-shadow-lg"
              >
                Keep scrolling to explore my work ↓
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Experience */}
      <section className="relative min-h-screen py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full animate-pulse">CURRENT</span>
                      )}
                      {exp.partTime && (
                        <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">PART-TIME</span>
                      )}
                    </div>
                    <p className="text-xl text-blue-400 font-medium mb-2">{exp.company}</p>
                    {exp.location && <p className="text-gray-400 mb-4">📍 {exp.location}</p>}
                  </div>
                  <span className="text-gray-300 font-medium whitespace-nowrap mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                
                {exp.highlights && (
                  <ul className="mb-6 space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">▸</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Debug Info */}
      <div className="fixed bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm z-50 backdrop-blur-sm border border-gray-700">
        Scroll: {Math.round(scrollProgress * 100)}%
      </div>
    </div>
  );
};

export default MacBook3DExperience;