import { ChevronRight } from "lucide-react"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ShimmerButton } from "./magicui/shimmer-button"
import { LineShadowText } from "./magicui/line-shadow-text"

export default function HeroSection() {
  return (
    <div className="relative pt-10 bg-gradient-to-r from-[#003B20] to-black overflow-hidden">
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-40 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
      <div className=" text-center px-4 pt-16 ">
              <h2 className=" text-4xl text-white font-bold tracking-wide md:text-6xl ">For {" "}<LineShadowText className="italic text-[#00FF9D]" shadowColor={"white"}>SMBs </LineShadowText>{" "}  and 
              {" "}<LineShadowText className="italic text-[#00FF9D]" shadowColor={"white"}>
              Agencies
      </LineShadowText>

              </h2>
            </div>
      <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24 pb-16 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-relaxed">
                Never Miss A Lead With Our <span className="text-[#00FF9D]">A.I. Growth System</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D] mt-1">
                  <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-lg lg:text-xl">
                  Capture & Qualify Every Lead - <span className="text-[#00FF9D]">24/7</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D] mt-1">
                  <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-lg lg:text-xl">
                   
                  <span className="text-[#00FF9D]">10X </span> Conversions With{" "}
                  <span className="text-[#00FF9D]">Instant</span>  &{" "}
                  <span className="text-[#00FF9D]">Consistent</span> {" "}Lead Activation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D] mt-1">
                  <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-lg lg:text-xl">
               
                Spend More Time  <span className="text-[#00FF9D]">Selling</span>, Less Time Chasing
                </p>
              </div>
            </div>

            <div className="pt-4">
              
              <Link
                href="https://api.leadconnectorhq.com/widget/bookings/futureflow/introductioncall"
              >
                <ShimmerButton >
                  Schedule A Call
                </ShimmerButton>
              </Link>
            </div>
          </div>

          {/* Right Column - Video Section */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-lg border border-[#00FF9D]/20 bg-black/40 aspect-video overflow-hidden">
              <video src="/video.mp4" autoPlay loop controls={true} className="rounded-lg w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

