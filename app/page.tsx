import { Footer } from "@/components/footer";
import ContactSection from "@/components/layout/ContactSection";
import FAQSection from "@/components/layout/FAQSection";
import { Header } from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ServicesSection from "@/components/layout/ServicesSection";
import StatSection from "@/components/layout/StatSection";
import TestimonialSection from "@/components/layout/TestimonialSection";
import TrainerSection from "@/components/layout/TrainerSection";

export default function Home() {
  return (
    <main id="main-app" className="flex-1">
      <Header />
      <div className="flex flex-col mx-5 gap-6 ">
        <HeroSection />
        <StatSection />
        <ServicesSection />
        {/* Image goes here or section */}
        <TrainerSection />
        {/* <TestimonialSection/>                                                       */}
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
