"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

interface CaseStudyCardProps {
  logo: string
  title: string
  content: React.ReactNode
//   onClick: () => void
}

export function CaseStudyCard({ logo, title, content }: CaseStudyCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="relative overflow-hidden cursor-pointer h-full" >
        <CardContent className="p-6 space-y-4">
          <div className="w-32 h-32 mx-auto mb-4">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`${title} logo`}
              width={128}
              height={128}
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="text-xl font-bold text-center">{title}</h3>
          <div className="text-sm text-neutral-800 space-y-2">{content}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

