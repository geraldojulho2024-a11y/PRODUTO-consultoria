import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open(
      "https://wa.me/5511941621715?text=Olá! Vim pelo site e gostaria de saber mais sobre os serviços da PRODUTO Consultoria.",
      "_blank"
    );
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-200",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        )}
      >
        <div className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg shadow-lg">
          Fale Conosco
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-foreground" />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-16 h-16 rounded-full bg-success shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-success-foreground group-hover:scale-110 transition-transform" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-25" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
