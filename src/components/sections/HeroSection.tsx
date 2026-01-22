import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511941621715?text=Olá! Gostaria de solicitar um orçamento para consultoria técnica.",
      "_blank"
    );
  };

  const scrollToServices = () => {
    const element = document.querySelector("#servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ambiente industrial moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Mais de 35 anos de experiência
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transformamos Ideias em{" "}
            <span className="relative">
              Produtos Industriais
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Consultoria especializada em desenvolvimento de produtos, moldes e automação para termoplásticos e LSR. 
            Do projeto à produção, garantimos viabilidade técnica e competitividade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToServices}>
              Conheça Nossos Serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">35+</div>
                <div className="text-sm text-primary-foreground/70">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">20+</div>
                <div className="text-sm text-primary-foreground/70">Missões na China</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground font-display">7+</div>
                <div className="text-sm text-primary-foreground/70">Países Atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
