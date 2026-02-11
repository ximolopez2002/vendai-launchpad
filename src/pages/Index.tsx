import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import BentoSection from "@/components/landing/BentoSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import ROISection from "@/components/landing/ROISection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BentoSection />
      <SolutionsSection />
      <ROISection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
