import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode, onNavigate, onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Journey', id: 'journey' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={onLogoClick}
              className="text-2xl font-bold bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-primary dark:to-dark-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Harry Allen
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate && onNavigate(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-navy-700 transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-900 dark:bg-dark-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Resume Button */}
            <button
              onClick={() => navigate('/resume')}
              className="px-4 py-2 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Resume
            </button>

            {/* Animated Dark Mode Toggle Switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 rounded-full transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 overflow-hidden"
              style={{ 
                backgroundColor: darkMode ? '#03045E' : '#FCD34D',
                boxShadow: darkMode ? '0 0 20px rgba(3, 4, 94, 0.3)' : '0 0 20px rgba(252, 211, 77, 0.3)'
              }}
              aria-label="Toggle dark mode"
            >
              {/* Background gradient animation */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-700 to-navy-900"></div>
              </div>
              
              {/* Stars for dark mode */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-4 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
              
              {/* Toggle circle with icon */}
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-500 ease-in-out flex items-center justify-center ${
                  darkMode ? 'translate-x-9' : 'translate-x-1'
                }`}
                style={{
                  boxShadow: darkMode 
                    ? '0 0 10px rgba(255, 255, 255, 0.5)' 
                    : '0 0 15px rgba(252, 211, 77, 0.8)'
                }}
              >
                {/* Moon to Sun morphing animation */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Moon */}
                  <svg 
                    className={`absolute w-4 h-4 text-navy-700 transition-all duration-500 ${
                      darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  
                  {/* Sun */}
                  <svg 
                    className={`absolute w-4 h-4 text-yellow-500 transition-all duration-500 ${
                      !darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <span className="text-xl transition-transform duration-500 inline-block" style={{
                transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                {darkMode ? '☀️' : '🌙'}
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onNavigate && onNavigate(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/resume');
                setIsOpen(false);
              }}
              className="block w-full px-3 py-2 rounded-md bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white text-center"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
