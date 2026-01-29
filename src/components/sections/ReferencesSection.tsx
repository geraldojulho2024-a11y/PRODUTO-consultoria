import { Quote } from "lucide-react";
import astraLogo from "@/assets/logos/astra.png";

const references = [
  {
    company: "Astra S/A Industria e Comércio",
    website: "https://loja.astra-sa.com/",
    author: "Adriano Persona M. Gomes",
    role: "CEO da Astra S/A Industria e Comércio",
    content: "Trabalhei com o André por 20 anos. Em muitas ocasiões bastante próximo para perceber quão técnico e focado em melhoria ele é. Sempre tentando melhorar as coisas e buscando soluções para que isso ocorresse. Sem contar o lado ético, disso não se questiona com o André.",
    initials: "AG",
    logo: astraLogo,
  },
  {
    company: "Kolplast CI Ltda",
    website: "https://kolplast.com.br/",
    author: "Ricardo Guimarães",
    role: "Gerente Industrial",
    content: "Como Gerente Industrial, recomendo o trabalho deste consultor em ferramentaria e moldes plásticos. Profissional experiente, com amplo conhecimento técnico e visão prática da indústria. Destaca-se pela disponibilidade em ajudar, pela busca constante de alternativas eficientes e pelo alto nível de comprometimento na entrega de resultados.",
    initials: "RG",
    logo: null,
  },
  {
    company: "Martiplast Industria e Comércio de Plasticos Ltda",
    website: "https://www.ou.com.br/",
    author: "Nelson Martini",
    role: "Diretor de Desenvolvimento",
    content: "Sempre foi um trabalho bem profissional, embasado em muita experiência teórica e técnica, com amplo conhecimento e vivência em desenvolvimento de produtos e moldes de injeção.",
    initials: "NM",
    logo: null,
  },
  {
    company: "PKW Texturas Ltda",
    website: "https://www.pkw.com.br/",
    author: "João Carlos Lopes",
    role: "Diretor Técnico",
    content: "Trabalhei com o André por muitos anos e sempre mantivemos um relacionamento profissional sólido e confiável. Ao longo desse período, ele atendeu plenamente às demandas administrativas e técnicas, demonstrando ética, correção e elevado nível de competência.",
    initials: "JL",
    logo: null,
  },
];

const ReferencesSection = () => {
  return (
    <section id="referencias" className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Referências
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            O Que Nossos{" "}
            <span className="text-primary">Parceiros Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Resultados comprovados por profissionais que trabalharam conosco ao longo dos anos.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {references.map((reference) => (
            <div
              key={reference.company}
              className="relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gradient-primary shadow-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Company Logo Placeholder */}
              <div className="flex items-center gap-4 mb-4 pt-2">
                <div className="w-16 h-16 rounded-lg bg-muted border border-border flex items-center justify-center overflow-hidden">
                  {reference.logo ? (
                    <img 
                      src={reference.logo} 
                      alt={`Logo ${reference.company}`} 
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground text-center px-1">Logo</span>
                  )}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">
                    {reference.company}
                  </h4>
                  <a 
                    href={reference.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    {reference.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{reference.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
                  <span className="text-lg font-bold text-primary-foreground font-display">
                    {reference.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {reference.author}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {reference.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
