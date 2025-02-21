"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { CardDemo } from "@/components/ui/ai";

const ComparisonToggle = () => {
  const [isAIEnabled, setIsAIEnabled] = useState(false);

  const traditionalPoints = [
    "Slow Follow-Up: Leads go cold, sales vanish.",
    "Human Errors: Missed calls and poor follow-ups.",
    "High Costs: Staff, commissions, and inefficiency.",
    "Lost Leads: Opportunities slip through the cracks.",
  ];

  const futureFlowPoints = [
    "Save $36,000+ Per Year: Eliminate the need for costly SDRs, training, and management.",
    "Scale Without Limits: Handle 10x more leads without additional overhead or resources.",
    "24/7 Lead Engagement: Never miss a lead—even outside business hours",
    "Convert Leads 3x Faster: Leads contacted within 2 minutes - GUARANTEED",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#003B20] to-black text-white pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Lead Nurturing <span className="text-[#00FF9D]">Comparison</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <span
            className={`text-xl sm:text-2xl ${
              !isAIEnabled ? "font-bold text-white" : "text-gray-400"
            }`}
          >
            Traditional System
          </span>
          <motion.button
            onClick={() => setIsAIEnabled(!isAIEnabled)}
            className={`w-20 h-10 rounded-full p-1 duration-300 ease-in-out ${
              isAIEnabled ? "bg-green-500" : "bg-gray-700"
            }`}
          >
            <motion.div
              className="w-8 h-8 bg-white rounded-full shadow-md"
              animate={{
                x: isAIEnabled ? "100%" : "0%",
              }}
            />
          </motion.button>
          <span
            className={`text-xl sm:text-2xl ${
              isAIEnabled ? "font-bold text-white" : "text-gray-400"
            }`}
          >
            AI Growth System
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                {isAIEnabled ? "AI Growth System" : "Traditional System"}
              </h2>
              {(isAIEnabled ? futureFlowPoints : traditionalPoints).map(
                (point, index) => {
                  const [boldText, normalText] = point.split(": ");
                  return (
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
                      <p className="text-lg">
                        <span className="font-extrabold text-[#00FF9D] ">{boldText}:</span>{" "}
                        {normalText}
                      </p>
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center">
            <CardDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonToggle;
