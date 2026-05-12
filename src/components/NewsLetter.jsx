import React from "react";

const Newsletter = () => {
  return (
    <div className="py-24 px-6 bg-gradient-to-r from-blue-600 to-cyan-500">

      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get Exclusive Travel Deals ✈️
        </h1>

        <p className="text-white/90 text-lg mb-10">
          Subscribe to receive special offers, travel updates,
          and premium holiday packages directly in your inbox.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:flex-1 px-6 py-4 rounded-2xl outline-none text-gray-700 shadow-lg"
          />

          <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;