import { CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const pillars = [
  {
    number: 1,
    title: "24/7 Inbound Voice Agents",
    subtitle: "Never Miss A Call",
    features: [
      "Professional AI Answers Every Call",
      "Capture After-Hours Inquiries",
      "Qualify, Book, Or Warm Transfer Leads Automatically"
    ]
  },
  {
    number: 2,
    title: "Lightning Quick Outbound Voice Agents",
    subtitle: "Strike While Leads Are Hot",
    features: [
      "Call Leads Within 5 Mins - Guaranteed",
      "Leads 21x More Likely To Convert",
      "Never Forgets To Follow Up - Nothing Slips Through The Cracks"
    ]
  },
  {
    number: 3,
    title: "Full Sales Nurture System",
    subtitle: "No More Manual Follow Ups",
    features: [
      "Intelligent Pipeline Management",
      "Multi-Channel Nurturing (Call, SMS, Email)",
      "Automated Appointment Booking & confirmations"
    ]
  }
]

export function AIGrowthSection() {
  return (
    <section className="bg-white py-20 px-4 relative">
      {/* Purple gradient overlay */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  text-balance">
              How Our AI Growth System
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="text-4xl md:text-5xl py-2 lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-8  leading-tight text-balance">
              Makes Scaling Easy
            </h3>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 text-balance">
              The 3 Core Pillars That Let You Scale 10x Faster With Less Work
            </p>
          </FadeIn>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 space-y-7 sm:space-y-0 gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.number} delay={0.6 + index * 0.2}>
              <div className="bg-white rounded-2xl p-8 border border-purple-200 shadow-lg relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    {pillar.number}
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{pillar.title}</h3>
                  <p className="text-purple-600 text-center font-semibold mb-6">{pillar.subtitle}</p>

                  <div className="space-y-4">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-purple-50 rounded-xl p-4 flex items-start gap-3">
                        <CheckCircle className="text-purple-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
