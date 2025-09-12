import { CheckCircle } from "lucide-react"

export function AIGrowthSection() {
  return (
    <section className="bg-emerald-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            How Our AI Growth System
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-400 mb-8 text-balance">
            Makes Scaling Easy
          </h3>
          <p className="text-xl md:text-2xl text-emerald-100 text-balance">
            The 3 Core Pillars That Let You Scale 10x Faster With Less Work
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pillar 1 */}
          <div className="bg-gray-900/50 rounded-3xl p-8 border-2 border-emerald-500/30 relative">
            <div className="absolute -top-4 left-8">
              <div className="bg-emerald-500 text-black font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                1
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white text-center mb-2">24/7 Inbound Voice Agents</h3>
              <p className="text-emerald-400 text-center font-semibold mb-6">Never Miss A Call</p>

              <div className="space-y-4">
                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Professional AI Answers Every Call</span>
                </div>

                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Capture After-Hours Inquiries</span>
                </div>

                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Qualify, Book, Or Warm Transfer Leads Automatically</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-gray-900/50 rounded-3xl p-8 border-2 border-emerald-500/30 relative">
            <div className="absolute -top-4 left-8">
              <div className="bg-emerald-500 text-black font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                2
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white text-center mb-2">Lightning Quick Outbound Voice Agents</h3>
              <p className="text-emerald-400 text-center font-semibold mb-6">Strike While Leads Are Hot</p>

              <div className="space-y-4">
                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Call Leads Within 5 Mins - Guaranteed</span>
                </div>

                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Leads 21x More Likely To Convert</span>
                </div>

                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">
                    Never Forgets To Follow Up - Nothing Slips Through The Cracks
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-gray-900/50 rounded-3xl p-8 border-2 border-emerald-500/30 relative">
            <div className="absolute -top-4 left-8">
              <div className="bg-emerald-500 text-black font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                3
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white text-center mb-2">Full Sales Nurture System</h3>
              <p className="text-emerald-400 text-center font-semibold mb-6">No More Manual Follow Ups</p>

              <div className="space-y-4">
                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Intelligent Pipeline Management</span>
                </div>

                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Multi-Channel Nurturing (Call, SMS, Email)</span>
                </div>

                <div className="bg-emerald-900/30 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm">Automated Appointment Booking & confirmations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
