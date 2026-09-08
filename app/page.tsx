import { HeroSection } from "@/components/home/HeroSection";
import { MeetYashSection } from "@/components/home/MeetYashSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { KundliExplorerSection } from "@/components/home/KundliExplorerSection";
import { FeaturedServicesSection } from "@/components/home/FeaturedServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0">
      <HeroSection />
      <MeetYashSection />
      <HowItWorksSection />
      <KundliExplorerSection />
      <FeaturedServicesSection />
      <TestimonialsSection />
    </div>
  );
}
