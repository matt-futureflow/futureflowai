"use client"
import Link from "next/link"
import { CaseStudyCard } from "./ui/case-study-card"

const caseStudies = [
  {
    logo: "/apex.png",
    title: "65 Appointments in 60 days",
    amount: "$182,000 Generated!",
    content: (
      <>
        <p>
          We partnered with a reputable aftermarket rims and big tyres company. Our{" "}
          <span className="text-[#003B20] font-semibold">AI Growth System</span> managed their Facebook Ad leads
          and implemented an AI Re-Activation Campaign with incredible outcomes!
        </p>
      </>
    ),
    results: ["Additional $182,000 achieved in 60 days", "Automated Facebook Ad Lead Flow Process"],
  },
  {
    logo: "/align.png",
    title: "30 Deals In First 2 Weeks!",
    amount: "$3,000,000+ Generated!",
    content: <p>Get Exclusive Outbound Callers That Can Generate You Leads Like This!</p>,
    results: ["+124% Increase in Deal Flow", "$3,000,000+ worth of deals generated in 1 DAY!"],
  },
  {
    logo: "/rockbox.png",
    title: "48% 'Opt-In No Book' Lead Conversion",
    amount: "$9,000+ Generated!",
    content: (
      <p>
        We partnered with a RockBox franchisee and implemented our{" "}
        <span className="text-[#003B20] font-semibold">AI Growth System</span> to increase appointments from 'No
        Book' Facebook Ad leads. Our AI Assistants doubled their previous conversion rate!
      </p>
    ),
    results: ["Additional $14,400 generated (LTV of $900)", "$9,000 more in opportunities"],
  },
]

export default function CaseStudies() {
  return (
    <section className="w-full py-12 md:py-24 bg-white relative">
      {/* Purple gradient overlay */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-purple-400/10 to-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Studies</span>
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
      <div className="pt-10 flex justify-center items-center relative z-10">
              
              <Link
                href="https://api.leadconnectorhq.com/widget/bookings/futureflow/introduction-callsqaitp"
              >
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg">
                  Schedule A Call
                </button>
              </Link>
            </div>
    </section>
  )
}

