import React, { useState } from "react";
import { X, Armchair, Luggage, ChevronLeft, ChevronRight,MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import bus from "../assets/lux_bus.webp";
import BookingService from "./BookingService";

const Transport = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === vehicles.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? vehicles.length - 1 : prev - 1
    );
  };

const vehicles = [
  {
    title: "Luxury Bus",
    img: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/blue-bus?qlt=82&wid=1024&ts=1660212095501&dpr=off&fit=constrain",
    seats: "45 Seats",
    luggage: "2 Bags / Person",
    details:
      "Our luxury buses are designed for long-distance group travel with 2x2 pushback seats, full AC comfort, clean interiors, music system, large luggage storage and professional drivers. Best for tours, corporate trips, school trips and family group travel.",
  },
  {
    title: "Executive Cars",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    seats: "4 Seats",
    luggage: "2 Bags",
    details:
      "Executive cars are perfect for airport transfers, business meetings, city rides and private travel. Vehicles are clean, comfortable and chauffeur-driven with smooth pickup and drop service.",
  },
    {
    title: "Logistic Transport",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    seats: "Driver + Helper",
    luggage: "Heavy Cargo",
    details:
      "Logistic transport is suitable for goods movement, commercial delivery, parcel shifting and business transport needs. We provide reliable cargo vehicles with safe handling and timely delivery support.",
  },
  {
    title: "Traveler Vans",
    img: "https://images.pexels.com/photos/36377071/pexels-photo-36377071.jpeg",
    seats: "12-17 Seats",
    luggage: "10-15 Bags",
    details:
      "Traveler vans are ideal for family tours, small groups, staff transport and tourist travel. Spacious seating, AC comfort and enough luggage space make it a practical option for short and long journeys.",
  },
  {
    title: "India Tour Bus",
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
    seats: "40-45 Seats",
    luggage: "2 Bags / Person",
    details:
      "India tour buses are perfect for domestic tours, group travel, school trips and family holidays. Comfortable pushback seats, AC facility, music system and spacious luggage storage make long journeys smooth and enjoyable.",
  },
  {
    title: "Ertiga Car",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljyeRGpf4pM3EBmVuDTJmLKZOHbSrQx6HUg&s",
    seats: "6-7 Seats",
    luggage: "3-4 Bags",
    details:
      "Ertiga is a comfortable and budget-friendly option for family trips, airport transfers, city rides and outstation travel. It offers good seating space, smooth ride comfort and enough luggage capacity for small groups.",
  },
  {
    title: "Staff Bus",
    img: "https://cms.eichertrucksandbuses.com//uploads/truck/sub-category/Skyline-Pro-Next-Staff.png",
    seats: "25-35 Seats",
    luggage: "Staff Bags",
    details:
      "Staff buses are suitable for company employee transport, daily pickup and drop, industrial staff movement and corporate travel. They provide safe, timely and comfortable transport for regular staff commuting.",
  },

];  

  const navigate = useNavigate();

  const services = [
    {
      name:"Bus",
      path:"/transportBus",
    },
    {
      name:"Cars",
      path:"/transportCar"
    },
    {
      name:"Vans",
      path:"/transportVan",
    },
    {
      name:"Logistic",
      path:"/transportLogistic",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 gradient">
      <button
        onClick={() => navigate("/")}
        className="fixed top-3 right-6 z-50 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>

      <div className="pt-8 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl border border-gray-200 px-6 py-4 flex items-center justify-between ">

          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Star Venture"
              className="w-12 h-12 object-contain"
            />

            <div>
              <h2 className="font-bold text-2xl leading-none font-serif">
                Star Venture
              </h2>

              <p className="text-sm text-gray-500 font-serif">
                Transport Services
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">

            <div className="flex flex-wrap justify-end gap-3">
              {services.map((item, index) => (
                <button
                  onClick={()=>navigate(item.path)}
                  key={index}
                  className="px-6 py-2.5 rounded-full bg-black text-white font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500
                   hover:to-blue-700 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
      <div className="text-center mt-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-serif">
          Premium Transport Services
        </h1>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8 text-lg font-serif">
          Experience safe, reliable and luxury transportation solutions with
          Star Venture. From premium tourist coaches and executive cars to
          spacious vans and professional logistics support, we deliver comfort,
          punctuality and exceptional service for every journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 mt-14">

        <div>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium font-serif">
            Luxury • Comfort • Safety
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-6 leading-tight font-serif">
            Travel Beyond Destinations With Comfort & Class
          </h2>

          <p className="text-gray-600 leading-8 mt-6 text-lg font-serif">
            At Star Venture, we redefine transportation with premium travel
            experiences tailored for tourism, corporate travel, family trips and
            logistics operations. Our modern fleet, professional drivers and
            commitment to quality ensure every ride is smooth, secure and
            memorable.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <button 
              onClick={()=>navigate("/exploreServices")}
              className="bg-black text-white px-7 py-3 rounded-full hover:bg-gray-200 hover:text-black transition">
              Explore Services
            </button>

            {/* <button 

              className="border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition">
              Contact Us
            </button> */}
            <button
              // onClick={handleWhatsAppBooking}
              onClick={() => setShowBookingModal(true)}
              className="group flex items-center gap-2 border border-white/20 bg-white backdrop-blur-md 
              px-7 py-3 rounded-xl hover:bg-black hover:text-white hover:scale-105 transition duration-300 
              shadow-lg cursor-pointer">
              <MessageCircle
                size={18}
                className="group-hover:rotate-12 transition duration-300"
              />
              <span className="font-medium">
                Instant Booking
              </span>
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={bus}
            alt="Luxury Bus"
            className="w-full h-[450px] object-cover rounded-[30px]"
          />
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-24 pb-20">
        <div className="text-center mb-14">
          <span className="text-yellow-600 text-5xl font-semibold tracking-widest uppercase font-serif">
            Our Fleet
          </span>

          <h2 className="text-2xl md:text-5xl font-bold mt-3 font-serif">
            Explore Our Premium Vehicles
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4 font-serif leading-8 text-lg ">
            Choose the right vehicle for your journey with comfort, luggage space and
            professional travel support.
          </p>
        </div>

        <div className="relative">
        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronLeft />
          </button>
        )}
        {currentSlide < vehicles.length - 3 && (
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronRight />
          </button>
        )}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
                >
                  <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                    <div className="overflow-hidden">
                      <img
                        src={vehicle.img}
                        alt={vehicle.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold font-serif">
                        {vehicle.title}
                      </h3>

                      <div className="mt-5 space-y-3">

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Armchair
                              size={20}
                              className="text-yellow-600"
                            />
                          </div>

                          <span className="font-medium">
                            {vehicle.seats}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Luggage
                              size={20}
                              className="text-blue-600"
                            />
                          </div>

                          <span className="font-medium">
                            {vehicle.luggage}
                          </span>
                        </div>

                      </div>

                      <button
                        onClick={() => setSelectedVehicle(vehicle)}
                        className="mt-6 w-full px-5 py-3 rounded-full bg-black text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-700 transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedVehicle && (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white max-w-2xl w-full rounded-[30px] overflow-hidden shadow-2xl relative">
            
            <button
              onClick={() => setSelectedVehicle(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-md hover:bg-red-500 hover:text-white flex items-center justify-center transition"
            >
              <X size={22} />
            </button>

            <img
              src={selectedVehicle.img}
              alt={selectedVehicle.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-7">
              <h2 className="text-3xl font-bold">
                {selectedVehicle.title}
              </h2>

              <div className="flex flex-wrap gap-4 mt-5">
                <div className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-full">
                  <Armchair size={22} className="text-yellow-600" />
                  <span className="font-semibold">{selectedVehicle.seats}</span>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-full">
                  <Luggage size={22} className="text-yellow-600" />
                  <span className="font-semibold">{selectedVehicle.luggage}</span>
                </div>
              </div>

              <p className="text-gray-600 font-serif leading-8 mt-6 text-lg">
                {selectedVehicle.details}
              </p>

              {/* <button className="mt-7 bg-black text-white px-7 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition">
                Book This Vehicle
              </button> */}
            </div>
          </div>
        </div>
      )}
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

            <BookingService />

          </div>

        </div>
      )}
    </div>
  );
};

export default Transport;