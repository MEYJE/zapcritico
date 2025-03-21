
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container-custom relative">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70 animate-pulse-soft"></div>
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl opacity-70"></div>
        
        <div className="max-w-3xl mx-auto text-center relative">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
            Educação para a Era Digital
          </span>
          
          <h1 className="heading-xl mb-6 opacity-0 animate-fade-in animate-delay-100">
            Chatbot Educacional para Pensamento Crítico na Cibercultura
          </h1>
          
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
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path 
                  d="M17.6 6.31999C16.8 5.49999 15.8 4.83999 14.7 4.39999C13.6 3.94999 12.3 3.69999 11 3.69999C9.7 3.69999 8.39999 3.94999 7.29999 4.39999C6.19999 4.83999 5.19999 5.49999 4.39999 6.31999C3.59999 7.13999 2.99999 8.09999 2.59999 9.19999C2.19999 10.3 1.89999 11.6 1.89999 12.9C1.89999 14.2 2.09999 15.5 2.59999 16.6C3.09999 17.7 3.69999 18.7 4.49999 19.5L4.59999 19.6C4.69999 19.7 4.79999 19.8 4.89999 19.9L5.89999 20.9C6.29999 21.3 6.89999 21.6 7.49999 21.6H8.99999C9.59999 21.6 10.1 21.3 10.6 20.9L11.6 19.9C11.7 19.8 11.8 19.7 11.9 19.6L12 19.5C12.7 18.7 13.4 17.7 13.9 16.6C14.4 15.5 14.6 14.3 14.6 12.9C14.6 11.5 14.4 10.3 13.9 9.19999C13.4 8.09999 12.8 7.09999 12 6.29999" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 6.30005C11.3 5.60005 10.3 5.00005 9.3 4.60005C8.2 4.20005 7.1 4.00005 5.9 4.00005C4.8 4.00005 3.7 4.20005 2.6 4.60005C1.6 5.00005 0.7 5.60005 0 6.30005" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M14.5 11.1001C15.3 12.0001 16.5 12.6001 17.8 12.9001C19 13.2001 20.4 13.2001 21.7 12.9001C23 12.6001 24.2 12.0001 25 11.1001" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M21.3 13.4C21.6 14.5 21.9 15.7 21.9 16.9C21.9 18.1 21.7 19.3 21.2 20.3C20.7 21.3 20.1 22.2 19.3 23" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M19.3 23C18.5 23.8 17.6 24.4 16.5 24.8C15.5 25.2 14.3 25.4 13 25.4C11.7 25.4 10.5 25.2 9.5 24.8C8.5 24.4 7.5 23.8 6.7 23" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M9 16.5C9.82843 16.5 10.5 15.8284 10.5 15C10.5 14.1716 9.82843 13.5 9 13.5C8.17157 13.5 7.5 14.1716 7.5 15C7.5 15.8284 8.17157 16.5 9 16.5Z" 
                  fill="currentColor"
                />
                <path 
                  d="M15 16.5C15.8284 16.5 16.5 15.8284 16.5 15C16.5 14.1716 15.8284 13.5 15 13.5C14.1716 13.5 13.5 14.1716 13.5 15C13.5 15.8284 14.1716 16.5 15 16.5Z" 
                  fill="currentColor"
                />
              </svg>
              Fale Conosco no WhatsApp
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
                Nosso chatbot foi desenvolvido para capacitar estudantes a analisar criticamente 
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
