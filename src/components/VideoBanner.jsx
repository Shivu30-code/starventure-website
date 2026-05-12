import React from "react";

const VideoBanner = () => {
  return (
    <div className="py-24 px-6 bg-gray-100">

      <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden relative group shadow-2xl">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        >
          <source src="/travel.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Discover The Beauty Of The World
          </h1>

          <p className="text-gray-200 max-w-2xl mb-8 text-lg">
            Explore unforgettable destinations and luxury travel
            experiences crafted specially for you.
          </p>

          <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition duration-300">
            <span className="text-white text-3xl ml-1">▶</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;