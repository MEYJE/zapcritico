
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="/" 
          className="text-lg font-display font-semibold text-foreground flex items-center space-x-2"
        >
          <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
            CE
          </span>
          <span>ChatEducacional</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#why" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Por que um chatbot?
          </a>
          <a 
            href="#features" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Funcionalidades
          </a>
          <a 
            href="https://wa.me/5561996749762?text=Quero%20saber%20mais%20sobre%20o%20chatbot%20educacional!" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Fale Conosco
          </a>
        </nav>
        
        <button 
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
