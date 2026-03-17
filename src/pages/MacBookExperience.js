import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MacBookExperience = () => {
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
      description: 'An accessibility-first ride-hailing and rental platform addressing mobility barriers and inclusive employment in Canada.',
      tech: ['React', 'Tailwind', 'MongoDB', 'Google Gemini API', 'Eleven Labs API'],
      image: '/projects/AcciTaxi.png',
      hackathon: true
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
  
  // MacBook zoom effect - scroll down = zoom IN, scroll up = zoom OUT
  const macbookScale = useTransform(scrollYProgress, [0, 0.5], [1, 4]);
  const macbookOpacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  
  // Move the MacBook UP as we zoom in, so we zoom into the screen area
  const macbookY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  
  // Content appears after zoom - overlaps with window
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  
  // Hero text fades as you zoom in - disappears when content appears
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 0.5, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -100]);

  // Show terminal after 4 seconds
  useEffect(() => {
    const showTerminalTimeout = setTimeout(() => {
      setShowTerminal(true);
    }, 4000);

    return () => clearTimeout(showTerminalTimeout);
  }, []);

  // Terminal typing animation - starts immediately when terminal appears
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

      {/* Section 1: MacBook Full Screen with Bidirectional Zoom */}
      <section className="relative h-[300vh]">
        {/* Sticky Container for MacBook */}
        <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center justify-center bg-black">
          {/* 3D MacBook Model - MacBook Pro 2017 */}
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