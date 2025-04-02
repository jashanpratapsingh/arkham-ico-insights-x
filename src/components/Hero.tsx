
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-6">
          <span className="py-1 px-4 rounded-full bg-solana-purple/20 border border-solana-purple/30 text-xs uppercase tracking-wider font-medium inline-block mb-4">
            Solana Ecosystem Research
          </span>
        </div>
        <div className="text-reveal-container mb-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white opacity-0 animate-text-reveal">
            <span className="text-gradient">ICO Insight</span> Platform
          </h1>
        </div>
        <div className="text-reveal-container mb-8">
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto opacity-0 animate-text-reveal-delay-1">
            Comprehensive analysis of X-based ICOs in the Solana ecosystem.
            Track fund flows, project status, and investor outcomes.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-text-reveal-delay-2 animate-fill-forwards">
          <button className="px-6 py-3 rounded-lg bg-solana-green text-background font-medium flex items-center gap-2 hover:bg-solana-green/90 transition-colors">
            Explore ICOs 
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-6 py-3 rounded-lg bg-transparent border border-white/20 text-foreground font-medium hover:bg-white/5 transition-colors">
            View Analysis
          </button>
        </div>
        
        <div className="mt-12 md:mt-16 glass rounded-xl p-4 opacity-0 animate-text-reveal-delay-3 animate-fill-forwards">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-lg font-medium text-solana-green mb-1">37+</p>
              <p className="text-sm text-foreground/60">ICOs Analyzed</p>
            </div>
            <div className="p-4">
              <p className="text-lg font-medium text-solana-green mb-1">4,291 SOL</p>
              <p className="text-sm text-foreground/60">Funds Tracked</p>
            </div>
            <div className="p-4">
              <p className="text-lg font-medium text-solana-green mb-1">62%</p>
              <p className="text-sm text-foreground/60">Projects Active</p>
            </div>
            <div className="p-4">
              <p className="text-lg font-medium text-solana-green mb-1">-23.4%</p>
              <p className="text-sm text-foreground/60">Avg. ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
