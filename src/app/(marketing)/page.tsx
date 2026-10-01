import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatSection from "@/components/sections/StatSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TrainerSection from "@/components/sections/TrainerSection";

export default function Home() {
  return (
    <div id="main-app">
      <div className="flex flex-col mx-4 sm:mx-10 gap-16 sm:gap-20 lg:gap-24 mt-10">
        <HeroSection />
        <StatSection />
        <ServicesSection />
        {/* Image goes here or section */}
        <TrainerSection />
        {/* <TestimonialSection/>                                                       */}
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
}
