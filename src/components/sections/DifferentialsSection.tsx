import { MapPin, Plane, Factory, Lightbulb } from "lucide-react";

const countries = [
  "Alemanha",
  "França",
  "Estados Unidos",
  "Espanha",
  "Portugal",
  "China",
];

const differentials = [
  {
    icon: Plane,
    title: "Experiência Internacional",
    description: "Missões técnicas em mais de 7 países, incluindo mais de 20 viagens à China para feiras internacionais e desenvolvimento de fornecedores.",
    highlight: "20+ viagens",
  },
  {
    icon: Factory,
    title: "Desenvolvimento de Fornecedores",
    description: "Apoio técnico na construção de moldes e produção de peças na China, garantindo qualidade e competitividade.",
    highlight: "Qualidade global",
  },
  {
    icon: Lightbulb,
    title: "Tecnologias Avançadas",
    description: "Acesso às mais recentes inovações do mercado mundial, prontos para transferir esse conhecimento aos nossos clientes.",
    highlight: "Inovação contínua",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Diferenciais
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Por Que Escolher a{" "}
            <span className="text-primary">PRODUTO Consultoria</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa atuação é sustentada por uma sólida experiência internacional, 
            adquirida ao longo de inúmeras missões técnicas e projetos no exterior.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-xs font-semibold text-primary">{item.highlight}</span>
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary shadow-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Countries Section */}
        <div className="relative p-8 md:p-12 bg-gradient-primary rounded-3xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Presença Global
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Participação ativa em feiras internacionais, desenvolvimento e avaliação de fornecedores, 
                e orientação técnica para produção de peças em termoplástico e silicone líquido.
              </p>
              
              {/* Country Tags */}
              <div className="flex flex-wrap gap-3">
                {countries.map((country) => (
                  <div
                    key={country}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20"
                  >
                    <MapPin className="w-4 h-4 text-primary-foreground/70" />
                    <span className="text-sm font-medium text-primary-foreground">{country}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 text-center">
                <div className="text-4xl font-bold text-primary-foreground font-display mb-2">20+</div>
                <div className="text-sm text-primary-foreground/70">Viagens Técnicas à China</div>
              </div>
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 text-center">
                <div className="text-4xl font-bold text-primary-foreground font-display mb-2">7+</div>
                <div className="text-sm text-primary-foreground/70">Países com Atuação</div>
              </div>
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 text-center">
                <div className="text-4xl font-bold text-primary-foreground font-display mb-2">35+</div>
                <div className="text-sm text-primary-foreground/70">Anos de Mercado</div>
              </div>
              <div className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 text-center">
                <div className="text-4xl font-bold text-primary-foreground font-display mb-2">100%</div>
                <div className="text-sm text-primary-foreground/70">Foco em Resultados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
