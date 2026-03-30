import { forwardRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = forwardRef<HTMLAnchorElement>((_, ref) => {
  return (
    <motion.a
      ref={ref}
      href="https://wa.me/919876543210?text=Hi, I want to book a car detailing service"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
      data-cursor-text="Chat"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
});

FloatingWhatsApp.displayName = "FloatingWhatsApp";

export default FloatingWhatsApp;
