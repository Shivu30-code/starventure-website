import React, { useEffect, useRef, useState } from "react";
import { Popularpackages} from "../data/PackageData.js"
import { ChevronLeft, ChevronRight } from "lucide-react"



const PopularPackages = () => {
  const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)
    const sliderRef = useRef(null)
  
    useEffect(() => {
      const slider = sliderRef.current
  
      const handleScroll = () => {
        const scrollLeft = slider.scrollLeft
        const maxScroll = slider.scrollWidth - slider.clientWidth
  
        setShowLeft(scrollLeft > 10)
        setShowRight(scrollLeft < maxScroll - 10)
      }
  
      slider.addEventListener("scroll", handleScroll)
  
      return () => slider.removeEventListener("scroll", handleScroll)
    }, [])
  
    const scrollLeft = () => {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  
    const scrollRight = () => {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl text-black md:text-5xl font-bold mb-4">
            Popular Packages
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our most loved destinations with luxury
            experiences and affordable pricing.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-10">

          {Popularpackages.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              <div className="overflow-hidden relative">
                <img
                  src={item.image}
                  alt=""
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-5 left-5 text-white">
                  <h2 className="text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="text-sm mt-1">
                    ⭐ {item.rating}
                  </p>
                </div>
              </div>

              <div className="p-6">

                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </h3>

                  <span className="text-gray-500 text-sm">
                    {item.days}
                  </span>
                </div>

                <button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Explore Package
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="relative px-6 md:px-10">

          {showLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 
              bg-white text-black shadow-lg w-10 h-10 md:w-12 md:h-12 rounded-full 
              flex items-center justify-center z-10 hover:scale-110 transition"
            >
              <ChevronLeft size={22} />
            </button>
          )}


          {showRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 
              bg-white text-black shadow-lg w-10 h-10 md:w-12 md:h-12 rounded-full 
              flex items-center justify-center z-10 hover:scale-110 transition"
            >
              <ChevronRight size={22} />
            </button>
          )}


          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 md:px-6">
            
            {Popularpackages.map((item, index) => (
              <div
                key={index}
                className="
                min-w-[100px]
                sm:min-w-[180px]
                md:min-w-[180px]
                lg:min-w-[100px]
                bg-white
                group relative overflow-hidden
                shadow-xl rounded-b-[35px] rounded-t-[140px]
                transition-all duration-500 ease-in-out
                hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl
                flex-shrink-0">
                
                <div className="relative overflow-hidden rounded-t-[140px]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-[250px] w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t 
                    from-black/80 via-black/20 to-transparent">
                  </div>

                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <h2 className="text-3xl font-bold leading-tight">
                      {item.title}
                    </h2>

                    <p className="text-base mt-2">
                      ⭐ {item.rating}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-3xl font-bold text-blue-700">
                      {item.price}
                    </h3>

                    <span className="text-gray-500 text-base">
                      {item.days}
                    </span>
                  </div>

                  <button
                    className="w-full py-4 rounded-2xl 
                    bg-blue-700 text-white text-lg font-semibold 
                    hover:bg-blue-800 transition"
                  >
                    Explore Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPackages;