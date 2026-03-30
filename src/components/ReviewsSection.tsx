import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Sharma",
    car: "BMW 5 Series",
    rating: 5,
    text: "Absolutely phenomenal work! Got ceramic coating done and my car looks better than when I bought it.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Gupta",
    car: "Mercedes C-Class",
    rating: 5,
    text: "Best detailing service in Alwar. The PPF installation was flawless. Highly recommended!",
    date: "1 month ago",
  },
  {
    name: "Amit Kumar",
    car: "Fortuner",
    rating: 5,
    text: "The interior detailing transformed my SUV. They removed stains I thought were permanent.",
    date: "3 weeks ago",
  },
  {
    name: "Vikram Singh",
    car: "Audi A4",
    rating: 5,
    text: "I've tried many car washes, but HYDROWASH is in a different league. Amazing results!",
    date: "1 week ago",
  },
  {
    name: "Neha Verma",
    car: "Honda City",
    rating: 5,
    text: "Amazing service and reasonable pricing. The paint correction made my car look brand new!",
    date: "2 months ago",
  },
  {
    name: "Arjun Mehra",
    car: "Thar",
    rating: 5,
    text: "Got full detailing after an off-road trip. They cleaned every inch perfectly!",
    date: "3 weeks ago",
  },
];

const ReviewCard = ({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card p-4 sm:p-5 lg:p-6 relative group hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_-15px_hsl(180_100%_50%_/_0.3)]"
    >
      {/* Quote Icon */}
      <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 text-primary/20 group-hover:text-primary/50 transition-colors" />

      {/* Rating */}
      <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
              i < review.rating ? "text-gold fill-gold" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Avatar */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
          <span className="text-base sm:text-lg font-heading font-bold text-white">
            {review.name.charAt(0)}
          </span>
        </div>

        <div className="min-w-0">
          <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base truncate">
            {review.name}
          </h4>
          <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
            {review.car} • {review.date}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent/8 to-transparent blur-3xl translate-x-1/2" />

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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            What Our <span className="text-gradient-primary">Customers</span> Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Don't just take our word for it. Here's what car enthusiasts across 
            Alwar have to say about our services.
          </p>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="glass-card px-4 sm:px-6 lg:px-8 py-3 sm:py-4 inline-flex items-center gap-3 sm:gap-4 border-primary/30">
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gold fill-gold" />
              ))}
            </div>
            <div className="h-6 sm:h-8 w-px bg-border" />
            <div className="text-left">
              <div className="text-xl sm:text-2xl font-heading font-bold text-gradient-primary">
                5.0
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Google Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
