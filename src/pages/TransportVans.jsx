import React, { useState } from "react";
import { Users, Luggage, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import BookingService from "./BookingService";
import BookingTourist from "./BookingTourist";


const TransportVans = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const navigate = useNavigate();

  const vans = [
    {
      title: " Luxury Van",
      img: "https://www.luxuryarttransport.com/_next/image?url=https%3A%2F%2Fwww.luxuryarttransport.com%2Fbackend%2Fpublic%2Fuploads%2Ftours%2FSprinter-van-rental-dubai-luxury-art_678e1f4db2170.png&w=828&q=80",
      seats: "18 Seats",
      luggage: "15 Bags",
      desc: "Premium large van suitable for tourist groups, family trips and corporate transport with spacious seating and AC comfort.",
    },
    {
      title: "Family Deluxe Van",
      img: "https://www.luxuryarttransport.com/_next/image?url=https%3A%2F%2Fwww.luxuryarttransport.com%2Fbackend%2Fpublic%2Fuploads%2Fbuses%2F15-seater-van.png&w=828&q=80",
      seats: "15 Seats",
      luggage: "10 Bags",
      desc: "Luxury deluxe van designed for smooth group travel with comfortable interiors and premium ride quality.",
    },
    {
      title: "VIP Traveler",
      img: "https://images.pexels.com/photos/36377071/pexels-photo-36377071.jpeg",
      seats: "15 Seats",
      luggage: "12 Bags",
      desc: "Comfortable traveler van perfect for long journeys, airport pickup and family vacations.",
    },
    {
      title: "Tourist Van",
      img: "https://www.luxuryarttransport.com/_next/image?url=https%3A%2F%2Fwww.luxuryarttransport.com%2Fbackend%2Fpublic%2Fuploads%2Ftours%2F1_6756b8805ec24.png&w=828&q=80",
      seats: "14 Seats",
      luggage: "10-12 Bags",
      desc: "Ideal for tourist travel, small group tours and comfortable outstation journeys.",
    },

    {
      title: "Family Van",
      img: "https://i.ytimg.com/vi/799j4I-SSGw/hqdefault.jpg",
      seats: "12 Seats",
      luggage: "8 Bags",
      desc: "Comfortable family van with spacious seating and smooth ride experience for short and long trips.",
    },

    {
      title: "Family Premium Van",
      img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Force/Urbania/11849/1763466348855/front-left-side-47.jpg",
      seats: "12 Seats",
      luggage: "8-10 Bags",
      desc: "Premium AC van suitable for business transport, airport transfers and holiday travel.",
    },

    {
      title: "Mini Van",
      img: "https://buscdn.cardekho.com/in/force/traveller-3350-super/force-traveller-3350-super.jpg?impolicy=resize&imwidth=480",
      seats: "10 Seats",
      luggage: "6 Bags",
      desc: "Compact and stylish mini van perfect for city rides, family use and small group travel.",
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
          Star Venture Fleet
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-4 font-serif">
          Premium Van Transport Services
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-serif">
          Explore our luxury van collection designed for comfortable family
          tours, airport transfers, corporate travel and group transportation
          with premium seating and luggage space.
        </p>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {vans.map((van, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
          >

            <div className="overflow-hidden">
              <img
                src={van.img}
                alt={van.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold font-serif">
                {van.title}
              </h2>

              <p className="text-gray-600 mt-4 leading-7 font-serif">
                {van.desc}
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
                      {van.seats}
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
                      {van.luggage}
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

export default TransportVans;