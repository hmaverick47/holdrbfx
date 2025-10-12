import funnelGraphic from "@/assets/funnel-graphic.jpg";
import { Button } from "@/components/ui/button";
import "./OfferStack.css";
import "./ResponsiveButtons.css";

const OfferStack = () => {
  const offers = [
    {
      title: "Store CRO",
      value: "$1,500",
      description: "Audit and optimize every step of your funnel to convert more visitors into buyers."
    },
    {
      title: "Offer Optimization",
      value: "$800", 
      description: "Refine your messaging and product positioning so customers want to buy instantly."
    },
    {
      title: "Creative Making & Testing",
      value: "$1,200",
      description: "Create and A/B test ads and creatives to run only what proves to convert best."
    }
  ];

  const totalValue = 3500;

  return (
    <section className="py-20">
      <div className="container mx-auto px-1 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight header-font mb-6 px-0 sm:px-2 mx-auto">
            Multiply <span className="hero-gradient-text">Your ROAS With</span> Our Proven System
          </h2>
          
          {/* Mobile/tablet image - shown only on smaller screens */}
          <div className="block lg:hidden mb-6 mobile-funnel-image">
            <img 
              src={funnelGraphic}
              alt="ROAS Optimization Funnel Process"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            This exact system is Used by major 7-8 Fig ecom brands all over the niches
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 hidden lg:block">
            <img 
              src={funnelGraphic}
              alt="ROAS Optimization Funnel Process"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 w-full px-1">
            {offers.map((offer, index) => (
              <div key={index} className="card-dark group hover:scale-[1.02] transition-all duration-300 max-w-full overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-2">
                    {offer.title}
                  </h3>
                  <span className="text-primary font-bold text-lg whitespace-nowrap">
                    {offer.value}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {offer.description}
                </p>
              </div>
            ))}

            <div className="mt-8 p-3 sm:p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20 max-w-full">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Total Value</p>
                <p className="text-3xl font-bold line-through text-muted-foreground">
                  ${totalValue.toLocaleString()}
                </p>
                <p className="text-3xl sm:text-4xl font-black hero-gradient-text break-words">
                  FREE 15-Day Trial
                </p>
                <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6">
                  Then only pay 50% of the next project we do for you.
                </p>
                
                <div className="flex justify-center w-full">
                  <Button 
                    onClick={() => window.open('https://noteforms.com/forms/holdr-bfx-15days-form-2xi2er', '_blank')}
                    className="btn-primary text-base sm:text-xl px-2 sm:px-16 py-3 sm:py-6 animate-pulse-glow w-full overflow-hidden text-center mx-auto"
                  >
                    <span className="whitespace-normal text-xs sm:text-base block overflow-hidden">Claim Your Free 15‑Day Trial Now</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;