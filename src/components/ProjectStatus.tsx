
import { useState } from "react";
import { icoProjects, IcoProject } from "@/data/icoData";
import IcoCard from "./IcoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProjectStatus = () => {
  const [sortOption, setSortOption] = useState("newest");

  // Get sorted projects based on current sort option
  const getSortedProjects = (projects: IcoProject[]): IcoProject[] => {
    switch (sortOption) {
      case "newest":
        return [...projects].sort(
          (a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
        );
      case "highest-raised":
        return [...projects].sort((a, b) => b.raisedAmount - a.raisedAmount);
      case "roi-high-to-low":
        return [...projects].sort(
          (a, b) => (b.currentValue / b.raisedAmount) - (a.currentValue / a.raisedAmount)
        );
      case "roi-low-to-high":
        return [...projects].sort(
          (a, b) => (a.currentValue / a.raisedAmount) - (b.currentValue / b.raisedAmount)
        );
      default:
        return projects;
    }
  };

  // Filter projects by status
  const activeProjects = icoProjects.filter(p => p.status === "active");
  const warningProjects = icoProjects.filter(p => p.status === "warning");
  const abandonedProjects = icoProjects.filter(p => p.status === "abandoned");
  const allProjects = icoProjects;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-reveal-container mb-2">
          <h2 className="text-2xl md:text-3xl font-bold opacity-0 animate-text-reveal">
            Project <span className="text-gradient">Status</span> Tracker
          </h2>
        </div>
        <div className="text-reveal-container mb-8">
          <p className="text-foreground/70 opacity-0 animate-text-reveal-delay-1">
            Track the current status and performance of X-promoted Solana ICOs
          </p>
        </div>
        
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="glass border border-white/10 mb-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="warning">Warning</TabsTrigger>
              <TabsTrigger value="abandoned">Abandoned</TabsTrigger>
            </TabsList>
            
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-foreground/70">
                Showing <span className="font-medium text-foreground">{icoProjects.length}</span> projects
              </p>
              
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-foreground/70">
                  Sort by:
                </label>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-[180px] bg-muted/30 border-white/10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="highest-raised">Highest Raised</SelectItem>
                    <SelectItem value="roi-high-to-low">ROI (High to Low)</SelectItem>
                    <SelectItem value="roi-low-to-high">ROI (Low to High)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSortedProjects(allProjects).map((project) => (
                  <IcoCard key={project.id} {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="active" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSortedProjects(activeProjects).map((project) => (
                  <IcoCard key={project.id} {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="warning" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSortedProjects(warningProjects).map((project) => (
                  <IcoCard key={project.id} {...project} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="abandoned" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSortedProjects(abandonedProjects).map((project) => (
                  <IcoCard key={project.id} {...project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ProjectStatus;
