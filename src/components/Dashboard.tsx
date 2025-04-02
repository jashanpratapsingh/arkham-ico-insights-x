
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const fundFlowData = [
  { month: 'Jan', amount: 120 },
  { month: 'Feb', amount: 180 },
  { month: 'Mar', amount: 350 },
  { month: 'Apr', amount: 480 },
  { month: 'May', amount: 240 },
  { month: 'Jun', amount: 320 }
];

const projectStatusData = [
  { name: 'Active', value: 62 },
  { name: 'Abandoned', value: 18 },
  { name: 'Warning', value: 12 },
  { name: 'Completed', value: 8 }
];

const COLORS = ['#14F195', '#ef4444', '#eab308', '#9B87F5'];

const Dashboard = () => {
  return (
    <section id="dashboard" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-reveal-container mb-2">
          <h2 className="text-2xl md:text-3xl font-bold opacity-0 animate-text-reveal">
            ICO Analytics <span className="text-gradient">Dashboard</span>
          </h2>
        </div>
        <div className="text-reveal-container mb-8">
          <p className="text-foreground/70 opacity-0 animate-text-reveal-delay-1">
            Overview of Solana ICO metrics, fund flows, and project status
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="glass border-white/10 overflow-hidden group hover:border-solana-green/30 transition-all">
            <CardHeader>
              <CardTitle className="text-gradient">Fund Flow Analysis</CardTitle>
              <CardDescription>SOL raised monthly from X-promoted ICOs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={fundFlowData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
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
          
          <Card className="glass border-white/10 overflow-hidden group hover:border-solana-green/30 transition-all">
            <CardHeader>
              <CardTitle className="text-gradient">Project Status</CardTitle>
              <CardDescription>Current state of ICO-funded projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      animationDuration={1500}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {projectStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(45, 55, 72, 0.9)', borderColor: 'rgba(255,255,255,0.1)' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value) => [`${value}%`, 'Percentage']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="glass border-white/10 p-6 flex flex-col items-center group hover:border-solana-green/30 transition-all">
            <div className="w-12 h-12 mb-4 bg-solana-green/20 rounded-full flex items-center justify-center group-hover:bg-solana-green/30 transition-all">
              <div className="w-6 h-6 rounded-full bg-solana-green"></div>
            </div>
            <h3 className="text-xl font-bold mb-1">4,291 SOL</h3>
            <p className="text-foreground/70 text-sm text-center">Total funds raised through X-based ICOs</p>
          </Card>
          
          <Card className="glass border-white/10 p-6 flex flex-col items-center group hover:border-solana-green/30 transition-all">
            <div className="w-12 h-12 mb-4 bg-solana-purple/20 rounded-full flex items-center justify-center group-hover:bg-solana-purple/30 transition-all">
              <div className="w-6 h-6 rounded-full bg-solana-purple"></div>
            </div>
            <h3 className="text-xl font-bold mb-1">37 Projects</h3>
            <p className="text-foreground/70 text-sm text-center">Total number of ICOs analyzed in our platform</p>
          </Card>
          
          <Card className="glass border-white/10 p-6 flex flex-col items-center group hover:border-solana-green/30 transition-all">
            <div className="w-12 h-12 mb-4 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-all">
              <div className="w-6 h-6 rounded-full bg-red-500"></div>
            </div>
            <h3 className="text-xl font-bold mb-1">-23.4%</h3>
            <p className="text-foreground/70 text-sm text-center">Average ROI across all tracked ICOs</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
