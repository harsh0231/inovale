import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "edtech" | "ai";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const projects = [
    {
      id: 1,
      title: "AI and Robotics lab setup in schools",
      category: "edtech",
      description:
        "Complete AI laboratory infrastructure setup for a government school, including hardware, software, and training programs for 200+ students.",
      tags: ["AI Lab", "Training", "Infrastructure"],
    },
    {
      id: 2,
      title: "Facial Recognition System - Corporate",
      category: "ai",
      description:
        "Deployed enterprise-grade facial recognition system for employee attendance and access control across multiple office locations.",
      tags: ["Facial Recognition", "Security", "Automation"],
    },
    {
      id: 3,
      title: "Communicon",
      category: "edtech",
      description:
        "Communicon - an innovative English learning platform combining live expert teachers and AI powered tutors to make communication skills training engaging, personalized and accessible anytime, anywhere.",
      tags: ["English Learning", "AI Tutors", "Communication"],
    },
    {
      id: 4,
      title: "Document Processing Automation",
      category: "ai",
      description:
        "Built intelligent document processing system using OCR and NLP to automate invoice processing, reducing manual effort by 80%.",
      tags: ["OCR", "NLP", "Automation"],
    },
    {
      id: 5,
      title: "Inovale Institute automation system",
      category: "edtech",
      description:
        "We provide schools with customised digital curriculum, smartboards and complete tech support to create a smarter, future ready classroom.",
      tags: ["Digital Curriculum", "Smartboards", "Tech Support"],
    },
    {
      id: 6,
      title: "Predictive Analytics Dashboard",
      category: "ai",
      description:
        "Developed real-time business intelligence dashboard with predictive analytics capabilities for inventory optimization and demand forecasting.",
      tags: ["Analytics", "Dashboard", "Prediction"],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-5xl md:text-6xl font-bold mb-6 uppercase">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-golden-glow/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {project.id}
                  </div>
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
