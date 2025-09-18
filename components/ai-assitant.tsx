"use client"

import { WistiaPlayer } from "@wistia/wistia-player-react"
import { motion } from "framer-motion"

export default function AiAssistant() {
  return (
    <div className="w-full relative bg-white px-2 md:px-4 py-5">
      {/* Purple gradient overlay */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-bl from-purple-400/15 to-purple-600/5 rounded-full blur-3xl"></div>

      {/* Main Headline */}
      <motion.h1 
        className="text-center text-3xl font-bold leading-tight text-gray-900 md:text-5xl lg:mx-auto lg:max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        How Good Do  <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Our Agents Sound?</span> 
      </motion.h1>
      <motion.p 
        className="mt-2 text-center text-3xl leading-tight text-gray-900 md:text-4xl lg:mx-auto lg:max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Listen For Yourself.
      </motion.p>
      <motion.p 
        className="mb-10 mt-2 text-center text-3xl leading-tight text-gray-900 md:text-4xl lg:mx-auto lg:max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Real Conversations With Real People.
      </motion.p>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-2xl overflow-hidden aspect-video shadow-xl border border-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WistiaPlayer mediaId="nvuawlxlak" playerColor="#9333ea" className="w-full h-full" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-2xl overflow-hidden aspect-video shadow-xl border border-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WistiaPlayer mediaId="wqkm76ha5b" playerColor="#9333ea" className="w-full h-full" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-2xl overflow-hidden aspect-video shadow-xl border border-purple-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <WistiaPlayer mediaId="2mvg6x628i" playerColor="#9333ea" className="w-full h-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


