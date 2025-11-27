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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const HomePage = () => {

    const handlePageChange = useCallback((sectionId) => {
      const element = document.getElementById(sectionId);
      const scrollContainer = document.getElementById('scroll-container');
      
      if (element && scrollContainer) {
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - 80; // Account for navbar (64px) + some padding
        
        scrollContainer.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, []);

    const pages = [
      { component: <Hero onNavigate={handlePageChange} />, name: 'Hero', id: 'hero' },
      { component: <About />, name: 'About', id: 'about' },
      { component: <Journey />, name: 'My Journey', id: 'journey' },
      { component: <Experience />, name: 'Experience', id: 'experience' },
      { component: <Education />, name: 'Education', id: 'education' },
      { component: <Projects />, name: 'Projects', id: 'projects' },
      { component: <Skills />, name: 'Skills', id: 'skills' },
      { component: <Contact />, name: 'Contact', id: 'contact' },
    ];



    return (
      <>
        {showIntro && <IntroPage onEnter={() => {
          setShowIntro(false);
          setShowTutorial(true);
        }} />}
        
        {showTutorial && <Tutorial onComplete={() => setShowTutorial(false)} />}
        
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 h-screen overflow-hidden relative">
            {!showIntro && (
              <Navbar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                onNavigate={handlePageChange}
                onLogoClick={() => setShowIntro(true)}
              />
            )}
          
          {/* Page Navigation Dots - Only show when not on intro */}
          {!showIntro && (
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
              {pages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(page.id)}
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
          
          {/* Scrollable Container */}
          <div 
            id="scroll-container"
            className="h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth"
            style={{
              paddingTop: showIntro ? '0' : '64px',
              scrollBehavior: 'smooth',
            }}
          >
            {pages.map((page, index) => (
              <section 
                key={index} 
                id={page.id}
                className="min-h-screen w-full"
              >
                {page.component}
              </section>
            ))}
            
            {/* Footer */}
            <Footer />
          </div>
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
