import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroPage from './components/IntroPage';
import Chatbot from './components/Chatbot';
import Tutorial from './components/Tutorial';
import ResumePage from './pages/ResumePage';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [showIntro, setShowIntro] = useState(true);
  const [showTutorial, setShowTutorial] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const HomePage = () => {

    const handlePageChange = useCallback((newPage) => {
      if (isTransitioning || newPage === currentPage || newPage < 0 || newPage >= 8) {
        return;
      }
      
      setIsTransitioning(true);
      setCurrentPage(newPage);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, [isTransitioning, currentPage]);

    const pages = [
      { component: <Hero onNavigate={handlePageChange} />, name: 'Hero' },
      { component: <About />, name: 'About' },
      { component: <Journey />, name: 'My Journey' },
      { component: <Experience />, name: 'Experience' },
      { component: <Education />, name: 'Education' },
      { component: <Projects />, name: 'Projects' },
      { component: <Skills />, name: 'Skills' },
      { component: <Contact />, name: 'Contact' },
    ];

    // Wheel event handler with scroll threshold
    useEffect(() => {
      let lastScrollTime = 0;
      const SCROLL_THRESHOLD = 50; // Minimum scroll intensity to trigger page change
      
      const handleWheel = (e) => {
        const scrollIntensity = Math.abs(e.deltaY);
        
        // If scroll is gentle (below threshold), allow normal scrolling within page
        if (scrollIntensity < SCROLL_THRESHOLD) {
          return; // Don't prevent default, allow internal scrolling
        }
        
        // Hard scroll detected - change page
        e.preventDefault();
        
        const now = Date.now();
        if (now - lastScrollTime < 800) return; // Throttle page changes
        
        lastScrollTime = now;
        
        if (e.deltaY > 0 && currentPage < pages.length - 1) {
          handlePageChange(currentPage + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
          handlePageChange(currentPage - 1);
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          e.preventDefault();
          if (currentPage < pages.length - 1) {
            handlePageChange(currentPage + 1);
          }
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          e.preventDefault();
          if (currentPage > 0) {
            handlePageChange(currentPage - 1);
          }
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [currentPage, pages.length, handlePageChange]);

    return (
      <>
        {showIntro && <IntroPage onEnter={() => {
          setShowIntro(false);
          setShowTutorial(true);
        }} />}
        
        {showTutorial && <Tutorial onComplete={() => setShowTutorial(false)} />}
        
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 h-screen overflow-hidden">
            <Navbar 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              onNavigate={handlePageChange}
              onLogoClick={() => setShowIntro(true)}
            />
          
          {/* Page Navigation Dots - Only show when not on intro */}
          {!showIntro && (
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'bg-navy-900 dark:bg-dark-accent scale-150'
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-navy-600 dark:hover:bg-dark-secondary'
                  }`}
                  aria-label={`Go to ${page.name}`}
                />
              ))}
            </div>
          )}
          
          {/* Current Page with Animation */}
          <div 
            key={currentPage} 
            className="h-screen w-full absolute top-0 left-0 transition-all duration-500 ease-in-out overflow-y-auto"
            style={{
              transform: isTransitioning ? 'translateY(-100%)' : 'translateY(0)',
              opacity: isTransitioning ? 0 : 1,
              paddingTop: '64px', // Space for navbar
            }}
          >
            {pages[currentPage].component}
          </div>
          
          {/* Footer on last page */}
          {currentPage === pages.length - 1 && (
            <div className="absolute bottom-0 w-full">
              <Footer />
            </div>
          )}
        </div>
        
        {/* AI Chatbot - Only show when not on intro */}
        {!showIntro && <Chatbot />}
      </div>
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
