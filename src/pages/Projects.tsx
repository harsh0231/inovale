import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiRoboticsLab from "@/assets/project-ai-robotics-lab.jpg";
import facialRecognition from "@/assets/project-facial-recognition.jpg";
import communicon from "@/assets/project-communicon.jpg";
import documentAutomation from "@/assets/project-document-automation.jpg";
import instituteAutomation from "@/assets/project-institute-automation.jpg";
import analyticsDashboard from "@/assets/project-analytics-dashboard.jpg";
import logoImage from "@/assets/logo-inovale.jpg";
import { updateSEOMeta, PAGE_SEO_CONFIG } from "@/utils/seo";
import projectsHeroBg from "@/assets/projects-hero-bg.jpg";

type ProjectCategory = "all" | "edtech" | "ai";

const Projects = () => {
  useEffect(() => {
    updateSEOMeta(PAGE_SEO_CONFIG.projects);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const projects = [
    {
      id: 1,
      title: "AI and Robotics lab setup in schools",
      category: "edtech",
      description:
        "Complete AI laboratory infrastructure setup for a government school, including hardware, software, and training programs for 200+ students.",
      tags: ["AI Lab", "Training", "Infrastructure"],
      image: aiRoboticsLab,
    },
    {
      id: 2,
      title: "Facial Recognition System - Corporate",
      category: "ai",
      description:
        "Deployed enterprise-grade facial recognition system for employee attendance and access control across multiple office locations.",
      tags: ["Facial Recognition", "Security", "Automation"],
      image: facialRecognition,
    },
    {
      id: 3,
      title: "Communicon",
      category: "edtech",
      description:
        "Communicon - an innovative English learning platform combining live expert teachers and AI powered tutors to make communication skills training engaging, personalized and accessible anytime, anywhere.",
      tags: ["English Learning", "AI Tutors", "Communication"],
      image: communicon,
    },
    {
      id: 4,
      title: "Document Processing Automation",
      category: "ai",
      description:
        "Built intelligent document processing system using OCR and NLP to automate invoice processing, reducing manual effort by 80%.",
      tags: ["OCR", "NLP", "Automation"],
      image: documentAutomation,
    },
    {
      id: 5,
      title: "Inovale Institute automation system",
      category: "edtech",
      description:
        "We provide schools with customised digital curriculum, smartboards and complete tech support to create a smarter, future ready classroom.",
      tags: ["Digital Curriculum", "Smartboards", "Tech Support"],
      image: instituteAutomation,
    },
    {
      id: 6,
      title: "Predictive Analytics Dashboard",
      category: "ai",
      description:
        "Developed real-time business intelligence dashboard with predictive analytics capabilities for inventory optimization and demand forecasting.",
      tags: ["Analytics", "Dashboard", "Prediction"],
      image: analyticsDashboard,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${projectsHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <img 
              src={logoImage} 
              alt="INOVALE Logo" 
              className="h-24 w-24 rounded-full object-cover animate-float shadow-2xl shadow-golden-glow/50 ring-4 ring-golden-glow/30"
            />
          </div>
          <h1 className="font-exo text-5xl md:text-6xl font-bold mb-6 uppercase animate-fade-in">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Showcasing our successful implementations in education technology and AI software
            development.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
            >
              All Projects
            </Button>
            <Button
              variant={selectedCategory === "edtech" ? "default" : "outline"}
              onClick={() => setSelectedCategory("edtech")}
            >
              EdTech Solutions
            </Button>
            <Button
              variant={selectedCategory === "ai" ? "default" : "outline"}
              onClick={() => setSelectedCategory("ai")}
            >
              AI Software
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group overflow-hidden"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="font-exo text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

