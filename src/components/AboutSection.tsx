import myHeadshot from "@/assets/my-headshot.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <img 
                src={myHeadshot}
                alt="Holdr BFX Expert"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                /* 
                  Options for different display styles:
                  - Current (w-80 h-80 object-cover): Fixed square with cropping
                  - For original aspect ratio: w-80 h-auto object-contain
                  - For non-cropped fit: w-80 max-h-80 object-contain
                */
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight header-font">
              About Your <span className="hero-gradient-text">Creative Optimization</span> Partner
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a CRO specialist who has been in the trenches with D2C brands for 8+ years, 
                turning chaotic ad accounts into predictable profit engines.
              </p>
              
              <p>
                My systematic framework consistently delivers 20%+ ROAS improvements within 30 days 
                by removing guesswork from scaling profitable campaigns.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
          <div className="text-center p-6 card-dark">
            <div className="text-3xl font-bold hero-gradient-text mb-2 header-font">30+</div>
            <div className="text-sm text-muted-foreground header-font">Brands Optimized</div>
          </div>
          <div className="text-center p-6 card-dark">
            <div className="text-3xl font-bold hero-gradient-text mb-2 header-font">$700k+</div>
            <div className="text-sm text-muted-foreground header-font">Ad Spend Optimized</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;