'use client'
import { useEffect } from 'react';

const SkipToContent = () => {
  useEffect(() => {
    const skipLink = document.getElementById('skip-to-content');
    const mainContent = document.getElementById('main-content');
    
    if (skipLink && mainContent) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <a
      id="skip-to-content"
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      Saltar al contenido principal
    </a>
  );
};

export default SkipToContent;
