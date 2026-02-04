import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent fill-accent"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground font-sans">
                Trusted by 10,000+ Patients
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Smile,{" "}
              <span className="text-gradient">Our Priority</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg font-sans leading-relaxed">
              Experience world-class dental care at Aadhya Dental Clinic, Vadodara. 
              Our expert team combines advanced technology with gentle care to give 
              you the perfect smile you deserve.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground font-sans">
                  Painless Treatments
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground font-sans">
                  Same Day Appointments
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="shadow-soft font-sans group">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-sans">
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground font-sans">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground font-sans">
                  Happy Patients
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">4.9</p>
                <p className="text-sm text-muted-foreground font-sans">
                  Rating
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop"
                alt="Modern dental clinic at Aadhya Dental with state-of-the-art equipment"
                className="rounded-3xl shadow-card object-cover w-full h-[600px]"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-card border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      100% Sterilized
                    </p>
                    <p className="text-sm text-muted-foreground font-sans">
                      Equipment & Environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
