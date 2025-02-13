import { Check, X } from "lucide-react"
import Image from "next/image"

export default function ComparisonSection() {
  return (
    <div className="w-full  px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header Pill */}
        <div className="mx-auto mb-4 w-fit rounded-full bg-blue-100 px-8 py-2">
          <p className="text-center text-lg font-medium text-blue-600">Why Use The FutureFlow System</p>
        </div>

        {/* Main Headline */}
        <h1 className="mb-16 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:mx-auto lg:max-w-4xl">
          Offload repetitive tasks to AI Agents. Cut down wait times and solve problems fast.
        </h1>

        {/* Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Traditional System */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Traditional System"
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700">Traditional Appointment Setting</h2>
            </div>
            <div className="space-y-4">
              {traditionalPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <X className="h-6 w-6 shrink-0 text-red-500" />
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FutureFlow System */}
          <div className="rounded-3xl bg-transparent p-8 text-white shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl bg-white p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tiCg5uIS8JUyl49lHtXNzYsjqqjJRN.png"
                  alt="FutureFlow AI"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold">Next Gen AI Enabled FutureFlow</h2>
            </div>
            <div className="space-y-4">
              {futureFlowPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <Check className="h-6 w-6 shrink-0 text-white" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const traditionalPoints = [
  "Lead Contact Delay. Slower the contact, the smaller the conversion rate.",
  "Clients can answer the phone OR make the calls. You suffer because of it.",
  "SDR or Appointment Setter Costs are high and unpredictable.",
  "Paying commissions per booked call strains budgets.",
  "Hiring, training, and managing a team of callers is time-consuming.",
  "Lack of knowledge about services leads to poor quality calls.",
  "Unable to handle high lead volumes efficiently.",
  "Call quality control becomes difficult as you scale.",
]

const futureFlowPoints = [
  "Superior AI-driven technology ensures crystal-clear, reliable connections.",
  "Seamlessly integrates with major CRMs and platforms.",
  "Highly customizable features adapt to your business's unique requirements.",
  "User-friendly and intuitive design that is easy to navigate.",
  "Zero staff costs or monthly wages - predictable pricing.",
  "Instant expert knowledge for every call.",
  "Handle unlimited leads with consistent quality.",
  "Never misses a follow-up or drops a lead.",
]

