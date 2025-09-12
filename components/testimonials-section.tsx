"use client"

import { WistiaPlayer } from "@wistia/wistia-player-react"

export function TestimonialsSection() {

  return (
    <section className="bg-emerald-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Testimonials</h2>
          <p className="text-xl md:text-2xl text-emerald-100 text-balance">Hear What Our Clients Have To Say</p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Rob - ProBot Solutions */}
          <div className="text-center">
            <div className="mb-4 rounded-lg overflow-hidden aspect-video">
              <WistiaPlayer mediaId="4cum3mn269" player-color="#00FF9D" className="w-full h-full" />
            </div>
            <h3 className="text-white text-lg font-medium">Rob - Probot Solutions</h3>
          </div>

          {/* Jye - LawLeads */}
          <div className="text-center">
            <div className="mb-4 rounded-lg overflow-hidden aspect-video">
              <WistiaPlayer mediaId="1wi7jpgtqg" player-color="#00FF9D" className="w-full h-full" />
            </div>
            <h3 className="text-white text-lg font-medium">Jye - LawLeads</h3>
          </div>

          {/* Andrew - Tailored Digital Solutions */}
          <div className="text-center">
            <div className="mb-4 rounded-lg overflow-hidden aspect-video">
              <WistiaPlayer mediaId="wkvqlwl8oe" player-color="#00FF9D" className="w-full h-full" />
            </div>
            <h3 className="text-white text-lg font-medium">Andrew - Tailored Digital Solutions</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
