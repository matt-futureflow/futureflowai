import HeroSection from "../components/hero-section";
import { FeaturesSection } from "@/components/feature-section";
import AiAssistant from "@/components/ai-assitant";
import FAQ from "@/components/faq";
import CaseStudies from "@/components/case-studies";
import Footer from "@/components/footer";
import ComparisonPage from "@/components/comparison";
import { AIGrowthSection } from "@/components/ai-growth-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
     <div className="bg-white">
       <FadeIn>
         <HeroSection/>
       </FadeIn>
       {/* <FeaturesSection/> */}
       <FadeIn delay={0.2}>
         <AIGrowthSection/>
       </FadeIn>
       {/* <ComparisonPage/> */}
       <FadeIn delay={0.4}>
         <AiAssistant/>
       </FadeIn>
       <FadeIn delay={0.6}>
         <TestimonialsSection/>
       </FadeIn>
       <FadeIn delay={0.8}>
         <CaseStudies/>
       </FadeIn>
       <FadeIn delay={1.0}>
         <FAQ/>
       </FadeIn>
       
         <Footer/>
       
     </div>
  );
}
