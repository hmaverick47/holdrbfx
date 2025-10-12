import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/holdr-logo.png" 
              alt="Holdr BFX Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-foreground">HOLDR BFX</span>
          </div>

          <div className="flex items-center justify-center mx-auto md:mx-0">
            <a 
              href="https://www.instagram.com/bfxholdr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              holdr.spiralscales@gmail.com
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © 2025 HOLDR BFX. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;