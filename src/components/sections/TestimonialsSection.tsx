import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Roberto Caltran",
    role: "Pesquisa & Desenvolvimento | Produtos e Embalagens | Gestão de Pessoas",
    content: "Trabalhei com o André por muitos anos, e durante um bom tempo ele foi sênior em relação a mim, mas não me supervisionava diretamente. E durante esse período aprendi muito com sua experiência e conhecimento. André é uma pessoa com um conhecimento técnico absurdo, muito inteligente e com grande experiência em todas as áreas e etapas do desenvolvimento de um produto, molde ou ferramenta. Dedicado, confiável e responsável, tem total capacidade de contribuir de forma eficiente e determinante nos projetos em que estiver envolvido.",
    initials: "CC",
    rating: 5,
  },
  {
    name: "Sandro Luís Silva",
    role: "Inovação | Pesquisa e Desenvolvimento de Produtos e Serviços | Hands On",
    content: "O André é o tipo de Engenheiro e Gestor que entende muito a fundo a questão de processamento de plástico (injeção, extrusão, sopro, vacuum forming e rotomoldagem) aliados ao conhecimento do mercado de ferramentarias a nível mundial. Isto faz com as soluções trazidas por ele sejam extremamente produtivas, econômicas e altamente eficazes. O genial do trabalho do André é a conciliação de problemas complexos em soluções simples de cair o queixo! Grato por todos os ensinamentos!",
    initials: "SS",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Depoimentos
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            O Que Nossos{" "}
            <span className="text-primary">Parceiros Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Resultados comprovados por profissionais que trabalharam conosco ao longo dos anos.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gradient-primary shadow-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <div className="flex gap-1 mb-4 pt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
                  <span className="text-lg font-bold text-primary-foreground font-display">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
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

export default TestimonialsSection;
