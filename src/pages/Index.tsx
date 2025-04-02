
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import ProjectStatus from "@/components/ProjectStatus";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Dashboard />
        <ProjectStatus />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
