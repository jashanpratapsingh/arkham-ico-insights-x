
export interface IcoProject {
  id: string;
  name: string;
  twitterHandle: string;
  description: string;
  status: 'active' | 'abandoned' | 'completed' | 'warning';
  raisedAmount: number;
  currentValue: number;
  logoUrl: string;
  walletAddress: string;
  launchDate: string;
  category: string;
}

export const icoProjects: IcoProject[] = [
  {
    id: "1",
    name: "SolMarket",
    twitterHandle: "SolMarket",
    description: "Decentralized marketplace for NFTs on Solana with low fees and instant settlements.",
    status: "active",
    raisedAmount: 450,
    currentValue: 720,
    logoUrl: "https://placeholder.svg",
    walletAddress: "8xGzLbLMgrXySXCsqGKXQiXWfLAoXNS7AY1LBmJ9FBv1",
    launchDate: "2023-03-15",
    category: "NFT"
  },
  {
    id: "2",
    name: "LunarFinance",
    twitterHandle: "LunarFin",
    description: "DeFi lending protocol on Solana offering collateralized loans and yield farming opportunities.",
    status: "warning",
    raisedAmount: 310,
    currentValue: 155,
    logoUrl: "https://placeholder.svg",
    walletAddress: "5xGzLbLMgrXySXCsqGKXQiXWfLAoXNS7AY1LBmJ9FBv2",
    launchDate: "2023-04-22",
    category: "DeFi"
  },
  {
    id: "3",
    name: "SolPlay",
    twitterHandle: "SolPlayGame",
    description: "Play-to-earn gaming platform built on Solana with integrated NFTs and token rewards.",
    status: "abandoned",
    raisedAmount: 280,
    currentValue: 28,
    logoUrl: "https://placeholder.svg",
    walletAddress: "6xGzLbLMgrXySXCsqGKXQiXWfLAoXNS7AY1LBmJ9FBv3",
    launchDate: "2023-01-10",
    category: "Gaming"
  },
  {
    id: "4",
    name: "DataChain",
    twitterHandle: "DataChainSOL",
    description: "Decentralized oracle network providing real-world data to smart contracts on Solana.",
    status: "active",
    raisedAmount: 520,
    currentValue: 780,
    logoUrl: "https://placeholder.svg",
    walletAddress: "7xGzLbLMgrXySXCsqGKXQiXWfLAoXNS7AY1LBmJ9FBv4",
    launchDate: "2023-05-05",
    category: "Infrastructure"
  },
  {
    id: "5",
    name: "SolStake",
    twitterHandle: "SolStaker",
    description: "Liquid staking solution for Solana offering tokenized staking with additional DeFi integrations.",
    status: "completed",
    raisedAmount: 350,
    currentValue: 490,
    logoUrl: "https://placeholder.svg",
    walletAddress: "9xGzLbLMgrXySXCsqGKXQiXWfLAoXNS7AY1LBmJ9FBv5",
    launchDate: "2023-02-18",
    category: "Staking"
  },
  {
    id: "6",
    name: "MoonWallet",
    twitterHandle: "MoonWalletApp",
    description: "Multi-chain wallet with special Solana features, built-in DEX and NFT management.",
    status: "warning",
    raisedAmount: 185,
    currentValue: 130,
    logoUrl: "https://placeholder.svg",
    walletAddress: "2xGzLbLMgrXySXCsqGKXQiXWfLAoXNS7AY1LBmJ9FBv6",
    launchDate: "2023-06-29",
    category: "Wallet"
  }
];
