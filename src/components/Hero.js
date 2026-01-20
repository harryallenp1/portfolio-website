import { useState, useEffect } from 'react';

const Hero = ({ onNavigate }) => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Comp Sci Student',
    'Creative Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const typingDuration = 2000; // Time to show each title
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }, 500); // Pause before next title
    }, typingDuration);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="h-full flex items-center justify-center px-4 relative pt-36">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-navy-900/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-600/10 rounded-full blur-3xl animate-float delay-200"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated greeting */}
        <div className="mb-6 animate-fadeInUp">
          <span className="text-6xl animate-wave inline-block">👋</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-navy-900 via-navy-600 to-navy-500 dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary bg-clip-text text-transparent animate-gradient animate-fadeInUp delay-100">
          Hi, I'm Harry
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fadeInUp delay-200 h-8 flex items-center justify-center">
          <span className={`transition-all duration-500 ${isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            {titles[currentTitle]}
          </span>
        </div>
        
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp delay-300">
          I build exceptional digital experiences that combine beautiful design with powerful functionality.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-400">
          <button
            onClick={() => onNavigate && onNavigate('projects')}
            className="px-8 py-4 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white rounded-lg font-medium hover:shadow-2xl hover:scale-110 transition-all duration-300 w-full sm:w-auto hover-glow"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="px-8 py-4 border-2 border-navy-900 dark:border-dark-accent text-navy-900 dark:text-dark-accent rounded-lg font-medium hover:bg-navy-900 dark:hover:bg-dark-accent hover:text-white transition-all duration-300 w-full sm:w-auto hover:scale-110"
          >
            Get In Touch
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce animate-fadeInUp delay-500">
          <button 
            onClick={() => onNavigate && onNavigate('about')}
            className="text-gray-400 hover:text-navy-900 dark:hover:text-dark-accent transition-colors duration-300"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm mt-2">Scroll down to learn more</p>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
