import React from "react";
import { useNavigate } from "react-router-dom";
import {  X } from "lucide-react";


const ExploreService = () => {
    const navigate = useNavigate();

  const services = [
    {
      title: "Luxury Bus",
      img:
        "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain",
      desc:
        "Premium buses designed for group tours, long-distance journeys and luxury travel experiences.",
      path:"/transportBus",  
    },

    {
      title: "India Tour Bus",
      img:
        "https://shelketravels.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-12.52.38-AM-1024x682.jpeg",
      desc:
        "Comfortable Indian tour buses perfect for tourism, family trips and school travel.",
        path:"/transportBus",  
    },

    {
      title: "Executive Car",
      img:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      desc:
        "Luxury executive cars with premium interiors and comfortable city rides.",
      path:"/transportCar",  
    },

    {
      title: "Luxury Sedan",
      img:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
      desc:
        "Premium sedan transport services for airport pickup and VIP travel.",
        path:"/transportCar", 
    },

    {
      title: "Traveler Van",
      img:
        "https://images.pexels.com/photos/36377071/pexels-photo-36377071.jpeg",
      desc:
        "Comfortable vans suitable for family tours and tourist group travel.",
      path:"/transportVan",
    },

    {
      title: "Mini Van",
      img:
        "https://www.luxuryarttransport.com/_next/image?url=https%3A%2F%2Fwww.luxuryarttransport.com%2Fbackend%2Fpublic%2Fuploads%2Ftours%2F1_6756b8805ec24.png&w=828&q=80",
      desc:
        "Luxury mini vans with spacious seating and smooth travel experience.",
      path:"/transportVan",
    },

    {
      title: "Heavy Trailer",
      img:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
      desc:
        "Reliable heavy trailer services for cargo and industrial transport.",
        path:"/transportLogistic", 
    },

    {
      title: "Trailer Hywa",
      img:
        "https://truckcdn.cardekho.com/in/tata/lpk-2518-hd/tata-lpk-2518-hd.jpg",
      desc:
        "Professional logistic transport support for commercial delivery services.",
        path:"/transportLogistic", 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 gradient">
        <button
            onClick={() => navigate("/transport")}
            className="fixed top-4 right-5 z-50 w-8 h-8 text-black rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-500 hover:text-white flex items-center justify-center transition-all duration-300"
        >
            <X size={22} />
        </button>

      <div className="text-center mb-16">

        <span className="text-yellow-600 text-5xl font-semibold tracking-[5px] uppercase font-serif">
          Star Venture Services
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-4 font-serif text-gray-900">
          Explore Our Premium Services
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-serif">
          Discover Luxury Buses, Executive Cars, Traveler Vans and Heavy
          Logistics services designed for comfort, safety and premium transport
          experiences.
        </p>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {services.map((service, index) => (
          <div
            onClick={(e) => {
                e.stopPropagation();
                navigate(service.path);
            }}
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold font-serif text-gray-900">
                {service.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-8 font-serif">
                {service.desc}
              </p>

              <button className="mt-7 w-full py-3 rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                Explore More
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ExploreService;