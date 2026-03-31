import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsAIStudio from "@/components/WhatIsAIStudio";
import ToolsGrid from "@/components/ToolsGrid";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsAIStudio />
      <ToolsGrid />
      <Architecture />
      <UseCases />
      <Roadmap />
      <Footer />
    </main>
  );
}
