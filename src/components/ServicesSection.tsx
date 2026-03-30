import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles, Car, Droplets, Wrench, Gem, ArrowRight } from "lucide-react";

import servicePpf from "@/assets/service-ppf.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceWash from "@/assets/service-wash.jpg";
import servicePolishing from "@/assets/service-polishing.jpg";
import serviceEngine from "@/assets/service-engine.jpg";

const services = [
  {
    title: "Paint Protection Film",
    shortTitle: "PPF",
    description: "Invisible armor for your car's paint. Protects against rock chips, scratches, and environmental damage.",
    image: servicePpf,
    icon: Shield,
    features: ["Self-healing", "10-year warranty", "UV protection"],
    gradient: "from-primary to-electric-blue",
  },
  {
    title: "Ceramic Coating",
    shortTitle: "Ceramic",
    description: "Advanced nano-ceramic protection that creates a permanent bond with your paint for ultimate shine.",
    image: serviceCeramic,
    icon: Gem,
    features: ["9H hardness", "Hydrophobic", "5-year durability"],
    gradient: "from-accent to-neon-purple",
  },
  {
    title: "Interior Detailing",
    shortTitle: "Interior",
    description: "Deep cleaning and conditioning of leather, fabric, and all interior surfaces.",
    image: serviceInterior,
    icon: Sparkles,
    features: ["Steam cleaning", "Leather care", "Odor removal"],
    gradient: "from-gold to-gold-light",
  },
  {
    title: "Premium Foam Wash",
    shortTitle: "Foam Wash",
    description: "pH-neutral snow foam wash with hand-dry finish using premium microfiber towels.",
    image: serviceWash,
    icon: Droplets,
    features: ["Scratch-free", "Hand dried", "Tire shine"],
    gradient: "from-primary to-accent",
  },
  {
    title: "Paint Correction",
    shortTitle: "Polish",
    description: "Multi-stage polishing to remove swirl marks, scratches, and oxidation for a mirror finish.",
    image: servicePolishing,
    icon: Car,
    features: ["Swirl removal", "Scratch repair", "Mirror finish"],
    gradient: "from-electric-blue to-primary",
  },
  {
    title: "Engine Bay Cleaning",
    shortTitle: "Engine",
    description: "Professional degreasing and detailing of your engine compartment for that showroom look.",
    image: serviceEngine,
    icon: Wrench,
    features: ["Safe cleaning", "Dressing", "Protection"],
    gradient: "from-neon-purple to-accent",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="glass-card overflow-hidden relative h-full transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_-15px_hsl(180_100%_50%_/_0.4)]">
        {/* Image */}
        <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          
          {/* Gradient Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Icon Badge */}
          <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 relative">
          <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-1">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/8 via-transparent to-transparent opacity-60 blur-3xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold"
          >
            Our Services
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            Premium <span className="text-gradient-primary">Detailing</span> Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            From basic wash to full paint protection, we offer comprehensive car care 
            services using only premium products and techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
