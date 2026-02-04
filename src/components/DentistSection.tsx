import { GraduationCap, Award, Heart, Users } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "BDS, MDS", desc: "Dental Surgery" },
  { icon: Award, label: "15+ Years", desc: "Experience" },
  { icon: Heart, label: "10,000+", desc: "Happy Patients" },
  { icon: Users, label: "Family", desc: "Dentistry" },
];

const DentistSection = () => {
  return (
    <section id="dentist" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            Meet Your Dentist
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Dr. Ami Patel
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=625&fit=crop"
                alt="Dr. Ami Patel - Lead Dentist at Aadhya Dental Clinic Vadodara"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-soft">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm font-sans">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Lead Dental Surgeon & Founder
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Dr. Ami Patel is a highly skilled and compassionate dentist with over 15 years of experience in providing exceptional dental care. She founded Aadhya Dental Clinic with a vision to make quality dental treatment accessible and comfortable for everyone in Vadodara.
              </p>
            </div>

            <p className="text-muted-foreground font-sans leading-relaxed">
              With advanced training in cosmetic dentistry, implantology, and pediatric care, Dr. Patel combines modern techniques with a gentle approach to ensure every patient leaves with a confident smile. Her commitment to continuous learning keeps her at the forefront of dental innovations.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-background rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">
                    {cred.label}
                  </p>
                  <p className="text-xs text-muted-foreground font-sans">
                    {cred.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground font-sans">
              "Every smile we create is a reflection of trust, care, and commitment to excellence. Your dental health is my priority."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentistSection;
