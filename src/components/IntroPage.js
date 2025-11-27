import React, { useEffect, useState } from 'react';

const IntroPage = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-navy-900 via-gray-900 to-black dark:from-black dark:via-navy-900 dark:to-gray-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-600/20 dark:bg-dark-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-500/20 dark:bg-dark-secondary/20 rounded-full blur-3xl animate-float delay-200"></div>
      </div>

      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-dark-primary dark:via-dark-accent dark:to-white bg-clip-text text-transparent animate-gradient">
          Harry Allen
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-gray-300 dark:text-gray-400 mb-4 font-light">
          Computer Science Student
        </p>

        <p className="text-lg md:text-xl text-gray-400 dark:text-gray-500 mb-12 max-w-2xl mx-auto">
          Cloud Computing • Cybersecurity • AI Systems
        </p>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          className="group relative px-12 py-4 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white rounded-lg font-medium text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">Enter Portfolio</span>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-900 dark:from-dark-secondary dark:to-dark-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Scroll hint */}
        <div className="mt-12 animate-bounce">
          <p className="text-sm text-gray-500 dark:text-gray-600">
            Click to explore
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-600 dark:via-dark-accent to-transparent"></div>
    </div>
  );
};

export default IntroPage;
