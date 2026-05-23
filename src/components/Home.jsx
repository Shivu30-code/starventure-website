import React, { useEffect, useRef, useState } from "react";
import videoBg from "../assets/home.mp4";
import { MessageCircle, Plane,MapPinHouse } from "lucide-react";
import { useNavigate } from "react-router-dom";


const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    setTimeout(() => setIsVisible(true), 200);

    return () => clearInterval(timer);
  }, [end, duration]);

  return { count, isVisible };
};
const Home = () => {
  const navigate = useNavigate();
  const travelersData = useCounter(2000);
  const destinationsData = useCounter(50);

  const handleWhatsAppBooking = () => {
    const phoneNumber = "917874041324";

    const message =
      "Hello Star Venture, I want to book a tour package.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };



  return (
    <>
      <div className="h-screen flex items-center justify-center relative overflow-hidden">

        {/* <img
          src={home}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        /> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="relative z-10 text-center max-w-4xl px-6 text-white">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
            <Plane size={16} />
            <span className="text-sm tracking-wide">
              Trusted by 2500+ Travelers
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore the World with<br/>
            <span className="text-blue-400"> Star Venture</span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg md:text-xl leading-relaxed">
            Flights • Hotels • Visa • Tour Packages —
            Your Complete Travel Partner
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <button 
              onClick={()=>navigate("/explorePackages")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 rounded-xl 
              font-medium shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
              Explore Packages
            </button>

            <button
              onClick={handleWhatsAppBooking}
              className="group flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md 
              px-7 py-3 rounded-xl hover:bg-white hover:text-black hover:scale-105 transition duration-300 
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

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div
              className={`bg-white/10 backdrop-blur-md border border-white/20 
              rounded-2xl px-6 py-5 transition-all duration-700
              ${travelersData.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              hover:-translate-y-1 hover:scale-[1.04]
              hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]`}
            >
              <h3 className="text-3xl font-extrabold 
                bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 
                bg-clip-text text-transparent
                animate-[pulse_1.5s_ease-in-out]">
                
                {travelersData.count >= 1000
                  ? `${Math.floor(travelersData.count / 1000)}K+`
                  : travelersData.count}
              </h3>

              <p className="text-gray-300 text-sm mt-1">
                Happy Travelers
              </p>
            </div>

            <div
              className={`bg-white/10 backdrop-blur-md border border-white/20 
              rounded-2xl px-6 py-5 transition-all duration-700
              ${destinationsData.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              hover:-translate-y-1 hover:scale-[1.04]
              hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]`}
            >
              <h3 className="text-3xl font-extrabold 
                bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 
                bg-clip-text text-transparent
                animate-[pulse_1.5s_ease-in-out]">
                
                {destinationsData.count}+
              </h3>

              <p className="text-gray-300 text-sm mt-1">
                Destinations
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Home;