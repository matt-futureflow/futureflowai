import HeroSection from "../components/hero-section";
import Header from "../components/header";
import { FeaturesSection } from "@/components/feature-section";
import ComparisonSection from "@/components/comparison";
import AiAssistant from "@/components/ai-assitant";

export default function Home() {
  return (
     <div className="  bg-gradient-to-b from-[#03120c] to-[#051f14]">
       <HeroSection/>
       <FeaturesSection/>
       <ComparisonSection/>
       <AiAssistant/>
     </div>
  );
}
