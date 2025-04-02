
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ChevronRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";

interface IcoCardProps {
  id: string;
  name: string;
  twitterHandle: string;
  description: string;
  status: 'active' | 'abandoned' | 'completed' | 'warning';
  raisedAmount: number;
  currentValue: number;
  logoUrl: string;
  walletAddress: string;
}

const IcoCard = ({
  id,
  name,
  twitterHandle,
  description,
  status,
  raisedAmount,
  currentValue,
  logoUrl,
  walletAddress,
}: IcoCardProps) => {
  // Calculate ROI percentage
  const roi = ((currentValue - raisedAmount) / raisedAmount) * 100;
  
  // Status indicator color and icon
  const getStatusInfo = () => {
    switch (status) {
      case 'active':
        return { icon: <CheckCircle className="h-4 w-4" />, color: 'bg-green-500/20 text-green-500' };
      case 'abandoned':
        return { icon: <AlertTriangle className="h-4 w-4" />, color: 'bg-red-500/20 text-red-500' };
      case 'completed':
        return { icon: <CheckCircle className="h-4 w-4" />, color: 'bg-blue-500/20 text-blue-500' };
      case 'warning':
        return { icon: <AlertTriangle className="h-4 w-4" />, color: 'bg-yellow-500/20 text-yellow-500' };
      default:
        return { icon: <CheckCircle className="h-4 w-4" />, color: 'bg-green-500/20 text-green-500' };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="glass rounded-xl overflow-hidden hover:border-solana-green/40 transition-all duration-300 hover:shadow-lg hover:shadow-solana-green/10">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              <img src={logoUrl} alt={name} className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{name}</h3>
              <a 
                href={`https://twitter.com/${twitterHandle}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground hover:text-solana-green flex items-center gap-1"
              >
                @{twitterHandle}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
          <Badge className={`${statusInfo.color} flex items-center gap-1`}>
            {statusInfo.icon}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted/30 p-3 rounded-lg">
            <p className="text-xs text-foreground/60 mb-1">Raised</p>
            <p className="font-medium">{raisedAmount} SOL</p>
          </div>
          <div className="bg-muted/30 p-3 rounded-lg">
            <p className="text-xs text-foreground/60 mb-1">Current Value</p>
            <p className="font-medium">{currentValue} SOL</p>
          </div>
        </div>
        
        <div className="bg-muted/30 p-3 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-foreground/60">ROI</p>
            <p className={`text-sm font-medium ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {roi >= 0 ? '+' : ''}{roi.toFixed(2)}%
            </p>
          </div>
          <div className="w-full bg-muted/50 h-1 mt-2 rounded-full overflow-hidden">
            <div 
              className={`h-full ${roi >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
              style={{ width: `${Math.min(Math.abs(roi), 100)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground truncate w-3/4">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-6)}
          </p>
          <Link 
            to={`/project/${id}`}
            className="text-solana-green hover:text-solana-purple transition-colors flex items-center text-sm gap-1"
          >
            Details
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IcoCard;
