import { Eye, Brain, Zap, Bot, BarChart, Cloud } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import aiHeroImage from "@/assets/ai-hero-animation.jpg";

const AISoftware = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Intelligent Solutions to Automate and Accelerate"
        subtitle="Custom AI Software Development for Enterprise Excellence"
        backgroundImage={aiHeroImage}
        animationClass="animate-ai-pan"
      />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-4">Our AI Solutions</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your business operations with cutting-edge AI technologies tailored to your
            specific needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Eye}
              title="Facial Recognition Systems"
              description="Advanced biometric solutions for security, authentication, and customer experience."
              features={[
                "Face ID and verification systems",
                "Liveness detection (anti-spoofing)",
                "Age and gender recognition",
                "Emotion detection analytics",
                "Access control integration",
              ]}
            />

            <ServiceCard
              icon={Brain}
              title="Deep Learning Solutions"
              description="Custom neural network models for complex pattern recognition and predictive analytics."
              features={[
                "Custom CNN and RNN architectures",
                "Natural Language Processing (NLP)",
                "Computer vision applications",
                "Time series forecasting",
                "Transfer learning implementations",
              ]}
            />

            <ServiceCard
              icon={Zap}
              title="AI Process Automation"
              description="Streamline workflows and eliminate repetitive tasks with intelligent automation."
              features={[
                "Document processing (OCR, ICR)",
                "Workflow automation",
                "Intelligent data extraction",
                "Form processing and validation",
                "Email and communication automation",
              ]}
            />

            <ServiceCard
              icon={Bot}
              title="Agentic AI Tools"
              description="Autonomous AI agents that can reason, plan, and execute complex tasks."
              features={[
                "LangChain and LangGraph implementations",
                "Autonomous decision-making agents",
                "Multi-agent collaboration systems",
                "Tool-using AI assistants",
                "Conversational AI interfaces",
              ]}
            />

            <ServiceCard
              icon={BarChart}
              title="Data Analytics & BI"
              description="Transform raw data into actionable insights with advanced analytics platforms."
              features={[
                "Custom dashboard development",
                "Predictive analytics models",
                "Real-time reporting systems",
                "KPI tracking and visualization",
                "Business intelligence integration",
              ]}
            />

            <ServiceCard
              icon={Cloud}
              title="Integration & Deployment"
              description="Seamless deployment of AI solutions across cloud and on-premise environments."
              features={[
                "Cloud-native architecture (AWS, Azure, GCP)",
                "On-premise deployment options",
                "API development and integration",
                "Scalable infrastructure design",
                "Continuous monitoring and optimization",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-12">Our Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="font-exo text-xl font-bold text-primary">Machine Learning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>TensorFlow & PyTorch</li>
                <li>Scikit-learn</li>
                <li>XGBoost & LightGBM</li>
                <li>Hugging Face Transformers</li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <h3 className="font-exo text-xl font-bold text-primary">Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Python & FastAPI</li>
                <li>Node.js & Express</li>
                <li>React & Next.js</li>
                <li>Docker & Kubernetes</li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <h3 className="font-exo text-xl font-bold text-primary">Cloud & Data</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AWS, Azure, GCP</li>
                <li>PostgreSQL & MongoDB</li>
                <li>Redis & Elasticsearch</li>
                <li>Apache Kafka & Airflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  We conduct in-depth consultations to understand your business challenges, goals,
                  and technical requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Design & Architecture</h3>
                <p className="text-muted-foreground">
                  Our team designs scalable, secure AI architectures that integrate seamlessly with
                  your existing systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Development & Training</h3>
                <p className="text-muted-foreground">
                  We build and train custom AI models using your data, ensuring optimal performance
                  and accuracy for your specific use case.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Testing & Validation</h3>
                <p className="text-muted-foreground">
                  Rigorous testing ensures our solutions meet accuracy benchmarks and perform
                  reliably in production environments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  We handle seamless deployment and provide ongoing maintenance, monitoring, and
                  updates to ensure continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISoftware;
