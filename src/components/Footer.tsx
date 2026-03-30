import { forwardRef } from "react";
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Paint Protection Film (PPF)",
  "Ceramic Coating",
  "Interior Detailing",
  "Premium Foam Wash",
  "Paint Correction",
  "Engine Bay Cleaning",
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="relative pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="inline-block mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
                <span className="text-gradient-gold">HYDRO</span>
                <span className="text-foreground">WASH</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Premium car wash and detailing studio in Alwar. Luxury car care 
              with professional-grade services.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-lg font-heading font-bold text-foreground mb-3 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm sm:text-lg font-heading font-bold text-foreground mb-3 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                  >
                    {service}
                  </a>
                </li>
              ))}
              <li className="hidden sm:block">
                <a
                  href="#services"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {services[4]}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm sm:text-lg font-heading font-bold text-foreground mb-3 sm:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Near City Center, Main Road,
                  Alwar, Rajasthan 301001
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@hydrowash.in"
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  hello@hydrowash.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 sm:mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} HYDROWASH. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
            <span className="text-gradient-gold font-medium">Premium Car Care</span> • Alwar
          </p>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
