
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center relative z-50">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-solana-green to-solana-purple animate-pulse-slow"></div>
        <h1 className="text-xl font-bold text-gradient">ICO Insight</h1>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#dashboard" className="text-foreground/80 hover:text-solana-green transition-colors">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#projects" className="text-foreground/80 hover:text-solana-green transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#analysis" className="text-foreground/80 hover:text-solana-green transition-colors">
                Analysis
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search ICOs..." 
              className="pl-10 pr-4 py-2 rounded-full bg-muted text-sm w-40 focus:w-60 transition-all focus:outline-none focus:ring-1 focus:ring-solana-green"
            />
          </div>
          <Button className="bg-solana-green text-background hover:bg-solana-green/90">
            Connect Wallet
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-foreground/80 hover:text-solana-green"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card p-6 glass md:hidden border-t border-white/5">
          <nav className="mb-6">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#dashboard" 
                  className="text-foreground/80 hover:text-solana-green transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-foreground/80 hover:text-solana-green transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#analysis" 
                  className="text-foreground/80 hover:text-solana-green transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Analysis
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search ICOs..." 
              className="pl-10 pr-4 py-2 rounded-full bg-muted text-sm w-full focus:outline-none focus:ring-1 focus:ring-solana-green"
            />
          </div>
          <Button className="w-full bg-solana-green text-background hover:bg-solana-green/90">
            Connect Wallet
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
