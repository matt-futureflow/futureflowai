import { Check, Shield, ShieldCheck, X, XCircle } from "lucide-react"
import Image from "next/image"

export default function ComparisonSection() {
  return (
    <div className="w-full  px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header Pill */}
        <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 px-8 py-2">
          <p className="text-center text-lg font-medium text-green-600">Why Use The FutureFlow System</p>
        </div>

        {/* Main Headline */}
        <h1 className="mb-28 text-center text-3xl font-bold leading-tight text-white md:text-4xl lg:mx-auto lg:max-w-4xl">
          Offload repetitive tasks to AI Agents. Cut down wait times and solve problems fast.
        </h1>

        {/* Comparison Grid */}
        <div className="grid gap-20  md:grid-cols-2">
          {/* Traditional System */}

          <div className="rounded-3xl relative bg-white p-8 shadow-lg">
          <div className="overflow-hidden absolute -top-5  right-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md shadow-2xl w-24 bg-white  p-2">
                <img
                  src="/cons.webp"
                  alt="FutureFlow AI"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-contain"
                />
              </div>
           
             
              <h2 className="text-3xl my-10 text-center font-semibold text-gray-700">Traditional Appointment Setting</h2>
            
            <div className="space-y-4">
              {traditionalPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <XCircle className="h-6 w-6 shrink-0 text-red-500" />
                  <p className="text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FutureFlow System */}
          <div className="rounded-3xl relative border bg-transparent p-8 text-white shadow-lg">
          <div className="overflow-hidden absolute -top-5  right-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md shadow-2xl w-24 bg-white  p-2">
                <img
                  src="/logo.png"
                  alt="FutureFlow AI"
                  width={80}
                  height={80}
                  className="h-16 w-full object-contain"
                />
              </div>
           
             
              <h2 className="text-3xl my-10 text-center font-semibold">Next Gen AI Enabled FutureFlow</h2>
            
            <div className="space-y-4">
              {futureFlowPoints.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-white" />
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
  "Calls ALL Leads In Under 5 Minutes Of Completing A Form.",
  "Instant Expert Knowledge.",
  "0 Hiring, Training, or Managing Needed.",
  "Never Misses A Lead or Forgets To Call.",
  "Never Misses An Inbound Call.",
  "Never Misses A Follow Up Call.",
  "Integrates seamlessly with CRM's.",
  "0 Staff Costs or Monthly Wages.",
  "0 Commission Paid Out.",
]

