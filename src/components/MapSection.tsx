import { MapPin, Clock, Phone } from "lucide-react";

const MapSection = () => {
  return (
    <section id="map" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Conveniently located in Vadodara, Gujarat. We're here to serve you
            with quality dental care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="bg-background rounded-xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground font-sans text-sm">
                    47 Ground Floor, SWC Hub,
                    <br />
                    Vasna - Bhayli Main Rd,
                    <br />
                    Vadodara, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm">
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                  <a
                    href="tel:+918849700000"
                    className="text-muted-foreground hover:text-primary font-sans text-sm transition-colors"
                  >
                    +91 88497 XXXXX
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169!2d73.1!3d22.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzM2LjAiTiA3M8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aadhya Dental Clinic Location - Vadodara, Gujarat"
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground font-sans">
              <a
                href="https://maps.app.goo.gl/your-gmb-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open in Google Maps →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
