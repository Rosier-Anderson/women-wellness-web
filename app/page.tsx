import { Header } from "@/components/layout/Header";
import HeroSection from "@/components/layout/HeroSection";
import ServicesSection from "@/components/layout/ServicesSection";
import StatSection from "@/components/layout/StatSection";

export default function Home() {
  return (
    <main id="main-app" className=" flex-1  ">
      <Header />
      <div className="flex flex-col mx-4 gap-6">
        <HeroSection />
        <StatSection />
        <ServicesSection />
      </div>
    </main>
  );
}
