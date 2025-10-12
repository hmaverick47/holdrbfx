import { Button } from "@/components/ui/button";
import "./ResponsiveButtons.css";

const FinalCTA = () => {
  const handleCTAClick = () => {
    // Direct link to the form
    window.open('https://noteforms.com/forms/holdr-bfx-15days-form-2xi2er', '_blank');
  };

  return (
    <section id="final-cta" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight header-font">
            Ready to Turn Your Ad Spend {" "}
            <span className="hero-gradient-text">Into Predictable Profit?</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join the exclusive circle of D2C brands who've unlocked sustainable, scalable growth—risk-free.
          </p>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border space-y-6">
            <div className="space-y-4">
              <div className="text-6xl md:text-8xl font-black hero-gradient-text">
                FREE
              </div>
              <p className="text-2xl md:text-3xl font-bold">
                15-Day Trial
              </p>
              <p className="text-lg text-muted-foreground">
                See real results before investing a single dollar
              </p>
            </div>

            <div className="flex justify-center w-full">
              <Button 
                onClick={handleCTAClick}
                className="btn-primary text-xl px-6 sm:px-16 py-4 sm:py-8 animate-pulse-glow whitespace-normal"
              >
                <span className="block px-1">Claim Your Free 15‑Day Trial Now</span>
              </Button>
            </div>
          </div>

          <div className="text-destructive font-semibold animate-pulse">
            ⏰ Only 4 spots available this quarter
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;