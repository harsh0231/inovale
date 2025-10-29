import { Target, Eye, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-5xl md:text-6xl font-bold mb-6 uppercase">About INOVALE</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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

      {/* Meet the Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-exo text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse group of technologists, educators, and innovators dedicated to transforming
              education and business through AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="bg-card border-border text-center">
                <CardHeader>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-golden-glow mx-auto mb-4" />
                  <CardTitle className="font-exo text-xl">Team Member {member}</CardTitle>
                  <p className="text-sm text-muted-foreground">Position Title</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Brief bio about the team member's background, expertise, and role at INOVALE.
                  </p>
                </CardContent>
              </Card>
            ))}
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
    </div>
  );
};

export default About;
