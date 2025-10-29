import { Brain, Lightbulb, Users, School, BookOpen, Award } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-neural-network.jpg";

const EdTech = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Building the Next Generation of Tech Leaders"
        subtitle="Comprehensive EdTech Solutions for Schools and Institutions"
        backgroundImage={heroImage}
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-4">Our EdTech Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empowering educational institutions with cutting-edge technology training and
            infrastructure.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI, IoT & Robotics Training"
              description="Comprehensive training programs in Artificial Intelligence, Internet of Things, and Robotics for students and educators."
              features={[
                "Hands-on workshops and lab sessions",
                "Industry-relevant curriculum design",
                "Expert-led practical training",
                "Certification programs",
              ]}
            />
            
            <ServiceCard
              icon={Lightbulb}
              title="AI Lab Development"
              description="Complete AI laboratory setup with state-of-the-art equipment and learning resources."
              features={[
                "Hardware and software infrastructure",
                "Custom lab design and setup",
                "Training materials and resources",
                "Ongoing technical support",
              ]}
            />
            
            <ServiceCard
              icon={School}
              title="Atal Tinkering Lab (ATL)"
              description="Government-approved ATL infrastructure development for schools to foster innovation and creativity."
              features={[
                "Complete ATL setup and compliance",
                "3D printers, robotics kits, and tools",
                "Student and teacher training",
                "Activity planning and mentorship",
              ]}
            />
            
            <ServiceCard
              icon={Users}
              title="School Audit, Consulting, and Management"
              description="We audit your school and give you the best methods and support to make it better which leads to:"
              features={[
                "Increase in admissions",
                "Stable faculty",
                "Better academic environment and customised tech support",
                "Increase in revenue of school",
              ]}
            />
            
            <ServiceCard
              icon={BookOpen}
              title="Expert Faculty Provision"
              description="Skilled and experienced technology educators for your institution."
              features={[
                "Industry-experienced trainers",
                "Subject matter experts",
                "Flexible engagement models",
                "Continuous skill development",
              ]}
            />
            
            <ServiceCard
              icon={Award}
              title="Technology Integration"
              description="Seamless integration of modern technology into existing curriculum and teaching methods."
              features={[
                "Curriculum alignment",
                "Digital learning tools",
                "Assessment and evaluation systems",
                "Parent-teacher collaboration platforms",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-4xl font-bold text-center mb-12">Our Approach</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Needs Assessment</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your institution's specific requirements, goals, and
                  existing infrastructure to create a tailored solution.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Custom Curriculum Design</h3>
                <p className="text-muted-foreground">
                  Our experts design age-appropriate, engaging curricula that align with
                  educational standards while incorporating hands-on learning experiences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Infrastructure Setup</h3>
                <p className="text-muted-foreground">
                  We handle complete lab setup including equipment procurement, installation, and
                  configuration to ensure a seamless learning environment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Teacher Training</h3>
                <p className="text-muted-foreground">
                  We empower educators with comprehensive training programs, ensuring they can
                  effectively guide students through modern technology concepts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="font-exo text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our commitment extends beyond setup with continuous technical support,
                  curriculum updates, and regular check-ins to ensure sustained success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EdTech;
