import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Zap, Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const videoX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const videoY = useTransform(smoothMouseY, [-0.5, 0.5], [15, -15]);
  const videoScale = useTransform(smoothMouseY, [-0.5, 0.5], [1.12, 1.08]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const updateVideoTime = useCallback(() => {
    if (videoRef.current && videoDuration > 0) {
      const progress = scrollYProgress.get();
      const targetTime = progress * videoDuration;
      videoRef.current.currentTime = targetTime;
    }
  }, [scrollYProgress, videoDuration]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", updateVideoTime);
    return () => unsubscribe();
  }, [scrollYProgress, updateVideoTime]);

  const handleVideoLoad = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
      videoRef.current.pause();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches[0].clientX - rect.left) / rect.width - 0.5;
    const y = (e.touches[0].clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden cursor-default"
    >
      {/* Video Background with Mouse Parallax */}
      <motion.div
        className="absolute inset-[-50px] sm:inset-[-30px]"
        style={{
          x: videoX,
          y: videoY,
          scale: videoScale,
        }}
      >
        <video
          ref={videoRef}
          src={heroVideo}
          muted={isMuted}
          loop={false}
          playsInline
          onLoadedMetadata={handleVideoLoad}
          className="w-full h-full object-cover"
          style={{ minWidth: "110%", minHeight: "110%" }}
        />
      </motion.div>

      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent z-[1]" />
      
      {/* Vibrant accent gradient */}
      <div 
        className="absolute inset-0 z-[1] opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, hsl(180 100% 50% / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(320 100% 60% / 0.1) 0%, transparent 50%)"
        }}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-secondary/30 z-50">
        <motion.div 
          className="h-full"
          style={{ 
            width: progressWidth,
            background: "linear-gradient(90deg, hsl(180 100% 50%), hsl(320 100% 60%))"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 border-primary/30"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Premium Detailing Studio in Alwar
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] sm:leading-tight mb-4 sm:mb-6"
          >
            <span className="text-foreground">Premium</span>{" "}
            <span className="text-gradient-primary">Car Wash</span>
            <br />
            <span className="text-foreground">& Detailing</span>{" "}
            <span className="text-gradient-accent">Studio</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 sm:mb-10"
          >
            Experience luxury car care with our professional PPF, ceramic coating, 
            deep cleaning, and detailing services. Your car deserves the best.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="tel:+919876543210"
              className="btn-premium inline-flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi, I want to book a car detailing service"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-premium inline-flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Book
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-16"
          >
            {[
              { value: "500+", label: "Cars Detailed" },
              { value: "5★", label: "Google Rating" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gradient-primary">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggleMute}
        className="absolute bottom-24 sm:bottom-28 right-4 sm:right-8 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
        )}
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-scroll-indicator" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
