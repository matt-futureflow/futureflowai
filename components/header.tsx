
import Image from "next/image";

export default function Header() {

  
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-purple-800 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}