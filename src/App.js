import { useState, useEffect, useCallback, useRef } from 'react';
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const HomePage = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);

    const handlePageChange = useCallback((sectionId) => {
      const element = document.getElementById(sectionId);
      const scrollContainer = document.getElementById('scroll-container');
      
      if (element && scrollContainer) {
        const elementPosition = element.offsetTop;
        const navbarHeight = 64; // Height of navbar
        const offset = elementPosition - navbarHeight - 20; // Extra 20px padding
        
        scrollContainer.scrollTo({
          top: Math.max(0, offset),
          behavior: 'smooth'
        });
        
        // Show navbar when navigating
        setShowNavbar(true);
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

    // Track navbar visibility on scroll
    useEffect(() => {
      const handleScroll = () => {
        const scrollContainer = document.getElementById('scroll-container');
        if (!scrollContainer) return;

        const currentScrollY = scrollContainer.scrollTop;
        
        // Show/hide navbar based on scroll direction
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down
          setShowNavbar(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setShowNavbar(true);
        }
        
        lastScrollY.current = currentScrollY;
      };

      const scrollContainer = document.getElementById('scroll-container');
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
      }
    }, []);

    return (
      <>
        {showIntro && <IntroPage onEnter={() => {
          setShowIntro(false);
          setShowTutorial(true);
        }} />}
        
        {showTutorial && <Tutorial onComplete={() => setShowTutorial(false)} />}
        
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 h-screen overflow-hidden relative">
            <div 
              className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
                !showIntro && showNavbar ? 'translate-y-0' : '-translate-y-full'
              }`}
            >
              <Navbar 
                darkMode={darkMode} 
                setDarkMode={setDarkMode} 
                onNavigate={handlePageChange}
                onLogoClick={() => setShowIntro(true)}
              />
            </div>
          
          {/* Scrollable Container */}
          <div 
            id="scroll-container"
            className="h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth"
            style={{
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
