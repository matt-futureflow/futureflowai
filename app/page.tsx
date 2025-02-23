import HeroSection from "../components/hero-section";
import Header from "../components/header";
import { FeaturesSection } from "@/components/feature-section";
import AiAssistant from "@/components/ai-assitant";
import FAQ from "@/components/faq";
import ComparisonToggle from "@/components/comparison";
import CaseStudies from "@/components/case-studies";
import Footer from "@/components/footer";
import ComparisonPage from "@/components/comparison";

export default function Home() {
  return (
     <div className="  bg-gradient-to-b from-[#03120c] to-[#051f14]">
       <HeroSection/>
       <FeaturesSection/>
       <ComparisonPage/>
       <AiAssistant/>
       <CaseStudies/>
       <FAQ/>
       <Footer/>
     </div>
  );
}
