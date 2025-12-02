import { useState, useEffect } from 'react';

const Tutorial = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    {
      title: 'Welcome to My Portfolio! 👋',
      description: 'Let me show you around. You can skip this tutorial anytime or use the arrow keys to navigate.',
      position: 'center',
      highlight: null
    },
    {
      title: 'Navigation Menu',
      description: 'Use these links to jump to any section instantly. Click on any page name to navigate.',
      position: 'top-center',
      highlight: 'navbar'
    },
    {
      title: 'Dark Mode Toggle 🌙☀️',
      description: 'Switch between light and dark themes with this animated toggle. Try it out!',
      position: 'top-right',
      highlight: 'darkmode'
    },
    {
      title: 'Scroll to Navigate',
      description: 'Scroll up or down to move between pages. Each section has its own content.',
      position: 'center',
      highlight: null
    },
    {
      title: 'AI Chatbot Assistant 🤖',
      description: 'Have questions? Click the chat button in the bottom right to ask about my experience, skills, or contact info!',
      position: 'bottom-right',
      highlight: 'chatbot'
    },
    {
      title: 'All Set! 🎉',
      description: 'You\'re ready to explore. Enjoy browsing through my portfolio!',
      position: 'center',
      highlight: null
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStep]);

  if (!isVisible) return null;

  const step = steps[currentStep];

  const getPositionClasses = () => {
    switch (step.position) {
      case 'top-center':
        return 'top-24 left-1/2 -translate-x-1/2';
      case 'top-right':
        return 'top-24 right-8';
      case 'right':
        return 'right-24 top-1/2 -translate-y-1/2';
      case 'bottom-right':
        return 'bottom-32 right-32';
      case 'center':
      default:
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300">
        {/* Highlight areas */}
        {step.highlight === 'navbar' && (
          <div className="absolute top-0 left-0 right-0 h-16 border-4 border-yellow-400 rounded-lg animate-pulse pointer-events-none"></div>
        )}
        {step.highlight === 'darkmode' && (
          <div className="absolute top-3 right-8 w-20 h-12 border-4 border-yellow-400 rounded-full animate-pulse pointer-events-none"></div>
        )}
        {step.highlight === 'dots' && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-64 border-4 border-yellow-400 rounded-full animate-pulse pointer-events-none"></div>
        )}
        {step.highlight === 'chatbot' && (
          <div className="absolute bottom-6 right-6 w-20 h-20 border-4 border-yellow-400 rounded-full animate-pulse pointer-events-none"></div>
        )}

        {/* Tutorial Card */}
        <div className={`fixed ${getPositionClasses()} w-full max-w-md mx-4 transition-all duration-500 z-[101]`}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-slideInUp">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Step {currentStep + 1} of {steps.length}
                </span>
                <button
                  onClick={handleSkip}
                  className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Skip Tutorial
                </button>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                ← Previous
              </button>

              <div className="flex gap-2">
                {steps.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentStep
                        ? 'bg-navy-900 dark:bg-dark-accent w-6'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gradient-to-r from-navy-900 to-navy-600 dark:from-dark-accent dark:to-dark-secondary text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {currentStep === steps.length - 1 ? 'Get Started! 🚀' : 'Next →'}
              </button>
            </div>

            {/* Keyboard Hints */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Use ← → arrow keys to navigate • Press ESC to skip
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial;
