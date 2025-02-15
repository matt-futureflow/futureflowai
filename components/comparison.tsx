"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XCircle, CheckCircle } from "lucide-react"
import { CardDemo } from "./ui/ai"

const ComparisonToggle = () => {
  const [isAIEnabled, setIsAIEnabled] = useState(false)

  const traditionalPoints = [
    "Lead Contact Delay. Slower the contact, the smaller the conversion rate.",
    "Clients can answer the phone OR make the calls. You suffer because of it.",
    "SDR or Appointment Setter Costs are high and unpredictable.",
    "Paying commissions per booked call strains budgets.",
  ]

  const futureFlowPoints = [
    "Calls ALL Leads In Under 5 Minutes Of Completing A Form.",
    "Instant Expert Knowledge.",
    "0 Hiring, Training, or Managing Needed.",
    "Never Misses A Lead or Forgets To Call.",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#003B20] to-black   text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Lead Nurturing  <span className="text-[#00FF9D]">Comparison</span></h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <span className={`text-xl sm:text-2xl ${!isAIEnabled ? "font-bold text-white" : "text-gray-400"}`}>
            Traditional
          </span>
          <button
            onClick={() => setIsAIEnabled(!isAIEnabled)}
            className="w-20 h-10 bg-gray-700 rounded-full p-1 duration-300 ease-in-out"
          >
            <motion.div
              className="w-8 h-8 bg-white rounded-full shadow-md"
              animate={{
                x: isAIEnabled ? "100%" : "0%",
              }}
            />
          </button>
          <span className={`text-xl sm:text-2xl ${isAIEnabled ? "font-bold text-white" : "text-gray-400"}`}>
            AI Growth System
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={isAIEnabled ? "ai" : "traditional"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6 text-center">
                {isAIEnabled ? "AI Growth System" : "Traditional"}
              </h2>
              {(isAIEnabled ? futureFlowPoints : traditionalPoints).map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 bg-gray-800 bg-opacity-50 p-4 rounded-lg"
                >
                  {isAIEnabled ? (
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  )}
                  <p className="text-lg">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div>
            <CardDemo/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisonToggle

