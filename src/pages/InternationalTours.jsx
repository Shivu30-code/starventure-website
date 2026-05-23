import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const internationalTours = [
  {
    title: "Dubai",
    label: "Luxury Skyline",
    media:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Maldives",
    label: "Honeymoon Paradise",
    media:
      "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg",
  },
  {
    title: "Bali",
    label: "Island Escape",
    media:
      "https://images.pexels.com/photos/25328674/pexels-photo-25328674.jpeg",
  },
  {
    title: "Switzerland",
    label: "Snowy Mountains",
    media:
      "https://images.pexels.com/photos/29933663/pexels-photo-29933663.jpeg",
  },
  {
    title: "Thailand",
    label: "Beach & Nightlife",
    media:
      "https://images.pexels.com/photos/28581882/pexels-photo-28581882.jpeg",
  },
  {
    title: "Singapore",
    label: "City Lights",
    media:
      "https://images.pexels.com/photos/35163747/pexels-photo-35163747.jpeg",
  },
];

const InternationalTours = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black px-6 py-14 gradient">

      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-3 right-6 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Explore International Tours
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Discover the world's most beautiful destinations with luxury experiences.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {internationalTours.map((tour, index) => (
          <div
            key={index}
            className="relative h-[500px] overflow-hidden rounded-[40px] group cursor-pointer"
          >
            <img
              src={tour.media}
              alt={tour.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-8 left-6 z-10">
              <p className="uppercase tracking-[3px] text-sm text-gray-300 font-medium font-serif">
                {tour.label}
              </p>

              <h2 className="text-white text-5xl font-bold mt-2 font-serif">
                {tour.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default InternationalTours;