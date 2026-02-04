import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Professional",
    content:
      "I was terrified of dentists until I visited Aadhya Dental Clinic. The team made me feel so comfortable, and my root canal was completely painless! Highly recommend to anyone looking for gentle dental care.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Rajesh Patel",
    role: "Teacher",
    content:
      "Best dental clinic in Vadodara! The doctors are very experienced and use modern equipment. Got my dental implants done here and the results are amazing. My smile has never looked better!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Anita Desai",
    role: "Homemaker",
    content:
      "The entire family visits Aadhya Dental for our dental checkups. They're especially great with kids - my children actually look forward to their dental visits now! Clean, professional, and caring staff.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Vikram Singh",
    role: "IT Professional",
    content:
      "Got teeth whitening done here and the results exceeded my expectations. The staff explained everything clearly and the treatment was quick. Fair pricing too compared to other clinics.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground font-sans">
            Don't just take our word for it. Hear from our satisfied patients
            about their experience at Aadhya Dental Clinic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-card transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground font-sans leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Aadhya Dental Clinic patient`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-sans">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">Google</p>
            <p className="text-sm text-muted-foreground font-sans">
              4.9 ★ Rating
            </p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">Practo</p>
            <p className="text-sm text-muted-foreground font-sans">
              Top Rated Clinic
            </p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground font-sans">
              5-Star Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
