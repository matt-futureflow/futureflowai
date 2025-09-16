
export default function AiAssistant() {
  return (
    <div className="w-full relative bg-white px-2 md:px-4 py-5">
      {/* Purple gradient overlay */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-bl from-purple-400/15 to-purple-600/5 rounded-full blur-3xl"></div>

      {/* Main Headline */}
      <h1 className=" text-center text-3xl font-bold leading-tight text-gray-900 md:text-5xl lg:mx-auto lg:max-w-4xl relative z-10">
        How Good Do  <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">Our Agents Sound?</span> 
      </h1>
      <p className=" mt-2 text-center text-3xl  leading-tight text-gray-900 md:text-4xl lg:mx-auto lg:max-w-4xl relative z-10">
        Listen For Yourself.
      </p>
      <p className="mb-10 mt-2 text-center text-3xl  leading-tight text-gray-900 md:text-4xl lg:mx-auto lg:max-w-4xl relative z-10">
        Real Conversations With Real People.
      </p>

      {/* Image Cards with Play Button */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8 relative z-10">
        <ImageCard src="/1.mp4" />
        <ImageCard src="/2.mp4" />
        <ImageCard src="/3.mp4" />
      </div>
    </div>
  );
}

function ImageCard({ src }: { src: string }) {
  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-purple-200">
        <video
          src={src}
          loop
          controls={true}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
