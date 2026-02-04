import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Heart,
  Smile,
  Stethoscope,
  Baby,
  Scissors,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Get a brighter, whiter smile with our professional teeth whitening treatments using the latest technology.",
  },
  {
    icon: Heart,
    title: "Root Canal Treatment",
    description:
      "Painless root canal therapy to save your natural teeth with precision and care.",
  },
  {
    icon: Smile,
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
  },
  {
    icon: Stethoscope,
    title: "General Checkup",
    description:
      "Comprehensive dental examinations and preventive care to maintain your oral health.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care in a fun and comfortable environment.",
  },
  {
    icon: Scissors,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, bonding, and smile makeover treatments.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-muted-foreground font-sans">
            We offer a wide range of dental services to meet all your oral
            health needs, from routine checkups to advanced cosmetic procedures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
