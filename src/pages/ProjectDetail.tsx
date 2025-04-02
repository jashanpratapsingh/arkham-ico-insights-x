
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { icoProjects, IcoProject } from "@/data/icoData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, AlertTriangle, CheckCircle, Share2, ExternalLink } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useNavigate } from "react-router-dom";

// Sample transaction data
const transactionData = [
  { date: 'Jan 1', amount: 45 },
  { date: 'Jan 15', amount: 78 },
  { date: 'Feb 1', amount: 23 },
  { date: 'Feb 15', amount: 120 },
  { date: 'Mar 1', amount: 35 },
  { date: 'Mar 15', amount: 50 },
];

// Sample value data
const valueData = [
  { date: 'Jan', value: 45 },
  { date: 'Feb', value: 85 },
  { date: 'Mar', value: 53 },
  { date: 'Apr', value: 120 },
  { date: 'May', value: 90 },
  { date: 'Jun', value: 110 },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<IcoProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  // Animation observer for revealing elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-text-reveal");
            entry.target.classList.remove("text-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".text-reveal");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Fetch project data
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    
    // Find the project with the matching ID
    const foundProject = icoProjects.find(p => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      // Trigger animation after a short delay
      setTimeout(() => {
        setAnimationTriggered(true);
        setIsLoading(false);
      }, 300);
    } else {
      // No project found with that ID
      setIsLoading(false);
    }
  }, [id]);

  // Status indicator color and icon
  const getStatusInfo = (status: 'active' | 'abandoned' | 'completed' | 'warning') => {
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="glass p-8 rounded-xl animate-pulse">
            <p className="text-foreground/70">Loading project details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl mb-4 text-foreground">Project Not Found</h2>
            <p className="text-foreground/70 mb-6">We couldn't find the project you're looking for.</p>
            <Button onClick={() => navigate('/')}>
              <ArrowLeft className="mr-2" />
              Back to Projects
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const statusInfo = getStatusInfo(project.status);
  const roi = ((project.currentValue - project.raisedAmount) / project.raisedAmount) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Back button */}
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <Button 
            variant="outline" 
            className="glass border-white/10 hover:border-solana-green/40"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Button>
        </div>
        
        {/* Project Header */}
        <section className={`transition-all duration-500 ease-out ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="glass rounded-xl overflow-hidden border border-white/10 hover:border-solana-green/40 transition-all">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                      <img src={project.logoUrl} alt={project.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">{project.name}</h1>
                      <div className="flex items-center gap-2 mt-1">
                        <a 
                          href={`https://twitter.com/${project.twitterHandle}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-muted-foreground hover:text-solana-green flex items-center gap-1"
                        >
                          @{project.twitterHandle}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge className={`${statusInfo.color} flex items-center gap-1 px-3 py-1.5`}>
                      {statusInfo.icon}
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                    <Button variant="outline" size="sm" className="border-white/10">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
                
                <p className="mt-6 text-foreground/70">{project.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  <div className="glass rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Raised Amount</p>
                    <p className="font-medium text-lg">{project.raisedAmount} SOL</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Current Value</p>
                    <p className="font-medium text-lg">{project.currentValue} SOL</p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">ROI</p>
                    <p className={`font-medium text-lg ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {roi >= 0 ? '+' : ''}{roi.toFixed(2)}%
                    </p>
                  </div>
                  <div className="glass rounded-lg p-4">
                    <p className="text-xs text-foreground/60 mb-1">Launch Date</p>
                    <p className="font-medium text-lg">{new Date(project.launchDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className={`transition-all duration-500 delay-100 ease-out ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Fund Flow */}
              <Card className="glass border-white/10 overflow-hidden group hover:border-solana-green/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-gradient">Fund Flow Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={transactionData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                        <YAxis stroke="rgba(255,255,255,0.5)" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(45, 55, 72, 0.9)', borderColor: 'rgba(255,255,255,0.1)' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                          formatter={(value) => [`${value} SOL`, 'Amount']}
                        />
                        <Bar 
                          dataKey="amount" 
                          fill="url(#barGradient)" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                        />
                        <defs>
                          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#9B87F5" stopOpacity={0.8}/>
                            <stop offset="100%" stopColor="#14F195" stopOpacity={0.8}/>
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Value Over Time */}
              <Card className="glass border-white/10 overflow-hidden group hover:border-solana-green/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-gradient">Value Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={valueData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                        <YAxis stroke="rgba(255,255,255,0.5)" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(45, 55, 72, 0.9)', borderColor: 'rgba(255,255,255,0.1)' }}
                          itemStyle={{ color: '#fff' }}
                          labelStyle={{ color: '#fff' }}
                          formatter={(value) => [`${value} SOL`, 'Value']}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#14F195" 
                          strokeWidth={2} 
                          dot={{ r: 4, fill: '#14F195' }}
                          animationDuration={1500} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Wallet Info */}
        <section className={`transition-all duration-500 delay-200 ease-out ${animationTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-6xl mx-auto px-6 py-6">
            <Card className="glass border-white/10 overflow-hidden group hover:border-solana-green/30 transition-all">
              <CardHeader>
                <CardTitle className="text-gradient">Wallet Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <p className="text-sm text-foreground/60 mb-1">Project Wallet Address</p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{project.walletAddress}</p>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="border-white/10">
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/10">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-foreground/60">Current SOL Balance</p>
                    <p className="font-medium">245.32 SOL</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-foreground/60">Transactions Count</p>
                    <p className="font-medium">182</p>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mt-6 mb-3">Recent Transactions</h3>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="glass rounded-lg p-4 hover:border-solana-green/30 border border-white/10 transition-all">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Transfer</p>
                          <p className="text-xs text-foreground/60">{new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{(Math.random() * 20).toFixed(2)} SOL</p>
                          <a 
                            href="#" 
                            className="text-xs text-solana-green hover:text-solana-purple transition-colors flex items-center justify-end gap-1"
                          >
                            View on Explorer
                            <ArrowUpRight className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
