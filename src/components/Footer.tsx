import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import logoImage from "@/assets/logo-inovale.jpg";
import whatsappQR from "@/assets/whatsapp-qr.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="INOVALE Logo" className="h-12 w-12 rounded-full" />
              <span className="font-exo text-xl font-bold gradient-text">INOVALE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering AI-driven solutions for education and enterprise. Empowering the next
              generation with cutting-edge technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/inovale-innovative-proserve/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/inovale_official?utm_source=qr&igsh=NGc3anp1cmwxMzV3" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1H8vXtneBa/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-exo text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-exo text-lg font-bold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/edtech"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  EdTech Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-software"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-exo text-lg font-bold mb-4 text-foreground">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm">Kankarbagh, Patna, Bihar, India</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:inovalproserve.contact@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  inovalproserve.contact@gmail.com
                </a>
              </li>
              <li className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a href="tel:+919279855683" className="text-sm hover:text-primary transition-colors">
                    +91 9279855683
                  </a>
                </div>
                <a
                  href="tel:+918102123968"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors ml-7"
                >
                  +91 8102123968
                </a>
                <a
                  href="tel:+919263624743"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors ml-7"
                >
                  +91 9263624743
                </a>
                <a
                  href="tel:+919204133493"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors ml-7"
                >
                  +91 9204133493
                </a>
              </li>
            </ul>

            {/* WhatsApp QR Code */}
            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="font-exo text-md font-semibold mb-3 text-foreground">Connect on WhatsApp</h4>
              <a 
                href="https://wa.me/message/52INH6B45DAJM1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src={whatsappQR} 
                  alt="INOVALE WhatsApp Business QR Code" 
                  className="h-32 w-32 rounded-lg border-2 border-primary/20 hover:border-primary transition-colors"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} INOVALE. All rights reserved. Innovating for Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
