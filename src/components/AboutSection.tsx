import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const features = [
  "State-of-the-art dental equipment",
  "Highly qualified & experienced dentists",
  "Comfortable and relaxing environment",
  "Affordable treatment packages",
  "Emergency dental care available",
  "Insurance and payment plans accepted",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=500&fit=crop"
                alt="Friendly dentist at Aadhya Dental Clinic providing patient care"
                className="rounded-2xl shadow-card w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop"
                alt="Modern dental treatment room at Aadhya Dental"
                className="rounded-2xl shadow-card w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
                alt="Dental equipment and tools at our Vadodara clinic"
                className="rounded-2xl shadow-card w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=400&fit=crop"
                alt="Happy patient with beautiful smile after treatment"
                className="rounded-2xl shadow-card w-full h-48 object-cover mt-8"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-6 rounded-2xl shadow-soft">
              <p className="text-4xl font-bold text-center">15+</p>
              <p className="text-sm font-sans text-center">Years Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Aadhya Dental Clinic?
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                At Aadhya Dental Clinic in Vadodara, we believe that everyone
                deserves a healthy, beautiful smile. Our team of experienced
                dentists combines cutting-edge technology with compassionate
                care to provide you with the best dental experience possible.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-sans text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Certified</p>
                <p className="text-xs text-muted-foreground font-sans">
                  Dentists
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">10,000+</p>
                <p className="text-xs text-muted-foreground font-sans">
                  Happy Patients
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground font-sans">
                  Emergency Care
                </p>
              </div>
            </div>

            <Button size="lg" className="shadow-soft font-sans">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
