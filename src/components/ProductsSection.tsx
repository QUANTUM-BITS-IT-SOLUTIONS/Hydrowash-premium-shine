import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag } from "lucide-react";

import productCeramicSpray from "@/assets/product-ceramic-spray.jpg";
import productFoamWash from "@/assets/product-foam-wash.jpg";
import productMicrofiber from "@/assets/product-microfiber.jpg";
import productWax from "@/assets/product-wax.jpg";

const products = [
  {
    name: "Ceramic Spray Coating",
    description: "Quick ceramic protection for up to 6 months of hydrophobic shine.",
    price: "₹1,499",
    image: productCeramicSpray,
    badge: "Best Seller",
  },
  {
    name: "Premium Foam Shampoo",
    description: "pH-neutral snow foam formula for safe, scratch-free washing.",
    price: "₹899",
    image: productFoamWash,
    badge: null,
  },
  {
    name: "Microfiber Towel Set",
    description: "Ultra-soft 400 GSM microfiber cloths for streak-free drying.",
    price: "₹599",
    image: productMicrofiber,
    badge: "Popular",
  },
  {
    name: "Carnauba Wax",
    description: "Pure Brazilian carnauba wax for deep, warm showroom shine.",
    price: "₹1,299",
    image: productWax,
    badge: null,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-primary font-medium">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            Premium <span className="text-gradient-gold">Car Care</span> Products
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Take the HYDROWASH experience home. Professional-grade products for 
            maintaining that showroom shine between visits.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card-hover overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold">
                    {product.badge}
                  </div>
                )}

                {/* Quick Action */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="https://wa.me/919876543210?text=I want to buy the product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 lg:p-5">
                <h3 className="text-sm sm:text-base lg:text-lg font-heading font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-[10px] sm:text-xs lg:text-sm mb-2 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg lg:text-xl font-heading font-bold text-gradient-gold">
                    {product.price}
                  </span>
                  <a
                    href="https://wa.me/919876543210?text=I want to buy the product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block text-xs sm:text-sm font-medium text-primary hover:underline"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
