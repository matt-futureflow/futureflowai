
import Image from "next/image";

export default function Header() {

  
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  backdrop-blur-md
        `}
    >
      <div className="max-w-7xl mx-auto px-4  flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="h-24 w-24"
          />
        </div>
        <button className="bg-[#00FF9D] text-black px-4 py-2 rounded-lg">
          Book a Call
        </button>
      </div>
    </header>
  );
}