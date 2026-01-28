import { Award, Users, Globe, Target } from "lucide-react";
import fotoAndre from "@/assets/foto-andre.png";
const features = [{
  icon: Award,
  title: "35+ Anos",
  description: "Experiência transformando conhecimento técnico em resultados"
}, {
  icon: Globe,
  title: "Atuação Global",
  description: "Missões técnicas e projetos na Europa, EUA, China e mais de 7 países"
}, {
  icon: Users,
  title: "Parceiros",
  description: "Rede de especialistas para validar e desenvolver projetos"
}, {
  icon: Target,
  title: "Foco em Resultados",
  description: "Do projeto à liberação comercial com eficiência"
}];
const AboutSection = () => {
  return <section id="sobre" className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre Nós
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Mais de 35 anos de experiência transformando conhecimento técnico em{" "}
              <span className="text-primary">resultados industriais reais.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-bold">
              Atuamos no desenvolvimento de produtos, moldes, automação e otimização de processos em termoplásticos e (silicone líquido) LSR, ajudando empresas a ganhar eficiência, reduzir riscos eacelerar o time-to-market.
            </p>

            <div className="p-6 bg-card rounded-xl border border-border shadow-card mb-8">
              <div className="flex items-start gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img src={fotoAndre} alt="André Penteado Pires da Silveira" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    André Penteado Pires da Silveira
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    Consultor Sênior | Engenheiro Mecânico
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Especialização em gestão empresarial, atua desde 1986 no desenvolvimento de produtos e ferramentas, 
                    com foco na otimização de processos, automação industrial e controle de custos.
                  </p>
                </div>
              </div>
            </div>

            {/* Ciclo de Desenvolvimento */}
            <div className="mb-8 p-6 bg-gradient-primary rounded-2xl">
              <h3 className="font-display font-bold text-xl text-primary-foreground mb-4">
                Atuamos de forma integrada em todo o CICLO DE DESENVOLVIMENTO DE PRODUTOS.
              </h3>
              
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    <strong className="text-primary-foreground">Criação do produto</strong> (design, prototipagem, testes, embalagem)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    <strong className="text-primary-foreground">Criação de ferramentas de produção</strong> (projeto, construção e testes de moldes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    <strong className="text-primary-foreground">Automação industrial</strong> (robôs, máscaras, gabaritos, calibradores)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground mt-2 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    <strong className="text-primary-foreground">Análise de mão de obra</strong> (necessidade, eficiência e otimização)
                  </span>
                </li>
              </ul>
              
              <p className="text-primary-foreground/80 leading-relaxed">
                Além disso, monitoramos, definimos e otimizamos processos industriais, garantindo eficiência, qualidade e redução de custos.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map(feature => <div key={feature.title} className="p-4 rounded-lg bg-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-0.5">
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>)}
            </div>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform -rotate-3 opacity-10" />
              
              {/* Main Card */}
              <div className="relative bg-card rounded-3xl p-8 shadow-card-hover border border-border overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative space-y-8">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-primary shadow-primary mb-6">
                      <Globe className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                      Visão Integrada
                    </h3>
                    <p className="text-muted-foreground text-xl lg:text-2xl mt-4">
                      Produto, ferramenta, automação e processo
                    </p>
                  </div>

                  <div className="space-y-5">
                    {["Transformação de termoplástico", "Injeção de LSR", "Gestão de ferramentaria", "Otimização de processos"].map((item, index) => <div key={item} className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-xl lg:text-2xl font-semibold text-foreground">{item}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;