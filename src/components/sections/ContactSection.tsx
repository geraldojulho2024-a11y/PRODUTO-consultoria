import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "+55 11 94162-1715",
    href: "tel:+5511941621715",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "andre.silveira@produto-ltda.com",
    href: "mailto:andre.silveira@produto-ltda.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Jundiaí, SP - Brasil",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Sexta, 8h às 18h",
    href: null,
  },
];

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511941621715?text=Olá! Gostaria de agendar uma conversa sobre consultoria técnica.",
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Contato
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Vamos Conversar Sobre o{" "}
            <span className="text-primary">Seu Projeto</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entre em contato para uma consulta inicial e descubra como podemos ajudar 
            sua empresa a alcançar novos patamares de eficiência.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="p-8 bg-card rounded-2xl border border-border shadow-card">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultant Info */}
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground mb-2">Consultor Responsável</p>
                <p className="font-display font-bold text-foreground">
                  Eng. André Penteado Pires da Silveira
                </p>
                <p className="text-sm text-muted-foreground">
                  PRODUTO Consultoria Ltda.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 bg-gradient-primary rounded-2xl text-primary-foreground relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-display font-bold text-2xl mb-4">
                  Pronto para Começar?
                </h3>

                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Nossa equipe está preparada para entender suas necessidades e propor 
                  as melhores soluções técnicas para o seu projeto.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="heroOutline"
                    size="lg"
                    className="w-full"
                    onClick={handleWhatsApp}
                  >
                    <Phone className="w-5 h-5" />
                    Falar no WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="w-full text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <a href="mailto:andre.silveira@produto-ltda.com">
                      <Mail className="w-5 h-5" />
                      Enviar E-mail
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-primary-foreground/60 text-center mt-6">
                  Respondemos em até 24 horas úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
