
import React from 'react';

const features = [
  {
    title: "Análise do conteúdo de links e notícias",
    description: "Converse e reflita sobre qualquer matéria que encontrar na internet, afie seu pensamento crítico!",
    icon: (
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
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
      </svg>
    )
  },
  {
    title: "Quizzes interativos sobre desinformação",
    description: "Teste e aprimore seu conhecimento sobre desinformação digital através de desafios e perguntas personalizadas.",
    icon: (
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    title: "Dicas de segurança digital e prevenção de golpes",
    description: "Receba orientações personalizadas e práticas para proteger seus dados e evitar cair em armadilhas virtuais.",
    icon: (
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
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  },
  {
    title: "Orientações sobre o efeito bolha e os algoritmos",
    description: "Compreenda como os algoritmos influenciam o que você vê online e aprenda a expandir seu horizonte informacional.",
    icon: (
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
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    )
  }
];

const FeatureList = () => {
  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 opacity-0 animate-fade-in">
            Recursos Exclusivos
          </span>
          <h2 className="heading-lg mb-4 opacity-0 animate-fade-in animate-delay-100">Funcionalidades do Chatbot</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Este produto educacional foi desenvolvido com recursos específicos para ajudar estudantes a desenvolver 
            habilidades críticas essenciais para o ambiente digital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 opacity-0 animate-scale-in`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="feature-icon-wrapper mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <svg 
                  className="text-primary flex-shrink-0" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
