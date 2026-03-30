import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProductsSection from "@/components/ProductsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const Index = () => {
  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      <SmoothScrollProvider>
        <div className="min-h-screen bg-background overflow-x-hidden">
          {/* Fixed background gradient */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-card to-background" />
          
          {/* Animated gradient orbs - brighter and more dynamic */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-0 -left-1/4 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[150px] animate-pulse"
              style={{ animationDuration: "6s" }}
            />
            <div 
              className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px] animate-pulse"
              style={{ animationDuration: "8s", animationDelay: "1s" }}
            />
            <div 
              className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-electric/10 blur-[100px] animate-pulse"
              style={{ animationDuration: "10s", animationDelay: "2s" }}
            />
          </div>

          <Navbar />
          <main>
            <HeroSection />
            <ServicesSection />
            <WhyChooseSection />
            <ProductsSection />
            <GallerySection />
            <ReviewsSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </SmoothScrollProvider>
    </>
  );
};

export default Index;
