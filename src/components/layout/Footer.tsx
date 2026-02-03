import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logoBranco from "@/assets/logoBranco.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logoBranco} alt="PRODUTO Consultoria" className="h-60" />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 font-bold">
              Um novo olhar traz resultados surpreendentes!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Diferenciais", "Serviços", "Depoimentos", "Contato"].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5511941621715" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  +55 11 94162-1715
                </a>
              </li>
              <li>
                <a href="mailto:andre.silveira@produto-ltda.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  andre.silveira@produto-ltda.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Jundiaí, SP - Brasil
              </li>
              <li>
                <a href="https://www.linkedin.com/company/produto-consultoria-ltda/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} PRODUTO Consultoria Ltda. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/50">
            CNPJ: Sob consulta
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;