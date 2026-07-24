import { Header } from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ServicesSection from "@/components/layout/ServicesSection";
import StatSection from "@/components/layout/StatSection";
import TrainerSection from "@/components/layout/TrainerSection";

export default function Home() {
  return (
    <main id="main-app" className=" flex-1  ">
      <Header />
      <div className="flex flex-col mx-5 gap-6">
        <HeroSection />
        <StatSection />
        <ServicesSection />
        {/* Image goes here or section */}
        <TrainerSection />                                                         
      </div>
    </main>
  );
}
