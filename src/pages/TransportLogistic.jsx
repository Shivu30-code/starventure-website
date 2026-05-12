import React, { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingService from "./BookingService";
import LogisticBooking from "./LogisticBooking";


const TransportLogistic = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const navigate = useNavigate();

  const logistics = [
    {
      title: "Heavy Trailer Truck",
      img: "https://cheematrailers.com/wp-content/uploads/2026/04/40-Long-3A-Flat-Bed-Trailer-8.jpg",
      desc: "Powerful heavy-duty trailer truck designed for long-distance cargo transportation and industrial logistics support.",
    },

    {
      title: "Trailer Tipper",
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
      desc: "Reliable trailer tipper suitable for construction material transport, mining operations and heavy industrial use.",
    },

    {
      title: "Trailer Hywa",
      img: "https://cms.eichertrucksandbuses.com/uploads/truck/exterior/85bbd929178b4a141bff72f58a1a02b5.jpg",
      desc: "Heavy hywa truck built for stone, sand and raw material transportation with high loading capacity.",
    },

    {
      title: "Container Trailer",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
      desc: "Modern container trailer service for safe cargo movement, commercial delivery and business logistics solutions.",
    },

    {
      title: "Dubai Cargo Truck",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjV4-3b4cuM-RSsUcTzdxc6vnb6LuY9hKSw&s",
      desc: "Premium Dubai-style cargo truck designed for international transport and luxury commercial logistics services.",
    },

    {
      title: "Industrial Dumper",
      img: "https://truckcdn.cardekho.com/in/tata/lpk-2518-hd/tata-lpk-2518-hd.jpg",
      desc: "Strong dumper truck suitable for construction sites, heavy loading operations and industrial transportation.",
    },

    {
      title: "Coal Mine Dumper",
      img: "https://www.sany.in/wp-content/uploads/2024/01/Mining-1.webp",
      desc: "Heavy coal mine dumper specially designed for mining areas, raw material movement and large-scale industrial work.",
    },
    {
        title: "Eicher  Delivery",
        img: "https://cms.eichertrucksandbuses.com/uploads/truck/img/2119-1.png",
        desc: "Reliable Eicher delivery vehicle designed for daily parcel transport, commercial goods movement and fast city-to-city logistics services with safe and timely delivery support.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 gradient">

      <button
        onClick={() => navigate("/transport")}
        className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-500 
        hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>

      <div className="text-center mb-16">

        <span className="text-yellow-600 text-5xl font-semibold tracking-[5px] uppercase font-serif">
          Star Venture Logistic
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-4 font-serif">
          Heavy Logistic & Transport Services
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-serif">
          Explore our premium collection of trailers, dumpers, container
          trucks and industrial transport vehicles designed for reliable cargo
          movement, mining operations and heavy logistics services.
        </p>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {logistics.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold font-serif">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-5 leading-8 font-serif">
                {item.desc}
              </p>

              <button 
                onClick={()=>setShowBookingModal(true)}
                className="mt-7 w-full py-3 rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-yellow-400 
                hover:to-blue-700 transition-all duration-300 cursor-pointer">
                Book Services
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

            <LogisticBooking/>

          </div>

        </div>
      )}

    </div>
  );
};

export default TransportLogistic;