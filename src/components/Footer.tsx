import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-background leading-tight">
                  Aadhya
                </h3>
                <p className="text-xs text-background/60 font-sans tracking-wider">
                  DENTAL CLINIC
                </p>
              </div>
            </div>
            <p className="text-background/70 font-sans text-sm leading-relaxed">
              Your trusted partner for comprehensive dental care in Vadodara.
              We're committed to giving you a healthy, beautiful smile that
              lasts a lifetime.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-background/70 hover:text-primary font-sans text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Teeth Whitening",
                "Dental Implants",
                "Root Canal",
                "Cosmetic Dentistry",
                "Pediatric Care",
                "General Checkup",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-primary font-sans text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 font-sans text-sm">
                  Vadodara, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-background/70 hover:text-primary font-sans text-sm transition-colors"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@aadhyadental.com"
                  className="text-background/70 hover:text-primary font-sans text-sm transition-colors"
                >
                  info@aadhyadental.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 font-sans text-sm">
              © {currentYear} Aadhya Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-background/50 hover:text-background font-sans text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/50 hover:text-background font-sans text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
