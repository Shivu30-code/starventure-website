import React from "react";
import { useNavigate } from "react-router-dom";
import { X} from "lucide-react";


const domesticTours = [
  {
    title: "Kashmir",
    label: "Paradise on Earth",
    media:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Goa",
    label: "Beach Vibes",
    media:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Manali",
    label: "Snow Adventure",
    media:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Kerala",
    label: "Backwater Escape",
    media:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Rajasthan",
    label: "Royal Heritage",
    media:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Andaman",
    label: "Island Paradise",
    media:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
];

const DomesticTours = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black px-6 py-14 gradient">
      <button
        onClick={() => navigate("/")}
        className="fixed top-3 right-6 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Explore Domestic Tours
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Discover India's most beautiful destinations with luxury experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {domesticTours.map((tour) => (
          <div
            // key={tour.id}
            className="relative h-[500px] overflow-hidden rounded-[40px] group cursor-pointer"
            
          >
            <img
              src={tour.media}
              alt={tour.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

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

export default DomesticTours;