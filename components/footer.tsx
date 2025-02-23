import Image from "next/image";

export default function Footer() {
    return (
      <footer className="w-full bg-gradient-to-r  px-4 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center">
             <Image src="/logo.png" width={200} height={200} alt="" />
          </div>
          <p className="text-lg font-semibold text-gray-300">
            Copyright © {new Date().getFullYear()} FutureFlowAI. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  
  