import React, { useState, useEffect } from 'react';

const PageNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        // Scroll down
        onPageChange(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        // Scroll up
        onPageChange(currentPage - 1);
      }
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentPage < totalPages - 1) {
        setIsScrolling(true);
        onPageChange(currentPage + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentPage > 0) {
        setIsScrolling(true);
        onPageChange(currentPage - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentPage, totalPages, onPageChange, isScrolling]);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => !isScrolling && onPageChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentPage === index
              ? 'bg-navy-900 dark:bg-dark-accent scale-150'
              : 'bg-gray-400 dark:bg-gray-600 hover:bg-navy-600 dark:hover:bg-dark-secondary'
          }`}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default PageNavigation;
