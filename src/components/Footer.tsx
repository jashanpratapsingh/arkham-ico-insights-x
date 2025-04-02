
import { Github, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-solana-green to-solana-purple"></div>
              <h2 className="text-xl font-bold text-gradient">ICO Insight</h2>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Comprehensive analysis of X-based ICOs in the Solana ecosystem, 
              tracking fund flows and project status for better investment decisions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="text-foreground/70 hover:text-solana-green transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-solana-green transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                  Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                  Report an ICO
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-solana-green transition-colors">
                  Methodology
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} ICO Insight. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/50 hover:text-foreground/70 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
