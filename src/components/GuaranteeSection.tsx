const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight header-font">
              Our <span className="hero-gradient-text">Iron-Clad Guarantee</span>
            </h2>
            
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 md:p-8">
              <p className="text-destructive text-lg md:text-xl font-semibold leading-relaxed">
                If ROAS is not increased by at least 20% and ad spend stayed the same — 
                we work for free until you see results.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              P.S. Every day you wait is another day your best ad could burn out. 
              Let's fix that before it happens.
            </p>
          </div>

          <div className="pt-4">
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Results Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;