"use client"

import { useState } from "react"
import { CaseStudyModal } from "@/components/ui/case-study-modal"
import { CaseStudyCard } from "./ui/case-study-card"

const caseStudies = [
  {
    logo: "/apex.png",
    title: "Case Study: 65 Appointments in 60 days",
    content: (
      <>
        <p className="font-semibold text-lg">$182,000 Generated!</p>
        <p>We had the privilege of partnering with a reputable aftermarket rims and big tyres company. We implemented our Lead Converter Workflow to manage their Facebook Ad leads and also implemented an AI Re-Activation Campaign and the outcomes were incredible!</p>
        <h3 className="font-bold">Results after FutureFlow A.I.:</h3>
        <ul className="list-none space-y-2 mt-4">
          <li>✓ Additional $182,000 achieved in the 60 days!</li>
          <li>✓ Completely automated their Facebook Ad Lead Flow Process</li>
        </ul>
      </>
    ),
    modalContent: "Full case study details and implementation process...",
  },
  {
    logo: "/align.png",
    title: "Case Study: 30 Deals In First 2 Weeks!",
    content: (
      <>
        <p className="font-semibold text-lg">$3,000,000+  Generated!</p>
        <p>Get Exclusive Outbound Callers That Can Generate You Leads Like This!</p>
        <h3 className="font-bold">Results after FutureFlow A.I.:</h3>
        <ul className="list-none space-y-2 mt-4">
          <li>✓ +124% Increase in Deal Flow</li>
          <li>✓ $3,000,000+ worth of deals generated in 1 DAY!</li>
        </ul>
      </>
    ),
    modalContent: "Detailed breakdown of our outbound calling strategy...",
  },
  {
    logo: "/rockbox.png",
    title: "Case Study: 48% 'Opt-In No Book' Lead Conversion",
    content: (
      <>
       <p></p>
        <p>We partnered with one of RockBox's franchisees and implemented our Lead Converter Workflow to increase the number of appointments from 'No Book' leads on their Facebook Ads. We doubled their previous conversion rate due to the speed and persistence of our AI Assistants.
        </p>
        <h3 className="font-bold">Results after FutureFlow A.I.:</h3>
        <ul className="list-none space-y-2 mt-4">
          <li>✓ With an LTV of $900, we generated an additional $14,400</li>
          <li>✓ Generated an additional $9,000 in opportunities</li>
        </ul>
      </>
    ),
    modalContent: "Complete analysis of the lead conversion strategy...",
  },
]

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null)

  return (
    <section className="w-full py-3 md:py-24 bg-gradient-to-r from-[#003B20] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
             Case  <span className="text-[#00FF9D]">Studies</span>
          </h1>
         
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              logo={study.logo}
              title={study.title}
              content={study.content}
            //   onClick={() => setSelectedStudy(index)}
            />
          ))}
        </div>
      </div>
      {selectedStudy !== null && (
        <CaseStudyModal
          isOpen={selectedStudy !== null}
          onClose={() => setSelectedStudy(null)}
          study={{
            title: caseStudies[selectedStudy].title,
            logo: caseStudies[selectedStudy].logo,
            content: caseStudies[selectedStudy].modalContent,
          }}
        />
      )}
    </section>
  )
}

