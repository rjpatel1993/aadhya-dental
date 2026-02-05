 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import FloatingWhatsApp from "@/components/FloatingWhatsApp";
 import { Card, CardContent } from "@/components/ui/card";
 import { Button } from "@/components/ui/button";
 import {
   Stethoscope,
   Sparkles,
   Smile,
   Baby,
   CircleDot,
   CheckCircle2,
   ArrowRight,
 } from "lucide-react";
 
 const serviceCategories = [
   {
     id: "general-dentistry",
     icon: Stethoscope,
     title: "General Dentistry",
     description: "Comprehensive care for your everyday dental health needs.",
     services: [
       {
         name: "Dental Checkups",
         description: "Thorough oral examinations to detect early signs of decay, gum disease, and other dental issues.",
       },
       {
         name: "Tooth Fillings",
         description: "Restore damaged teeth with tooth-colored composite fillings that blend seamlessly with your natural smile.",
       },
       {
         name: "Scaling & Polishing",
         description: "Professional cleaning to remove plaque, tartar, and stains for healthier gums and fresher breath.",
       },
     ],
   },
   {
     id: "advanced-treatments",
     icon: CircleDot,
     title: "Advanced Treatments",
     description: "State-of-the-art solutions for complex dental problems.",
     services: [
       {
         name: "Dental Implants",
         description: "Permanent tooth replacement that looks, feels, and functions like natural teeth with titanium implants.",
       },
       {
         name: "Root Canal Treatment",
         description: "Painless treatment to save infected teeth and eliminate pain while preserving your natural tooth.",
       },
       {
         name: "Crowns & Bridges",
         description: "Custom-made restorations to protect damaged teeth or replace missing ones with natural-looking results.",
       },
     ],
   },
   {
     id: "cosmetic-dentistry",
     icon: Sparkles,
     title: "Cosmetic Dentistry",
     description: "Transform your smile with our aesthetic dental treatments.",
     services: [
       {
         name: "Teeth Whitening",
         description: "Professional whitening treatments to brighten your smile by several shades in just one visit.",
       },
       {
         name: "Smile Designing",
         description: "Complete smile makeover combining multiple treatments for your perfect, confident smile.",
       },
       {
         name: "Veneers",
         description: "Ultra-thin porcelain shells that cover imperfections for a flawless, natural-looking smile.",
       },
     ],
   },
   {
     id: "orthodontics",
     icon: Smile,
     title: "Orthodontics",
     description: "Straighten your teeth for a healthier, more beautiful smile.",
     services: [
       {
         name: "Braces",
         description: "Traditional metal or ceramic braces to correct misaligned teeth and bite issues effectively.",
       },
       {
         name: "Aligners",
         description: "Clear, removable aligners for discreet teeth straightening without the look of traditional braces.",
       },
     ],
   },
   {
     id: "child-dentistry",
     icon: Baby,
     title: "Child Dentistry",
     description: "Gentle, child-friendly dental care in a fun environment.",
     services: [
       {
         name: "Pediatric Dental Care",
         description: "Specialized dental care for children including preventive treatments, cavity fillings, and dental education in a comfortable, friendly setting.",
       },
     ],
   },
 ];
 
 const Services = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main>
         {/* Hero Section */}
         <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
           <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto">
               <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
                 Our Services
               </span>
               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                 Comprehensive Dental Care for Your Entire Family
               </h1>
               <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                 From routine checkups to advanced cosmetic procedures, we offer a complete range of dental services using the latest technology and techniques.
               </p>
             </div>
           </div>
         </section>
 
         {/* Services Categories */}
         <section className="py-16">
           <div className="container mx-auto px-4">
             <div className="space-y-20">
               {serviceCategories.map((category, categoryIndex) => (
                 <div key={category.id} id={category.id} className="scroll-mt-24">
                   {/* Category Header */}
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                       <category.icon className="w-7 h-7 text-primary" />
                     </div>
                     <div>
                       <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                         {category.title}
                       </h2>
                       <p className="text-muted-foreground font-sans">
                         {category.description}
                       </p>
                     </div>
                   </div>
 
                   {/* Services Grid */}
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {category.services.map((service, serviceIndex) => (
                       <Card
                         key={serviceIndex}
                         className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                       >
                         <CardContent className="p-6">
                           <div className="flex items-start gap-3 mb-3">
                             <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                             <h3 className="text-lg font-semibold text-foreground">
                               {service.name}
                             </h3>
                           </div>
                           <p className="text-muted-foreground font-sans text-sm leading-relaxed pl-8">
                             {service.description}
                           </p>
                         </CardContent>
                       </Card>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
 
         {/* CTA Section */}
         <section className="py-20 bg-primary/5">
           <div className="container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Ready to Get Started?
               </h2>
               <p className="text-muted-foreground font-sans mb-8">
                 Book your appointment today and take the first step towards a healthier, more beautiful smile.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="shadow-soft font-sans">
                   Book Appointment
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Button>
                 <Button size="lg" variant="outline" className="font-sans" asChild>
                   <a href="tel:+91XXXXXXXXXX">Call Us Now</a>
                 </Button>
               </div>
             </div>
           </div>
         </section>
       </main>
       <Footer />
       <FloatingWhatsApp />
     </div>
   );
 };
 
 export default Services;