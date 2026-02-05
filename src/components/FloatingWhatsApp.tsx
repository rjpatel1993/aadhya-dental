 import { MessageCircle } from "lucide-react";
 
 const FloatingWhatsApp = () => {
   const phoneNumber = "918849700000"; // Replace with actual WhatsApp number
   const message = encodeURIComponent("Hello! I would like to book an appointment at Aadhya Dental Clinic.");
   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
 
   return (
     <a
       href={whatsappUrl}
       target="_blank"
       rel="noopener noreferrer"
       className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
       aria-label="Chat on WhatsApp"
     >
       <MessageCircle className="w-7 h-7 text-white fill-white" />
       
       {/* Tooltip */}
       <span className="absolute right-full mr-3 px-3 py-2 bg-card text-foreground text-sm font-medium rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
         Chat with us
       </span>
       
       {/* Pulse animation */}
       <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
     </a>
   );
 };
 
 export default FloatingWhatsApp;