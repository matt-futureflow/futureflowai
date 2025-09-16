"use client"

import type React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface CaseStudyCardProps {
  logo: string
  title: string
  amount?: string
  content: React.ReactNode
  results: string[]
}

export function CaseStudyCard({ logo, title, amount, content, results }: CaseStudyCardProps) {
  return (
    <div >
      <Card className="bg-white h-full flex flex-col">
        <CardContent className="p-8 flex-1 space-y-6">
          <div className="h-24 relative mb-6">
            <Image src={logo || "/placeholder.svg"} alt={`${title} logo`} fill className="object-contain" />
          </div>
          <div className="space-y-4">
            <h3 className="text-grey-900 text-2xl  h-[6rem] font-bold text-center">{title}</h3>
            {amount && <p className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent text-2xl font-bold text-center">{amount}</p>}
            <div className="text-base text-gray-700">{content}</div>
          </div>
        </CardContent>
        <CardFooter className="p-8 bg-10">
          <div className="space-y-4 w-full">
            <h4 className="font-bold text-xl text-gray-900">Results after FutureFlow A.I :</h4>
            <ul className="space-y-3">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

