import React from 'react';

const MethodologySection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-destructive/10 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">

          <h2 className="heading-lg mb-4 opacity-0 animate-fade-in animate-delay-100">
            Por que o Zap Crítico <span className="text-destructive font-bold">NÃO</span> faz fact checking?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Nossa abordagem educacional é baseada na Pedagogia Crítica de Paulo Freire, 
            focando no desenvolvimento da autonomia e do pensamento crítico do estudante.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-slide-in">
            <div className="glass-card p-6 rounded-xl border border-destructive/20 bg-destructive/5">
              <div className="flex items-start gap-4">
                <div className="min-w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-destructive"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-destructive">O que o Zap Crítico NÃO faz:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>NUNCA diz se uma notícia é verdadeira ou falsa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>NUNCA toma partido ou emite julgamentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>NÃO é um fact checker ou verificador de fatos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>NÃO faz checagem de fatos em tempo real</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex items-start gap-4">
                <div className="min-w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">O que o Zap Crítico FAZ:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Faz perguntas instigantes para promover reflexão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Apresenta diferentes perspectivas sobre o assunto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Orienta sobre como verificar informações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Desenvolve habilidades de análise crítica</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-300">
            <div className="glass-card p-8 rounded-xl border border-border/50">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Metodologia Educacional</h3>
                <p className="text-muted-foreground">
                  Baseada na Pedagogia Crítica de Paulo Freire
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Desenvolvimento da Autonomia</h4>
                    <p className="text-sm text-muted-foreground">
                      O estudante desenvolve senso crítico próprio e toma decisões baseadas em sua própria análise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pensamento Crítico</h4>
                    <p className="text-sm text-muted-foreground">
                      O chatbot traz perguntas e instigações relevantes para promover reflexão e análise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Conclusão Própria</h4>
                    <p className="text-sm text-muted-foreground">
                      O objetivo é que cada pessoa chegue à sua própria conclusão através do processo reflexivo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium text-center">
                  "A educação não transforma o mundo. A educação muda as pessoas. 
                  As pessoas transformam o mundo." - Paulo Freire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
