
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container-custom relative">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70 animate-pulse-soft"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-destructive/10 rounded-full blur-3xl opacity-70"></div>
        
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center mb-6 opacity-0 animate-fade-in">
            <Badge variant="outline" className="px-3 py-1 bg-primary/10 text-primary border-primary/20 text-sm font-medium">
              Educação para a Era Digital
            </Badge>
          </div>
          
          <h1 className="heading-xl mb-4 opacity-0 animate-fade-in animate-delay-100">
            <span className="ifb-gradient-text">Zap Crítico</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 opacity-0 animate-fade-in animate-delay-100">
            Chatbot Educacional para Pensamento Crítico na Cibercultura
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in animate-delay-200">
            Um assistente inteligente no WhatsApp que ajuda estudantes da Educação Profissional e Tecnológica 
            a desenvolver habilidades críticas para navegar na era da desinformação, baseado na Pedagogia Crítica 
            de Paulo Freire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animate-delay-300">
            <a 
              href="https://wa.me/5561996749762?text=Quero%20saber%20mais%20sobre%20o%20chatbot%20educacional!" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path d="M19.05 4.91C17.18 3.03 14.69 2 12.04 2C5.99 2 1.08 6.91 1.08 13C1.08 15.03 1.64 17 2.71 18.71L1 23L5.42 21.31C7.05 22.28 8.94 22.79 10.88 22.79H10.89C16.94 22.79 21.79 17.88 21.79 11.79C21.79 9.15 20.82 6.7 19.05 4.91ZM12.04 20.93C10.31 20.93 8.62 20.45 7.15 19.55L6.8 19.35L4.05 20.3L5.01 17.63L4.79 17.27C3.8 15.73 3.27 13.93 3.27 12.07C3.27 7.94 7.13 4.62 12.04 4.62C14.2 4.62 16.22 5.45 17.69 6.93C19.16 8.41 20.04 10.43 20.04 12.59C20.04 16.73 16.12 20.93 12.04 20.93ZM16.56 14.42C16.31 14.29 15.09 13.7 14.87 13.61C14.64 13.53 14.47 13.49 14.31 13.74C14.14 13.99 13.67 14.55 13.53 14.71C13.39 14.88 13.25 14.9 13 14.77C12.75 14.64 11.97 14.4 11.06 13.59C10.35 12.96 9.89 12.19 9.75 11.94C9.62 11.69 9.74 11.56 9.86 11.44C9.97 11.33 10.11 11.15 10.23 11.01C10.35 10.87 10.39 10.77 10.47 10.6C10.55 10.44 10.51 10.3 10.45 10.17C10.39 10.04 9.89 8.82 9.69 8.32C9.5 7.82 9.3 7.9 9.15 7.9C9 7.9 8.84 7.9 8.67 7.9C8.5 7.9 8.24 7.97 8.02 8.21C7.8 8.46 7.16 9.05 7.16 10.27C7.16 11.49 8.07 12.67 8.19 12.83C8.31 13 9.89 15.4 12.25 16.46C12.84 16.72 13.3 16.88 13.66 16.99C14.25 17.19 14.79 17.16 15.22 17.1C15.7 17.03 16.69 16.5 16.89 15.91C17.09 15.32 17.09 14.83 17.03 14.71C16.97 14.6 16.81 14.54 16.56 14.42Z"/>
              </svg>
              Fale com o ZapCrítico no WhatsApp
            </a>
            
            <a 
              href="#features" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-foreground font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center border border-border shadow-sm"
            >
              Conhecer Funcionalidades
            </a>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 max-w-2xl mx-auto glass-card rounded-xl p-6 opacity-0 animate-scale-in animate-delay-400">
          <div className="flex items-start gap-4">
            <div className="min-w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary"
              >
                <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"></path>
                <path d="M14 3v5h5M18 21v-6M15 18h6"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Educação Crítica para o Mundo Digital</h3>
              <p className="text-muted-foreground">
                O <span className="font-medium text-primary">Zap Crítico</span> foi desenvolvido para capacitar estudantes a analisar criticamente 
                informações online, identificar fake news e desenvolver autonomia no ambiente digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
