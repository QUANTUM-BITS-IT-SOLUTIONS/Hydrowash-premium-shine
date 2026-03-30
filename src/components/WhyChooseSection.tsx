import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Leaf, IndianRupee, Clock, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Professional Equipment",
    description: "Industry-leading tools and polishers for flawless results every time.",
    gradient: "from-primary to-electric-blue",
  },
  {
    icon: Users,
    title: "Trained Specialists",
    description: "Certified team trained in the latest detailing techniques.",
    gradient: "from-accent to-neon-purple",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "pH-neutral, biodegradable products safe for your car and environment.",
    gradient: "from-gold to-gold-light",
  },
  {
    icon: IndianRupee,
    title: "Affordable Luxury",
    description: "Premium quality services at competitive prices. Luxury car care for all.",
    gradient: "from-neon-purple to-accent",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Efficient service without compromising quality. Most services same-day.",
    gradient: "from-electric-blue to-primary",
  },
  {
    icon: ThumbsUp,
    title: "100+ Happy Customers",
    description: "Trusted by car enthusiasts across Alwar. See our 5-star reviews.",
    gradient: "from-primary to-accent",
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      
      {/* Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-primary/10 to-transparent blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent/10 to-transparent blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-primary font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            The <span className="text-gradient-primary">HYDROWASH</span> Difference
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            We're not just a car wash. We're a premium detailing studio committed to 
            excellence in every service we provide.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="glass-card p-5 sm:p-6 lg:p-8 h-full transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_-15px_hsl(180_100%_50%_/_0.3)]">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-5 right-5 sm:left-6 sm:right-6 lg:left-8 lg:right-8 h-0.5 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
