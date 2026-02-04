import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist every 6 months for regular check-ups and professional cleaning. However, if you have specific dental concerns or conditions, more frequent visits may be necessary. Regular visits help prevent problems and catch issues early.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening performed by a qualified dentist is completely safe. At Aadhya Dental Clinic, we use clinically proven whitening systems that effectively brighten your smile without damaging your enamel. We also provide guidance on maintaining your results.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "In case of a dental emergency such as severe tooth pain, knocked-out tooth, or broken tooth, contact us immediately. We offer emergency dental services and will prioritize your appointment. In the meantime, rinse with warm salt water and apply a cold compress if needed.",
  },
  {
    question: "Do dental implants hurt?",
    answer:
      "The dental implant procedure is performed under local anesthesia, so you won't feel pain during the surgery. Some discomfort and swelling may occur afterward, but this is manageable with prescribed medications. Most patients report that the procedure was easier than expected.",
  },
  {
    question: "How can I prevent cavities?",
    answer:
      "Preventing cavities involves maintaining good oral hygiene: brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and visit your dentist regularly for check-ups and cleanings. We can also apply dental sealants for added protection.",
  },
  {
    question: "What payment options do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, and UPI payments. We also offer flexible payment plans for extensive treatments. Many dental insurance plans are accepted — please contact us to verify your coverage before your appointment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 font-sans">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Dental Questions
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Find answers to frequently asked questions about our dental services
            and treatments.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/30 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
