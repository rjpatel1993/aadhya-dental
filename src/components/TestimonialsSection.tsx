import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJxxxxxxxxx"; // Replace with actual Place ID
const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Aadhya+Dental+Clinic+Vadodara";

const googleReviewStats = {
  rating: 5.0,
  totalReviews: 13,
  platform: "Google",
};

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Professional",
    content:
      "I was terrified of dentists until I visited Aadhya Dental Clinic. Dr. Ami Patel and her team made me feel so comfortable, and my root canal was completely painless! Highly recommend to anyone looking for gentle dental care.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Rajesh Patel",
    role: "Teacher",
    content:
      "Best dental clinic in Vadodara! The doctors are very experienced and use modern equipment. Got my dental implants done here and the results are amazing. My smile has never looked better!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Anita Desai",
    role: "Homemaker",
    content:
      "The entire family visits Aadhya Dental for our dental checkups. They're especially great with kids - my children actually look forward to their dental visits now! Clean, professional, and caring staff.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Vikram Singh",
    role: "IT Professional",
    content:
      "Got teeth whitening done here and the results exceeded my expectations. The staff explained everything clearly and the treatment was quick. Fair pricing too compared to other clinics.",
    rating: 5,
    source: "Google",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            Patient Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground font-sans">
            Don't just take our word for it. Hear from our satisfied patients
            about their experience at Aadhya Dental Clinic.
          </p>
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center mb-12">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4 shadow-soft hover:shadow-card transition-all duration-300 hover:border-primary/30"
          >
            {/* Google Logo */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8" aria-label="Google">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-lg font-semibold text-foreground">
                Google Reviews
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 border-l border-border pl-4">
              <span className="text-2xl font-bold text-foreground">
                {googleReviewStats.rating.toFixed(1)}
              </span>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-sans">
                  {googleReviewStats.totalReviews} reviews
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:underline">
              <span>View all</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-card transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Header with Quote and Google Badge */}
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                  <div className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-full">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="text-xs font-medium text-muted-foreground">
                      {testimonial.source}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground font-sans leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
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

        {/* CTA to Leave Review */}
        <div className="mt-12 text-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <span>Leave us a review on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
