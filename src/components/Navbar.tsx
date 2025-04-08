import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
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
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out", scrolled ? "bg-white/80 backdrop-blur-md shadow-soft" : "bg-transparent")}>
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="text-lg font-display font-semibold text-foreground flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <img src="../images/Zap Crítico.svg" alt="Logo zap critico" className="w-30 h-20" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#why" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Por que um chatbot?
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="https://wa.me/5561996749762?text=Quero%20saber%20mais%20sobre%20o%20chatbot%20educacional!" target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center space-x-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.05 4.91C17.18 3.03 14.69 2 12.04 2C5.99 2 1.08 6.91 1.08 13C1.08 15.03 1.64 17 2.71 18.71L1 23L5.42 21.31C7.05 22.28 8.94 22.79 10.88 22.79H10.89C16.94 22.79 21.79 17.88 21.79 11.79C21.79 9.15 20.82 6.7 19.05 4.91ZM12.04 20.93C10.31 20.93 8.62 20.45 7.15 19.55L6.8 19.35L4.05 20.3L5.01 17.63L4.79 17.27C3.8 15.73 3.27 13.93 3.27 12.07C3.27 7.94 7.13 4.62 12.04 4.62C14.2 4.62 16.22 5.45 17.69 6.93C19.16 8.41 20.04 10.43 20.04 12.59C20.04 16.73 16.12 20.93 12.04 20.93ZM16.56 14.42C16.31 14.29 15.09 13.7 14.87 13.61C14.64 13.53 14.47 13.49 14.31 13.74C14.14 13.99 13.67 14.55 13.53 14.71C13.39 14.88 13.25 14.9 13 14.77C12.75 14.64 11.97 14.4 11.06 13.59C10.35 12.96 9.89 12.19 9.75 11.94C9.62 11.69 9.74 11.56 9.86 11.44C9.97 11.33 10.11 11.15 10.23 11.01C10.35 10.87 10.39 10.77 10.47 10.6C10.55 10.44 10.51 10.3 10.45 10.17C10.39 10.04 9.89 8.82 9.69 8.32C9.5 7.82 9.3 7.9 9.15 7.9C9 7.9 8.84 7.9 8.67 7.9C8.5 7.9 8.24 7.97 8.02 8.21C7.8 8.46 7.16 9.05 7.16 10.27C7.16 11.49 8.07 12.67 8.19 12.83C8.31 13 9.89 15.4 12.25 16.46C12.84 16.72 13.3 16.88 13.66 16.99C14.25 17.19 14.79 17.16 15.22 17.1C15.7 17.03 16.69 16.5 16.89 15.91C17.09 15.32 17.09 14.83 17.03 14.71C16.97 14.6 16.81 14.54 16.56 14.42Z" />
            </svg>
            <span>Fale Conosco</span>
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-foreground" aria-label="Menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] p-0 bg-white">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <img src="../images/Zap Crítico.svg" alt="Logo zap critico" className="w-24 h-14" />
                  <SheetTrigger>
                    <X className="h-6 w-6" />
                  </SheetTrigger>
                </div>
              </div>
              <nav className="flex flex-col p-6 space-y-6">
                <a href="#why" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                  Por que um chatbot?
                </a>
                <a href="#features" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                  Funcionalidades
                </a>
                <a href="https://wa.me/5561996749762?text=Quero%20saber%20mais%20sobre%20o%20chatbot%20educacional!" target="_blank" rel="noopener noreferrer" className="text-base font-medium bg-primary text-white px-4 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 mt-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.05 4.91C17.18 3.03 14.69 2 12.04 2C5.99 2 1.08 6.91 1.08 13C1.08 15.03 1.64 17 2.71 18.71L1 23L5.42 21.31C7.05 22.28 8.94 22.79 10.88 22.79H10.89C16.94 22.79 21.79 17.88 21.79 11.79C21.79 9.15 20.82 6.7 19.05 4.91ZM12.04 20.93C10.31 20.93 8.62 20.45 7.15 19.55L6.8 19.35L4.05 20.3L5.01 17.63L4.79 17.27C3.8 15.73 3.27 13.93 3.27 12.07C3.27 7.94 7.13 4.62 12.04 4.62C14.2 4.62 16.22 5.45 17.69 6.93C19.16 8.41 20.04 10.43 20.04 12.59C20.04 16.73 16.12 20.93 12.04 20.93ZM16.56 14.42C16.31 14.29 15.09 13.7 14.87 13.61C14.64 13.53 14.47 13.49 14.31 13.74C14.14 13.99 13.67 14.55 13.53 14.71C13.39 14.88 13.25 14.9 13 14.77C12.75 14.64 11.97 14.4 11.06 13.59C10.35 12.96 9.89 12.19 9.75 11.94C9.62 11.69 9.74 11.56 9.86 11.44C9.97 11.33 10.11 11.15 10.23 11.01C10.35 10.87 10.39 10.77 10.47 10.6C10.55 10.44 10.51 10.3 10.45 10.17C10.39 10.04 9.89 8.82 9.69 8.32C9.5 7.82 9.3 7.9 9.15 7.9C9 7.9 8.84 7.9 8.67 7.9C8.5 7.9 8.24 7.97 8.02 8.21C7.8 8.46 7.16 9.05 7.16 10.27C7.16 11.49 8.07 12.67 8.19 12.83C8.31 13 9.89 15.4 12.25 16.46C12.84 16.72 13.3 16.88 13.66 16.99C14.25 17.19 14.79 17.16 15.22 17.1C15.7 17.03 16.69 16.5 16.89 15.91C17.09 15.32 17.09 14.83 17.03 14.71C16.97 14.6 16.81 14.54 16.56 14.42Z" />
                  </svg>
                  <span>Fale com o ZapCritico no Whatsapp</span>
                </a>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>;
};
export default Navbar;