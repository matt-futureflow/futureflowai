"use client"

import { WistiaPlayer } from "@wistia/wistia-player-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {

  return (
    <section className="bg-white py-20 px-4 relative">
      {/* Purple gradient overlay */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Testimonials</h2>
          <p className="text-xl md:text-2xl text-gray-600 text-balance">Hear What Our Clients Have To Say</p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Rob - ProBot Solutions */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-4 rounded-2xl overflow-hidden aspect-video shadow-lg border border-purple-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WistiaPlayer mediaId="4cum3mn269" playerColor="#9333ea" className="w-full h-full" />
            </motion.div>
            <h3 className="text-gray-900 text-lg font-semibold">Rob - Probot Solutions</h3>
          </motion.div>

          {/* Jye - LawLeads */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-4 rounded-2xl overflow-hidden aspect-video shadow-lg border border-purple-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WistiaPlayer mediaId="1wi7jpgtqg" playerColor="#9333ea" className="w-full h-full" />
            </motion.div>
            <h3 className="text-gray-900 text-lg font-semibold">Jye - LawLeads</h3>
          </motion.div>

          {/* Andrew - Tailored Digital Solutions */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-4 rounded-2xl overflow-hidden aspect-video shadow-lg border border-purple-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <WistiaPlayer mediaId="wkvqlwl8oe" playerColor="#9333ea" className="w-full h-full" />
            </motion.div>
            <h3 className="text-gray-900 text-lg font-semibold">Andrew - Tailored Digital Solutions</h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
