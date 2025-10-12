import { Button } from "@/components/ui/button";
import "./ResponsiveButtons.css";

const BonusSection = () => {
  const bonuses = [
    {
      title: "Complete NDA Confidentiality",
      description: "Your strategies and data are protected by a strict NDA—nothing leaves your account."
    },
    {
      title: "Direct Expert Access",
      description: "Bypass middlemen and work one-on-one with your CRO specialist for instant feedback."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight header-font mb-6">
            <span className="hero-gradient-text">Exclusive Bonuses</span> for Ambitious Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock premium benefits that set top performers apart.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
            
            <div className="relative z-10 space-y-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="group text-center">
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300 mx-auto shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    {index + 1}
                  </div>
                  <div className="space-y-2 mt-4">
                    <h3 className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                      {bonus.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-700 text-lg mb-6">
                Included FREE with your 15-day trial
              </p>
              <div className="flex justify-center w-full">
                <Button 
                  onClick={() => window.open('https://noteforms.com/forms/holdr-bfx-15days-form-2xi2er', '_blank')}
                  className="bg-black hover:bg-gray-900 text-white text-base sm:text-xl px-2 sm:px-16 py-3 sm:py-6 shadow-[0_0_15px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(0,0,0,0.8)] transition-all duration-300 w-full sm:w-auto overflow-hidden"
                >
                  <span className="whitespace-normal text-xs sm:text-base px-0 sm:px-1 block overflow-hidden">Claim Your Free 15‑Day Trial Now</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;