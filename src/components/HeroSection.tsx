import { Button } from "@/components/ui/button";
import "./HeroSection.css";
import "./ResponsiveButtons.css";

const HeroSection = () => {
  const scrollToContact = () => {
    window.open('https://noteforms.com/forms/holdr-bfx-15days-form-2xi2er', '_blank');
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-4 md:space-y-6">
          <p className="font-semibold tracking-wide uppercase header-font hero-subheading text-accent">
            Ecommerce Brands: Stop Losing 73% of Your Ad Spend
          </p>

          <h1 className="font-bold leading-tight header-font hero-heading">
            Get 20%+ More Revenue {" "}
            <span className="hero-gradient-text">From Your Existing Traffic </span>{" "}
            by Fixing Every Leak in Your Funnel{" "}
            <span className="hero-gradient-text">—Fast</span>{" "}
          
          </h1>

          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed hero-description hidden">
            Listen, taking action is good.
But taking the wrong actions? That’s how you end up with a funnel that leaks customers at every step.

And instead of getting rich, you’re just making Zuckerberg’s pockets fatter.
          </p>

          <div className="flex justify-center my-12">
            <div className="w-full max-w-2xl aspect-video bg-secondary rounded-xl flex items-center justify-center border-2 border-primary/20">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">VSL Video Placeholder</p>
                <p className="text-sm text-muted-foreground">Click to replace with YouTube embed</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-destructive font-semibold animate-pulse hero-description">
              ⚠️ Limited to 4 Brands This Quarter. Then Nothing Until January.
            </p>

            <div className="flex justify-center w-full">
              <Button 
                onClick={scrollToContact}
                className="btn-primary px-6 md:px-12 py-3 md:py-6 animate-pulse-glow whitespace-normal"
              >
                <span className="block px-1">Start Your Free 15‑Day Trial</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;