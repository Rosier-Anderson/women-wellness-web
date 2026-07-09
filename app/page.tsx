import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatSection from "@/components/StatSection";

export default function Home() {
  return (
    <main id="main-app" className=" flex-1 ">
      {" "}
      <Header />
      <div className="flex flex-col mx-4 gap-2">
        <HeroSection />
        <StatSection />
      </div>
    </main>
  );
}
