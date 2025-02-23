import Image from "next/image";

export default function Footer() {
    return (
      <footer className="w-full bg-gradient-to-r  px-4 py-6">
          <p className="text-lg text-center font-semibold text-gray-300">
            Copyright © {new Date().getFullYear()} FutureFlowAI. All rights reserved.
          </p>
        
      </footer>
    )
  }
  
  