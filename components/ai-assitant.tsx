'use client'

import { Check, Shield, ShieldCheck, X, XCircle } from "lucide-react";
import Image from "next/image";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="w-full relative px-4 py-16">
      <DotPattern
        className={cn(
          "absolute -top-24 opacity-40 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-4 w-fit rounded-full bg-green-100 px-8 py-2">
          <p className="text-center text-lg font-medium text-green-600">
            Voice Garden
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="mb-20 text-center text-2xl font-bold leading-tight text-white md:text-4xl lg:mx-auto lg:max-w-4xl">
          Leverage AI voice call agents who sound and act like real people.
        </h1>

        {/* Image Cards with Play Button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImageCard src="/a1.png" audioSrc="/a1.mp3" text="Real Estate Agent" />
          <ImageCard src="/a1.png" audioSrc="/a1.mp3" text="Real Estate Agent" />
          <ImageCard src="/a1.png" audioSrc="/a1.mp3" text="Real Estate Agent" />
          
        </div>
      </div>
    </div>
  );
}

function ImageCard({ src, audioSrc,text }: { src: string; audioSrc: string, text: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <img src={src} alt="Image" className="w-full h-full object-cover" />
     
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <button
          onClick={handlePlayPause}
          className="bg-white p-4 rounded-full shadow-lg"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 text-black" />
          ) : (
            <Play className="h-8 w-8 text-black" />
          )}
        </button>
      </div>
      <audio ref={audioRef} src={audioSrc} />
     
    </div>
    <h2 className="text-center text-2xl my-2  text-white">{text}</h2>
    </div>
   
  );
}
