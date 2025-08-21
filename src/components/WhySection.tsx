
import React from 'react';

const WhySection = () => {
  return (
    <section id="porque-um-chatbot" className="section-padding bg-secondary/50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">

          <h2 className="heading-lg mb-4 opacity-0 animate-fade-in animate-delay-100">Por que um chatbot?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Utilizou-se da tecnologia para tornar a educação crítica mais acessível e envolvente, 
            integrando-a perfeitamente na plataforma que os estudantes já utilizam diariamente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="opacity-0 animate-slide-in">
                <div className="feature-icon-wrapper mb-4">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Acessibilidade via WhatsApp</h3>
                <p className="text-muted-foreground">
                  Solução integrada ao WhatsApp, eliminando barreiras de acesso e 
                  permitindo que os estudantes utilizem uma plataforma que já é familiar.
                </p>
              </div>
              
              <div className="opacity-0 animate-slide-in animate-delay-100">
                <div className="feature-icon-wrapper mb-4">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interatividade Contínua</h3>
                <p className="text-muted-foreground">
                  O formato de conversa permite interações naturais e personalizadas, 
                  adaptando-se ao ritmo de aprendizagem de cada estudante.
                </p>
              </div>
              
              <div className="opacity-0 animate-slide-in animate-delay-200">
                <div className="feature-icon-wrapper mb-4">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Aprendizado Contextualizado</h3>
                <p className="text-muted-foreground">
                  Baseado na pedagogia de Paulo Freire, este chatbot promove o diálogo e 
                  a reflexão crítica a partir da realidade digital dos estudantes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 opacity-0 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="bg-white shadow-feature rounded-xl overflow-hidden p-2 max-w-md mx-auto">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      CE
                    </div>
                    <div>
                      <h4 className="font-medium">ZapCrítico</h4>
                      <p className="text-xs text-muted-foreground">Online agora</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-primary/10 text-foreground p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      Olá! Sou o ZapCrítico. Como posso te ajudar hoje?
                    </div>
                    
                    <div className="bg-primary/10 text-foreground p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      Posso analisar links, fazer perguntas reflexivas e ajudar você a desenvolver seu pensamento crítico sobre notícias e segurança digital!
                    </div>
                    
                    <div className="bg-gray-100 text-foreground p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                      Preciso analisar esta notícia criticamente. Você pode me ajudar?
                    </div>
                    
                    <div className="bg-primary/10 text-foreground p-3 rounded-lg rounded-tl-none max-w-[80%] animate-pulse-soft">
                      Claro! Envie o link da notícia e farei perguntas para ajudá-lo a refletir sobre o conteúdo.
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-t flex items-center">
                  <input 
                    type="text" 
                    placeholder="Digite sua mensagem..." 
                    className="w-full bg-gray-50 border-none text-sm p-2 rounded focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                  <button className="ml-2 p-2 rounded-full bg-primary text-white flex items-center justify-center">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-xl border border-primary/20 bg-white/50"></div>
              <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full rounded-xl border border-primary/10 bg-white/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
