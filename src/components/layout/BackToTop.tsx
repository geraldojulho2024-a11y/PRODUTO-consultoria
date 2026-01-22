import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center justify-center group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
};

export default BackToTop;
