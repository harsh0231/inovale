import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Cpu, Users, Award, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-neural-network.jpg";
import { updateSEOMeta, PAGE_SEO_CONFIG } from "@/utils/seo";

const Home = () => {
  useEffect(() => {
    updateSEOMeta(PAGE_SEO_CONFIG.home);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="INNOVATING FOR TOMORROW"
        subtitle="Pioneering AI-Driven Solutions for Education and Enterprise"
        backgroundImage={heroImage}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/edtech">
              For Educational Institutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/ai-software">
              For Your Business <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Hero>

      {/* Services Overview Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 circuit-bg opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* EdTech Services */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="h-10 w-10 text-primary" />
                <h2 className="font-exo text-3xl font-bold">Empowering Future Innovators</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Transform education with cutting-edge AI, IoT, and Robotics training. We build
                state-of-the-art labs and provide expert-led workshops that prepare students for the
                future of technology.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Hands-on AI, IoT & Robotics Training</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Advanced Tech Lab Setup & Infrastructure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Atal Tinkering Lab (ATL) Development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Expert Faculty & Workshop Programs</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/edtech">Explore EdTech Solutions</Link>
              </Button>
            </div>

            {/* AI Software Services */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Cpu className="h-10 w-10 text-primary" />
                <h2 className="font-exo text-3xl font-bold">Transforming Business with AI</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Unlock your business potential with intelligent automation and custom AI solutions.
                From facial recognition to process automation, we deliver enterprise-grade AI that
                scales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Advanced Facial Recognition Systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Deep Learning & Neural Networks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>AI Process Automation & Workflow Optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Data Analytics & Business Intelligence</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/ai-software">Discover AI Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose INOVALE */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-12">Why Choose INOVALE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Users}
              title="Expert-Led Training"
              description="Learn from industry professionals with real-world experience in AI and emerging technologies."
            />
            <ServiceCard
              icon={Cpu}
              title="Custom Solutions"
              description="Tailored AI software that perfectly aligns with your specific business needs and goals."
            />
            <ServiceCard
              icon={Award}
              title="End-to-End Implementation"
              description="From consultation to deployment and maintenance, we're with you every step of the way."
            />
            <ServiceCard
              icon={Brain}
              title="Future-Ready Technology"
              description="Stay ahead with cutting-edge AI, IoT, and robotics solutions that scale with innovation."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-background via-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-exo text-4xl md:text-5xl font-bold mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to transform your vision into reality with cutting-edge AI solutions.
          </p>
          <Button asChild size="lg" className="text-lg animate-glow-pulse">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
