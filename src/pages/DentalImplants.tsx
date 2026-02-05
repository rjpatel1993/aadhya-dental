 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import FloatingWhatsApp from "@/components/FloatingWhatsApp";
 import { Button } from "@/components/ui/button";
 import { Card, CardContent } from "@/components/ui/card";
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import {
   CheckCircle2,
   ArrowRight,
   Clock,
   Shield,
   Smile,
   Heart,
   Star,
   Phone,
 } from "lucide-react";
 
 const benefits = [
   {
     icon: Smile,
     title: "Natural Look & Feel",
     description: "Implants look, feel, and function just like your natural teeth.",
   },
   {
     icon: Shield,
     title: "Long-Lasting Solution",
     description: "With proper care, dental implants can last a lifetime.",
   },
   {
     icon: Heart,
     title: "Preserve Bone Health",
     description: "Implants stimulate bone growth and prevent jawbone deterioration.",
   },
   {
     icon: Star,
     title: "Improved Confidence",
     description: "Eat, speak, and smile with complete confidence.",
   },
 ];
 
 const procedureSteps = [
   {
     step: "01",
     title: "Consultation & Planning",
     description: "Comprehensive examination, X-rays, and 3D imaging to create your personalized treatment plan.",
   },
   {
     step: "02",
     title: "Implant Placement",
     description: "The titanium implant is surgically placed into your jawbone under local anesthesia.",
   },
   {
     step: "03",
     title: "Healing Period",
     description: "3-6 months for the implant to fuse with your bone (osseointegration).",
   },
   {
     step: "04",
     title: "Crown Placement",
     description: "A custom-made crown is attached to the implant for a natural, beautiful finish.",
   },
 ];
 
 const faqs = [
   {
     question: "Are dental implants painful?",
     answer: "The procedure is performed under local anesthesia, so you won't feel pain during the surgery. Post-operative discomfort is usually mild and can be managed with over-the-counter pain medication. Most patients report that the procedure was less painful than they expected.",
   },
   {
     question: "How long do dental implants last?",
     answer: "With proper care and good oral hygiene, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear, but the implant itself can remain functional indefinitely.",
   },
   {
     question: "Am I a good candidate for dental implants?",
     answer: "Most adults with good general health are candidates for dental implants. You need adequate bone density to support the implant, healthy gums, and a commitment to good oral hygiene. During your consultation, we'll evaluate your specific situation.",
   },
   {
     question: "How much do dental implants cost?",
     answer: "The cost varies depending on the number of implants needed, any additional procedures (like bone grafting), and the type of restoration. We provide detailed cost estimates during your consultation and offer flexible payment options.",
   },
   {
     question: "What is the success rate of dental implants?",
     answer: "Dental implants have a success rate of 95-98% when placed by experienced professionals. At Aadhya Dental Clinic, we use premium implant systems and advanced techniques to ensure the best possible outcomes.",
   },
   {
     question: "How do I care for my dental implants?",
     answer: "Care for implants just like natural teeth: brush twice daily, floss regularly, and visit us for regular checkups. Avoid chewing hard objects like ice or hard candy. With proper care, your implants will serve you well for years to come.",
   },
 ];
 
 const DentalImplants = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main>
         {/* Hero Section */}
         <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
           <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div>
                 <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
                   Advanced Treatments
                 </span>
                 <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                   Dental Implants: Your Permanent Solution for Missing Teeth
                 </h1>
                 <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                   Restore your smile with dental implants that look, feel, and function just like natural teeth. Our experienced team uses the latest technology for precise, comfortable, and long-lasting results.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Button size="lg" className="shadow-soft font-sans">
                     Book Consultation
                     <ArrowRight className="w-4 h-4 ml-2" />
                   </Button>
                   <Button size="lg" variant="outline" className="font-sans" asChild>
                     <a href="tel:+91XXXXXXXXXX">
                       <Phone className="w-4 h-4 mr-2" />
                       Call Us Now
                     </a>
                   </Button>
                 </div>
               </div>
               <div className="relative">
                 <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                   <div className="text-center p-8">
                     <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Shield className="w-12 h-12 text-primary" />
                     </div>
                     <p className="text-2xl font-bold text-foreground">95-98%</p>
                     <p className="text-muted-foreground font-sans">Success Rate</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
 
         {/* What Are Dental Implants */}
         <section className="py-20">
           <div className="container mx-auto px-4">
             <div className="max-w-3xl mx-auto text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                 What Are Dental Implants?
               </h2>
               <p className="text-muted-foreground font-sans leading-relaxed">
                 Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Once healed, they provide a strong foundation for permanent replacement teeth that match your natural teeth in appearance and function.
               </p>
             </div>
             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
               <div className="text-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl font-bold text-primary">1</span>
                 </div>
                 <h3 className="font-semibold text-foreground mb-2">Implant</h3>
                 <p className="text-sm text-muted-foreground font-sans">Titanium post that acts as the tooth root</p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl font-bold text-primary">2</span>
                 </div>
                 <h3 className="font-semibold text-foreground mb-2">Abutment</h3>
                 <p className="text-sm text-muted-foreground font-sans">Connector piece between implant and crown</p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <span className="text-2xl font-bold text-primary">3</span>
                 </div>
                 <h3 className="font-semibold text-foreground mb-2">Crown</h3>
                 <p className="text-sm text-muted-foreground font-sans">Custom-made visible tooth replacement</p>
               </div>
             </div>
           </div>
         </section>
 
         {/* Benefits */}
         <section className="py-20 bg-secondary/30">
           <div className="container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Why Choose Dental Implants?
               </h2>
               <p className="text-muted-foreground font-sans">
                 Discover the advantages that make dental implants the gold standard for tooth replacement.
               </p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {benefits.map((benefit, index) => (
                 <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                   <CardContent className="p-6 text-center">
                     <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                       <benefit.icon className="w-7 h-7 text-primary" />
                     </div>
                     <h3 className="text-lg font-semibold text-foreground mb-2">
                       {benefit.title}
                     </h3>
                     <p className="text-sm text-muted-foreground font-sans">
                       {benefit.description}
                     </p>
                   </CardContent>
                 </Card>
               ))}
             </div>
           </div>
         </section>
 
         {/* Procedure Steps */}
         <section className="py-20">
           <div className="container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 The Implant Procedure
               </h2>
               <p className="text-muted-foreground font-sans">
                 Your journey to a restored smile in four simple steps.
               </p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {procedureSteps.map((step, index) => (
                 <div key={index} className="relative">
                   <div className="bg-card border border-border rounded-2xl p-6 h-full">
                     <span className="text-4xl font-bold text-primary/20 mb-4 block">
                       {step.step}
                     </span>
                     <h3 className="text-lg font-semibold text-foreground mb-2">
                       {step.title}
                     </h3>
                     <p className="text-sm text-muted-foreground font-sans">
                       {step.description}
                     </p>
                   </div>
                   {index < procedureSteps.length - 1 && (
                     <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                       <ArrowRight className="w-6 h-6 text-primary/30" />
                     </div>
                   )}
                 </div>
               ))}
             </div>
             <div className="text-center mt-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                 <Clock className="w-4 h-4 text-primary" />
                 <span className="text-sm font-medium text-foreground font-sans">
                   Total treatment time: 3-6 months
                 </span>
               </div>
             </div>
           </div>
         </section>
 
         {/* FAQs */}
         <section className="py-20 bg-secondary/30">
           <div className="container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Frequently Asked Questions
               </h2>
               <p className="text-muted-foreground font-sans">
                 Get answers to common questions about dental implants.
               </p>
             </div>
             <div className="max-w-3xl mx-auto">
               <Accordion type="single" collapsible className="space-y-4">
                 {faqs.map((faq, index) => (
                   <AccordionItem
                     key={index}
                     value={`item-${index}`}
                     className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                   >
                     <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                       {faq.question}
                     </AccordionTrigger>
                     <AccordionContent className="text-muted-foreground font-sans pb-5 leading-relaxed">
                       {faq.answer}
                     </AccordionContent>
                   </AccordionItem>
                 ))}
               </Accordion>
             </div>
           </div>
         </section>
 
         {/* CTA Section */}
         <section className="py-20 bg-primary">
           <div className="container mx-auto px-4">
             <div className="text-center max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                 Ready to Restore Your Smile?
               </h2>
               <p className="text-primary-foreground/80 font-sans mb-8">
                 Schedule your free consultation today and take the first step towards a confident, complete smile.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" variant="secondary" className="shadow-soft font-sans">
                   Book Free Consultation
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Button>
                 <Button size="lg" variant="outline" className="font-sans border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                   <a href="tel:+91XXXXXXXXXX">
                     <Phone className="w-4 h-4 mr-2" />
                     Call Us Now
                   </a>
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
 
 export default DentalImplants;