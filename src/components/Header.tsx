import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    window.open('https://noteforms.com/forms/holdr-bfx-15days-form-2xi2er', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className={`container mx-auto px-0 ${isMobile ? 'px-2' : ''} py-3 flex items-center justify-between w-full`}>
        <div className="flex items-center space-x-2 logo-container">
          <img 
            src="/holdr-logo.png" 
            alt="Holdr BFX Logo" 
            className={`${isMobile ? 'h-8' : 'h-10'} w-auto`}
          />
          <span className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-foreground header-font company-name`}>
            HOLDR BFX
          </span>
        </div>

        <div className="cta-button-container">
          <Button 
            onClick={scrollToContact}
            className={`btn-primary header-btn ${isMobile ? 'text-xs px-2 py-1 h-8' : ''}`}
          >
            {isMobile ? 'Free Trial' : 'Book Your Free 15‑Day Trial'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;