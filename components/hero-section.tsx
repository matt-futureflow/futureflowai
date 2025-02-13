
import { ChevronRight } from "lucide-react";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  
  return (
    <div className="relative  min-h-screen bg-gradient-to-r from-[#003B20] to-black overflow-hidden">
      <DotPattern
        className={cn(
          " opacity-40 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="max-w-7xl mx-auto px-4 pt-24 mb-10 ">
        <h1 className="text-4xl lg:text-5xl text-center text-white font-light">
          For SMBs and Agencies...
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl text-white font-medium">
                Never Miss A Lead With Our{" "}
                <span className="text-[#00FF9D]">A.I. Growth System</span>
              </h1>
            </div>

            <div className="space-y-6 pb-6">
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D]">
                <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-lg">
                  Capture & Qualify EVERY Lead -{" "}
                  <span className="text-[#00FF9D]">24/7</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D]">
                <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-lg">
                  <span className="text-[#00FF9D]">DOUBLE</span> Conversions
                  With <span className="text-[#00FF9D]">Instant</span> Follow
                  Ups & <span className="text-[#00FF9D]">Consistent</span> Lead
                  Nurturing
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00FF9D]">
                     <ChevronRight className="w-4 h-4" />
                </span>
                <p className="text-white text-lg">
                  Close More Deals On{" "}
                  <span className="text-[#00FF9D]">Autopilot</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
             
            </div>
          </div>

          {/* Right Column - Video Section */}
          <div className="relative">
            <div
              className="relative rounded-lg border border-[#00FF9D]/20 bg-black/40 aspect-video"
            >
              <video src="/video.mp4" autoPlay loop  controls={true} className="rounded-lg w-full h-full object-cover" />
            
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
