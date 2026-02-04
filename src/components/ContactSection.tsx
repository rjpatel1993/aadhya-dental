import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Vadodara, Gujarat", "India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@aadhyadental.com", "appointments@aadhyadental.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: By Appointment"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-muted-foreground font-sans">
            Ready to transform your smile? Get in touch with us to schedule
            your consultation or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Request an Appointment
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground mb-2 block font-sans"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="font-sans"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground mb-2 block font-sans"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground mb-2 block font-sans"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="font-sans"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground mb-2 block font-sans"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-sans"
                  >
                    <option value="">Select a service</option>
                    <option value="checkup">General Checkup</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implant">Dental Implants</option>
                    <option value="root-canal">Root Canal</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-2 block font-sans"
                  >
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your dental concerns..."
                    rows={4}
                    className="font-sans"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full shadow-soft font-sans">
                  Book Appointment
                </Button>
                <p className="text-xs text-muted-foreground text-center font-sans">
                  We'll get back to you within 24 hours to confirm your
                  appointment.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-sm text-muted-foreground font-sans"
                      >
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="h-64 bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">
                    Aadhya Dental Clinic
                  </p>
                  <p className="text-muted-foreground font-sans text-sm">
                    Vadodara, Gujarat, India
                  </p>
                  <Button variant="link" className="mt-2 font-sans">
                    Open in Google Maps →
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
