'use client'

import { Check, Shield, ShieldCheck, X, XCircle } from "lucide-react";
import Image from "next/image";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="w-full relative bg-gradient-to-r from-[#003B20] to-black  px-2 md:px-4 py-16">
      <DotPattern
        className={cn(
          "absolute -top-24 opacity-40 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
      

        {/* Main Headline */}
        <h1 className="mb-10 md:mb-20 text-center text-3xl font-bold leading-tight text-white md:text-5xl lg:mx-auto lg:max-w-4xl">
        A.I. Agent   <span className="text-[#00FF9D]">Demo Calls</span> 
        <object data="'" type=""></object>
        </h1>

        {/* Image Cards with Play Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-8">
          <ImageCard src="/1.mp4"  />
          <ImageCard src="/2.mp4"  />
          <ImageCard src="/3.mp4"  />
        </div>
      </div>
  );
}

function ImageCard({ src }: { src: string; }) {
  

  return (
    <div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <video src={src}  loop controls={true} className="rounded-lg w-full h-full object-cover" />
    </div>
    
    </div>
   
  );
}
