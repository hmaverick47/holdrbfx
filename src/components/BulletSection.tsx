import './BulletSection.css';

const BulletSection = () => {
  const bulletPoints = [
    {
      title: "Zero Budget Waste",
      description: "No more wondering what happens behind the scenes. Full transparency into every test, iteration, and optimization decision."
    },
    {
      title: "Creative Momentum", 
      description: "Every dollar works overtime. We cut out random creative “experiments” and focus your spend only on proven winners."
    },
    {
      title: "100% Results-Driven Pricing",
      description: "No setup fees, no guesswork, no hidden costs. You pay only for creative strategies and campaigns that generate measurable ROAS growth."
    },
    {
      title: "Battle-Tested Framework",
      description: "Every technique is pulled from hundreds of successful brand campaigns. Results are repeatable, scalable, and proven for D2C and ecommerce."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 bullet-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight header-font">
              Not 4 everyone but if You're Accepted, {" "}
              <span className="hero-gradient-text"> Here’s Exactly What You Get:</span>
            </h2>
            
            <div className="space-y-6">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 bullet-point-container">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground mb-2 header-font bullet-point-title">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed bullet-point-description">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden border border-border shadow-md">
              <video 
                className="w-full h-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletSection;