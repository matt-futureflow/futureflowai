import { ChevronRight } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShimmerButton } from "./magicui/shimmer-button";
import { LineShadowText } from "./magicui/line-shadow-text";

export default function HeroSection() {
  return (
    <div className="relative pt-20 pb-20 bg-white overflow-hidden">
      {/* Purple gradient overlays */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-purple-400/5 rounded-full blur-3xl"></div>

      <div className="text-center py-10 px-4 pt-8 relative z-10">
        <h2 className="text-4xl mt-6 max-w-5xl mx-auto text-gray-900 font-bold tracking-tight md:text-6xl leading-tight">
          Looking To Implement{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
           AI Voice Agents
          </span>{" "}
          In Your Business?
        </h2>
        <p className="mt-6 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent text-lg md:text-2xl max-w-3xl mx-auto">
          We Might Be Able To Help
        </p>
        <div className="mt-8 text-7xl flex justify-center gap-4">
          👇
        </div>
      </div>
      <div className="text-center px-4 pt-8 relative z-10">
        <h2 className="text-xl text-purple-600 tracking-wide md:text-2xl font-medium">
          For Service Based Businesses Generating 50+ Leads Per Month
        </h2>

        <h2 className="text-4xl mt-6 max-w-5xl mx-auto text-gray-900 font-bold tracking-tight md:text-6xl leading-tight">
          Never Waste A Lead With Our <br />{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            AI Growth System
          </span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 pt-12 lg:pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl text-gray-900 font-bold leading-tight">
                Capture, Qualify, And Convert More{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Leads With AI
                </span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <span className="text-purple-600 mt-1">
                  <ChevronRight className="w-5 h-5" />
                </span>
                <p className="text-gray-700 text-lg lg:text-xl">
                  Capture & Qualify Every Lead -{" "}
                  <span className="text-purple-600 font-semibold">24/7</span>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-600 mt-1">
                  <ChevronRight className="w-5 h-5" />
                </span>
                <p className="text-gray-700 text-lg lg:text-xl">
                  <span className="text-purple-600 font-semibold">10X </span>{" "}
                  Conversions With{" "}
                  <span className="text-purple-600 font-semibold">Instant</span>{" "}
                  &{" "}
                  <span className="text-purple-600 font-semibold">
                    Consistent
                  </span>{" "}
                  Lead Activation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-purple-600 mt-1">
                  <ChevronRight className="w-5 h-5" />
                </span>
                <p className="text-gray-700 text-lg lg:text-xl">
                  Spend More Time{" "}
                  <span className="text-purple-600 font-semibold">Selling</span>
                  , Less Time Chasing
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="https://api.leadconnectorhq.com/widget/bookings/futureflow/introduction-callsqaitp">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
                  Schedule A Call
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Video Section */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl border border-purple-200 bg-white shadow-xl overflow-hidden">
              <iframe
                className="w-full"
                height="400"
                src="https://www.loom.com/embed/51d2415eda9c45a28975a502e6cbd236?sid=5cefd524-c015-4bd1-95df-20fd684d70f6"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
