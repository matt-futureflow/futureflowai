import HeroSection from "../components/hero-section";
import { FeaturesSection } from "@/components/feature-section";
import AiAssistant from "@/components/ai-assitant";
import FAQ from "@/components/faq";
import CaseStudies from "@/components/case-studies";
import Footer from "@/components/footer";
import ComparisonPage from "@/components/comparison";
import { AIGrowthSection } from "@/components/ai-growth-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
     <div className="  bg-gradient-to-b from-[#03120c] to-[#051f14]">
       <HeroSection/>
       {/* <FeaturesSection/> */}
       <AIGrowthSection/>
       {/* <ComparisonPage/> */}
       <AiAssistant/>
       <TestimonialsSection/>
       <CaseStudies/>
       <FAQ/>
       <Footer/>
     </div>
  );
}
