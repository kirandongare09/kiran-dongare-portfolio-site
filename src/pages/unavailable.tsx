const ComingSoon = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-section-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-glass-gradient backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-glass-border/30 shadow-xl">
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                This section is <span className="text-primary font-semibold">temporarily unavailable</span>.  
                Please check back soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ComingSoon;
  
  