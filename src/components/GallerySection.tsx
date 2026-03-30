import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import galleryBefore1 from "@/assets/gallery-before-1.jpg";
import galleryAfter1 from "@/assets/gallery-after-1.jpg";
import galleryBefore2 from "@/assets/gallery-before-2.jpg";
import galleryAfter2 from "@/assets/gallery-after-2.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import servicePolishing from "@/assets/service-polishing.jpg";

const galleryItems = [
  {
    before: galleryBefore1,
    after: galleryAfter1,
    title: "Paint Correction",
    description: "Swirl mark removal and ceramic coating",
  },
  {
    before: galleryBefore2,
    after: galleryAfter2,
    title: "Interior Restoration",
    description: "Deep cleaning and leather conditioning",
  },
];

const showcaseImages = [
  { src: serviceCeramic, title: "Ceramic Coating Applied" },
  { src: servicePolishing, title: "Professional Polishing" },
  { src: galleryAfter1, title: "Mirror Finish" },
  { src: galleryAfter2, title: "Interior Detailing" },
];

const BeforeAfterSlider = ({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* After Image (Background) */}
        <img
          src={item.after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-primary z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground absolute -left-0.5" />
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground absolute -right-0.5" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs font-medium">
          Before
        </div>
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium">
          After
        </div>

        {/* Range Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Before and after comparison slider"
        />
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4 lg:p-5">
        <h3 className="text-base sm:text-lg font-heading font-bold text-foreground">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            Before & <span className="text-gradient-gold">After</span> Gallery
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            See the transformation. Drag the slider to reveal the difference 
            our premium detailing services make.
          </p>
        </motion.div>

        {/* Before/After Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {galleryItems.map((item, index) => (
            <BeforeAfterSlider key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-4">
                <span className="text-xs sm:text-sm font-medium text-foreground line-clamp-1">
                  {image.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
