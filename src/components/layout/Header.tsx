import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoAzul from "@/assets/logoazul.png";
const navItems = [{
  label: "Início",
  href: "#inicio"
}, {
  label: "Sobre",
  href: "#sobre"
}, {
  label: "Diferenciais",
  href: "#diferenciais"
}, {
  label: "Serviços",
  href: "#servicos"
}, {
  label: "Depoimentos",
  href: "#depoimentos"
}, {
  label: "Contato",
  href: "#contato"
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-card py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img src={logoAzul} alt="PRODUTO Consultoria" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-base font-semibold uppercase tracking-wide transition-colors hover:text-primary text-foreground">
              {item.label}
            </button>)}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="default" size="default" onClick={() => window.open("https://wa.me/5511941621715?text=Olá! Gostaria de saber mais sobre os serviços da PRODUTO Consultoria.", "_blank")}>
            <Phone className="w-4 h-4" />
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg transition-all duration-300 overflow-hidden", isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navItems.map(item => <button key={item.href} onClick={() => handleNavClick(item.href)} className="text-left py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors">
              {item.label}
            </button>)}
          <div className="pt-4 border-t border-border mt-2">
            <Button variant="whatsapp" size="lg" className="w-full" onClick={() => window.open("https://wa.me/5511941621715?text=Olá! Gostaria de saber mais sobre os serviços da PRODUTO Consultoria.", "_blank")}>
              <Phone className="w-4 h-4" />
              Falar no WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>;
};
export default Header;