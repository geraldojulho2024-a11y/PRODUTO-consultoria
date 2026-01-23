import { Package, Wrench, Bot, Users, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [{
  icon: Package,
  title: "Criação do Produto",
  description: "Design, prototipagem, testes e embalagem - todo o ciclo de desenvolvimento do produto.",
  features: ["Design industrial", "Prototipagem rápida", "Testes de validação", "Desenvolvimento de embalagem"]
}, {
  icon: Wrench,
  title: "Ferramentas de Produção",
  description: "Projeto, construção e testes de moldes para garantir qualidade e eficiência.",
  features: ["Projeto de moldes", "Construção", "Try-out", "Otimização"]
}, {
  icon: Bot,
  title: "Automação Industrial",
  description: "Robôs, máscaras, gabaritos e calibradores para maximizar produtividade.",
  features: ["Robótica", "Dispositivos", "Gabaritos", "Calibradores"]
}, {
  icon: Users,
  title: "Análise de Mão de Obra",
  description: "Avaliação de necessidade, eficiência e otimização de recursos humanos.",
  features: ["Dimensionamento", "Eficiência", "Treinamento", "Otimização"]
}, {
  icon: BarChart3,
  title: "Otimização de Processos",
  description: "Monitoramento, definição e melhoria de processos industriais.",
  features: ["Análise de processos", "Redução de custos", "Controle de qualidade", "KPIs"]
}];
const ServicesSection = () => {
  const handleWhatsApp = (service: string) => {
    window.open(`https://wa.me/5511941621715?text=Olá! Gostaria de saber mais sobre o serviço de ${service}.`, "_blank");
  };
  return <section id="servicos" className="py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Nossos Serviços
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Do Projeto à{" "}
            <span className="text-primary">Liberação Comercial</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Atuamos de forma integrada em todo o ciclo de desenvolvimento do produto, 
            desde o início do projeto até a liberação comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => <div key={service.title} className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover overflow-hidden">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-primary group-hover:shadow-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>)}
                </ul>
                
                {/* CTA */}
                <Button variant="ghost" className="w-full justify-between group/btn" onClick={() => handleWhatsApp(service.title)}>
                  Saber Mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>)}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>;
};
export default ServicesSection;