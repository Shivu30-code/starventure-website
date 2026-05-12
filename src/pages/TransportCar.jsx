import React, { useState } from "react";
import { Users, Luggage,X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingService from "./BookingService";
import BookingTourist from "./BookingTourist";


const TransportCar = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const navigate = useNavigate();

  const cars = [
    {
      title: "Maruti Ertiga",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga-Tour/9617/1762858404297/front-left-side-47.jpg",
      seats: "6-7 Seats",
      luggage: "3-4 Bags",
      desc: "Comfortable family car perfect for city rides, airport transfers and outstation journeys.",
    },

    {
      title: "Innova Crysta",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9608/1755846139274/front-left-side-47.jpg",
      seats: "7 Seats",
      luggage: "4-5 Bags",
      desc: "Premium MPV with spacious seating and smooth comfort for family and corporate travel.",
    },

    {
      title: "Dubai Luxury Sedan",
      img: "https://sehgaltransport.com/wp-content/uploads/2024/11/2010-207753-2011-nissan-elgrand-e52-04-08-20101-1024x576.jpg",
      seats: "6 Seats",
      luggage: "2 Bags",
      desc: "Luxury international sedan with premium interiors, leather seats and VIP comfort.",
    },

    {
      title: "European Executive Car",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
      seats: "4 Seats",
      luggage: "2-3 Bags",
      desc: "Elegant executive car designed for luxury tourism and premium business transportation.",
    },

    {
      title: "USA Luxury SUV",
      img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
      seats: "4 Seats",
      luggage: "3 Bags",
      desc: "Powerful luxury SUV with spacious interiors and high-end comfort for long journeys.",
    },

    {
      title: "Safari Jungle Explorer",
      img: "https://www.team-bhp.com/sites/default/files/pictures2023-09/4_77.jpeg",
      seats: "8 Seats",
      luggage: "Adventure Bags",
      desc: "Perfect safari vehicle for jungle tours, wildlife adventures and off-road experiences.",
    },

    {
      title: "Safari Adventure Ride",
      img: "https://www.forcemotors.com/wp-content/uploads/2025/05/jungle-safari-Banner.jpg",
      seats: "5 Seats",
      luggage: "Camping Gear",
      desc: "Strong and comfortable safari ride built for adventure travel and nature exploration.",
    },

    {
      title: "Premium City Sedan",
      img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      seats: "4 Seats",
      luggage: "2 Bags",
      desc: "Stylish premium sedan ideal for luxury city rides, private trips and VIP transport.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16 gradient">
        <button
            onClick={() => navigate("/transport")}
            className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-400 
            hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
            <X size={22} />
        </button>

      <div className="text-center mb-16">

        <span className="text-yellow-600 text-5xl font-semibold tracking-[5px] uppercase font-serif">
          Star Venture Fleet
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-4 font-serif">
          Luxury Car Transport Services
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-serif">
          Discover our premium collection of luxury cars, family vehicles,
          safari rides and international transport solutions designed for
          comfort, safety and unforgettable travel experiences.
        </p>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="overflow-hidden">
              <img
                src={car.img}
                alt={car.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold font-serif">
                {car.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-7 font-serif">
                {car.desc}
              </p>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Users
                      size={20}
                      className="text-yellow-600"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Seating Capacity
                    </p>

                    <h3 className="font-semibold">
                      {car.seats}
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
                      {car.luggage}
                    </h3>
                  </div>
                </div>

              </div>

              <button 
                onClick={()=>setShowBookingModal(true)}
                className="mt-7 w-full py-3 rounded-full bg-black text-white hover:bg-gradient-to-r
                hover:from-yellow-400 hover:to-blue-700 transition-all duration-300 cursor-pointer">
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

            <BookingTourist />

          </div>

        </div>
      )}
    </div>
  );
};

export default TransportCar;