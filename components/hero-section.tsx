import { ChevronRight } from "lucide-react"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ShimmerButton } from "./magicui/shimmer-button"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen py-10 bg-gradient-to-r from-[#003B20] to-black overflow-hidden">
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-40 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
      <div className=" text-center px-4  ">
              <p className=" text-white text-3xl sm:text-4xl font-medium">For SMBs and Agencies...</p>
            </div>
      <div className="max-w-7xl mx-auto px-4 pt-12 lg:pt-24 pb-16 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight">
                Never Miss A Lead With Our <span className="text-[#00FF9D]">A.I. Growth System</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D] mt-1">
                  <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-base lg:text-lg">
                  Capture & Qualify Every Lead - <span className="text-[#00FF9D]">24/7</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D] mt-1">
                  <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-base lg:text-lg">
                  <span className="text-[#00FF9D]">Double</span> Conversions With{" "}
                  <span className="text-[#00FF9D]">Instant</span> Follow Ups &{" "}
                  <span className="text-[#00FF9D]">Consistent</span> Lead Nurturing
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D] mt-1">
                  <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-base lg:text-lg">
                  Close More Deals On <span className="text-[#00FF9D]">Autopilot</span>
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

