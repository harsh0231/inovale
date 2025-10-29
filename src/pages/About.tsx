import { useEffect } from "react";
import { Target, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logoImage from "@/assets/logo-inovale.jpg";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";
import amitSinhaImage from "@/assets/amit.jpg";
import { updateSEOMeta, PAGE_SEO_CONFIG } from "@/utils/seo";

const About = () => {
  useEffect(() => {
    updateSEOMeta(PAGE_SEO_CONFIG.about);
  }, []);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeroBg})` }}
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
          <h1 className="font-exo text-5xl md:text-6xl font-bold mb-6 uppercase animate-fade-in">About INOVALE</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Pioneering the future of technology education and intelligent business solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-exo text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to cutting-edge technology education and empower the next
                  generation of innovators. We strive to bridge the gap between academic learning
                  and real-world applications through hands-on training in AI, IoT, and Robotics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="mb-4">
                  <Eye className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-exo text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's leading technology solutions provider, transforming educational
                  institutions into innovation hubs and helping businesses harness the power of AI
                  to drive growth, efficiency, and competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-exo text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                INOVALE was born from a simple yet powerful vision: to make advanced technology
                education accessible to every student and to help businesses leverage AI for
                transformative growth.
              </p>
              <p>
                Founded by a team of passionate technologists and educators, we recognized a
                critical gap in India's education system—the lack of hands-on exposure to emerging
                technologies like Artificial Intelligence, Internet of Things, and Robotics. At the
                same time, we saw businesses struggling to adopt AI solutions that could streamline
                their operations and unlock new opportunities.
              </p>
              <p>
                Today, INOVALE serves educational institutions across India, setting up advanced
                technology labs, training thousands of students and educators, and helping schools
                meet government initiatives like the Atal Tinkering Labs program. Simultaneously,
                we partner with enterprises to develop custom AI solutions—from facial recognition
                systems to intelligent process automation—that drive measurable business outcomes.
              </p>
              <p>
                Our dual focus on education and enterprise reflects our belief that innovation
                thrives when knowledge meets application. By nurturing young minds and empowering
                businesses, we're not just building solutions—we're shaping the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h3 className="font-exo text-xl font-bold">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Constantly pushing boundaries and embracing new technologies.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">E</span>
              </div>
              <h3 className="font-exo text-xl font-bold">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Delivering the highest quality in everything we do.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h3 className="font-exo text-xl font-bold">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Maintaining transparency and honesty in all relationships.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">I</span>
              </div>
              <h3 className="font-exo text-xl font-bold">Impact</h3>
              <p className="text-sm text-muted-foreground">
                Creating meaningful change in education and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Amit Sinha - Managing Director */}
            <Card className="bg-card border-border overflow-hidden hover:shadow-2xl hover:shadow-golden-glow/20 transition-all duration-300 flex flex-col">
              <div className="h-64 overflow-hidden bg-secondary">
                <img
                  src={amitSinhaImage}
                  alt="Amit Sinha - Managing Director"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-exo text-2xl">Amit Sinha</CardTitle>
                <p className="text-primary font-semibold mt-2">Managing Director</p>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto">
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Amit Sinha brings extensive expertise in business development, finance, and strategic marketing to INOVALE. With a proven track record of driving organizational growth and market expansion, Amit leads the company's vision to become India's premier technology solutions provider.
                  </p>
                  <div>
                    <h4 className="font-exo font-bold text-primary mb-2 text-sm">Areas of Expertise:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Business Development:</strong> Driving partnerships</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Financial Strategy:</strong> Resource optimization</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Strategic Marketing:</strong> Brand positioning</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Leadership:</strong> Team excellence</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground italic pt-2 border-t border-border">
                    "Innovation thrives when vision meets execution."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Harsh Raj - Senior AI Architect */}
            <Card className="bg-card border-border overflow-hidden hover:shadow-2xl hover:shadow-golden-glow/20 transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-background p-6 h-40 flex flex-col items-center justify-center">
                <h3 className="font-exo text-2xl font-bold text-center text-primary mb-2">Harsh Raj</h3>
                <p className="text-primary font-semibold text-sm">Senior AI Architect</p>
              </div>
              <CardContent className="flex-1 overflow-y-auto">
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    Visionary Senior AI Architect with deep expertise in cutting-edge AI technologies. Extensive experience in Large Language Models and Agentic AI systems.
                  </p>
                  <div>
                    <h4 className="font-exo font-bold text-primary mb-1 text-xs">Core Competencies:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>LLMs:</strong> Generative AI systems</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Agentic AI:</strong> Autonomous agents</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>ML Algorithms:</strong> Model optimization</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Scalable Pipelines:</strong> ML architecture</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground italic pt-1 border-t border-border">
                    "We're architecting intelligence."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ankit Pratap Singh - Full Stack Developer */}
            <Card className="bg-card border-border overflow-hidden hover:shadow-2xl hover:shadow-golden-glow/20 transition-all duration-300 flex flex-col">
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-background p-6 h-40 flex flex-col items-center justify-center">
                <h3 className="font-exo text-2xl font-bold text-center text-primary mb-2">Ankit Pratap Singh</h3>
                <p className="text-primary font-semibold text-sm">Full Stack Java Developer</p>
              </div>
              <CardContent className="flex-1 overflow-y-auto">
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    Highly skilled Full Stack Java Developer with expertise in building robust, scalable enterprise applications and cloud-native architectures.
                  </p>
                  <div>
                    <h4 className="font-exo font-bold text-primary mb-1 text-xs">Technical Expertise:</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Java Ecosystem:</strong> Spring Boot, Microservices</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Frontend:</strong> Web frameworks, UI design</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Database:</strong> SQL optimization, design</span>
                      </li>
                      <li className="flex items-start space-x-1">
                        <span className="text-primary mt-0.5">•</span>
                        <span><strong>Cloud & DevOps:</strong> Deployment automation</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground italic pt-1 border-t border-border">
                    "Great software scales."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
