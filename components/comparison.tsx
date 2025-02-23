"use client"

import { XCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ShimmerButton } from "./magicui/shimmer-button"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#003B20] to-black text-white pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Lead Nurturing <span className="text-[#00FF9D]">Comparison</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Traditional System Column */}
          <div className="space-y-4">
            <h2 className="text-3xl text-center font-bold mb-8">Traditional System</h2>

            {[
              { title: "Slow Follow-Up", text: "Delayed responses cause leads to go cold, resulting in lost revenue." },
              { title: "Human Errors", text: "Missed calls, inconsistent follow-ups, and mistakes lead to poor conversion rates." },
              { title: "High Costs", text: "Hiring staff, paying commissions, and inefficiencies make scaling expensive and difficult." },
              { title: "Lost Leads", text: "Without structured follow-ups, potential customers slip away, wasting marketing efforts." },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <span className="font-bold text-[#00FF9D]">{item.title}:</span> {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* AI Growth System Column */}
          <div className="space-y-4">
            <h2 className="text-3xl text-center font-bold mb-8">AI Growth System</h2>

            {[
              {
                title: "Save $36,000+ Per Year",
                text: "Remove the need for costly SDRs, management, and ongoing training expenses.",
              },
              {
                title: "Scale Without Limits",
                text: "Manage 10x more leads efficiently without additional staff, overhead, or manual effort.",
              },
              {
                title: "24/7 Lead Engagement",
                text: "Never miss a lead again—even outside regular business hours or holidays.",
              },
              {
                title: "Convert Leads 3x Faster",
                text: "Engage every lead within two minutes, ensuring maximum conversion opportunities.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#003B20]/50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-lg">
                  <span className="font-bold text-[#00FF9D]">{item.title}:</span> {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="https://api.leadconnectorhq.com/widget/bookings/futureflow/introductioncall">
            <ShimmerButton>Schedule A Call</ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

