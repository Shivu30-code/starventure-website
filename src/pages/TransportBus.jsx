import React, { useState } from "react";
import { Armchair, Luggage,X } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import BookingService from "./BookingService";
import BookingTourist from "./BookingTourist";


const TransportBus = () => {
    const navigate = useNavigate();
    const [showBookingModal, setShowBookingModal] = useState(false);
  const buses = [
    {
      title: "Luxury Staff Bus",
      img: "https://cms.eichertrucksandbuses.com//uploads/truck/sub-category/Skyline-Pro-Next-Staff.png",
      seats: "35 Seats",
      luggage: "Staff Bags",
      desc: "Comfortable AC staff bus for company employee transport and corporate travel.",
    },

    {
      title: "Premium Staff Coach",
      img: "https://shelketravels.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-12.52.38-AM-1024x682.jpeg",
      seats: "42 Seats",
      luggage: "Medium Storage",
      desc: "Reliable daily pickup and drop transport with spacious seating and safe travel.",
    },

    {
      title: "India Tour Bus",
      img:"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80" ,
      seats: "45 Seats",
      luggage: "2 Bags / Person",
      desc: "Perfect for domestic tourism, family tours and long-distance travel across India.",
    },

    {
      title: "Sleeper Coach Bus",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
      seats: "30 Sleeper Berths",
      luggage: "Large Storage",
      desc: "Luxury sleeper coach with pushback beds, AC comfort and premium interiors.",
    },

    {
      title: "Tourist Deluxe Bus",
      img: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?auto=format&fit=crop&w=900&q=80",
      seats: "40 Seats",
      luggage: "Tour Luggage",
      desc: "Ideal for tourist groups, school trips and holiday travel with comfortable seating.",
    },

    {
      title: "Luxury Coach",
      img: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain",
      seats: "28 Luxury Seats",
      luggage: "Premium Storage",
      desc: "High-end international luxury coach with leather seats, entertainment and WiFi.",
    },

    {
      title: "European VIP Bus",
      img: "https://sehgaltransport.com/wp-content/uploads/2024/11/Mercedes-Benz-2441-SHD-Coach-1.jpeg",
      seats: "24 VIP Seats",
      luggage: "Large Premium Storage",
      desc: "Premium abroad travel bus designed for luxury tourism and VIP transport services.",
    },

    {
      title: "Mini Bus",
      img: "https://www.onlinebusbookingindia.com/uploads/81468_Bus%20Rental%20Service.jpg",
      seats: "18 Seats",
      luggage: "Small Bags",
      desc: "Compact mini bus suitable for local city travel, small groups and short trips.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 gradient">
        <button
            onClick={() => navigate("/transport")}
            className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200
            hover:bg-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
            <X size={22} />
        </button>

      <div className="text-center mb-16">
        <span className="text-yellow-600 text-5xl font-semibold tracking-[5px] uppercase font-serif">
          Star Venture Fleet
        </span>

        <h1 className="text-xl md:text-5xl font-bold mt-4 font-serif">
          Premium Bus Transport Services
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-serif">
          Explore our collection of luxury buses, staff coaches, Indian tourist
          buses and international premium transport solutions designed for
          comfort, safety and unforgettable travel experiences.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {buses.map((bus, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="overflow-hidden">
              <img
                src={bus.img}
                alt={bus.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold font-serif">
                {bus.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-7 font-serif">
                {bus.desc}
              </p>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Armchair
                      size={20}
                      className="text-yellow-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Seating Capacity
                    </p>

                    <h3 className="font-semibold">
                      {bus.seats}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center">
                    <Luggage
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Luggage Capacity
                    </p>

                    <h3 className="font-semibold">
                      {bus.luggage}
                    </h3>
                  </div>
                </div>

              </div>

              <button 
                onClick={()=>setShowBookingModal(true)}
                className="mt-7 w-full py-3 rounded-full bg-black text-white hover:bg-gradient-to-r
                hover:from-yellow-400 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                Book services
              </button>

            </div>
          </div>
        ))}
      </div>
      {showBookingModal && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">

          <div className="relative bg-white max-w-6xl w-full rounded-[35px] overflow-y-auto max-h-[95vh]">

            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-5 right-5 z-50 w-8 h-8 rounded-full bg-white shadow-lg hover:bg-gray-500
              hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X size={22} />
            </button>

            <BookingTourist />

          </div>

        </div>
      )}
    </div>
  );
};

export default TransportBus;