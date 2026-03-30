import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210?text=Hi, I want to book a car detailing service",
    action: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@hydrowash.in",
    href: "mailto:hello@hydrowash.in",
    action: "Send Email",
  },
];

const businessHours = [
  { day: "Mon - Sat", time: "9 AM - 8 PM" },
  { day: "Sunday", time: "10 AM - 6 PM" },
];

const ContactSection = forwardRef<HTMLElement>((_, forwardedRef) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      id="contact" 
      ref={forwardedRef}
      className="py-16 sm:py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            Book Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to give your car the premium care it deserves? Contact us 
            today to schedule your detailing session.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card p-4 sm:p-5 flex items-center gap-3 sm:gap-5 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm text-muted-foreground">{info.title}</h4>
                    <p className="text-base sm:text-lg font-heading font-semibold text-foreground truncate">
                      {info.value}
                    </p>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    {info.action} →
                  </span>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="glass-card p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm text-muted-foreground mb-1">Visit Us</h4>
                  <p className="font-heading font-semibold text-foreground text-sm sm:text-base mb-1">
                    HYDROWASH Car Wash & Detailing Studio
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Near City Center, Main Road,<br />
                    Alwar, Rajasthan 301001
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">Opening Hours</h4>
                  {businessHours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center py-1.5 sm:py-2 border-b border-border last:border-0 gap-2"
                    >
                      <span className="text-xs sm:text-sm text-foreground">{schedule.day}</span>
                      <span className="text-xs sm:text-sm font-medium text-primary">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card overflow-hidden h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113516.37950757447!2d76.55863573281249!3d27.55351780000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972979c8f5a58d5%3A0x54fe4c5c4b80b55d!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="HYDROWASH Location Map"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 sm:mt-16"
        >
          <a
            href="https://wa.me/919876543210?text=Hi, I want to book a car detailing service"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base px-6 sm:px-8"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Book via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
