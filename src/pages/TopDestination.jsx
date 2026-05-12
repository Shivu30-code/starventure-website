import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { defaultData,international,domestic } from '../data/PackageData'
import { useNavigate } from 'react-router-dom'


const TopDestination = () => {

  const [type, setType] = useState("")
  const toggleRef = useRef(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const sliderRef = useRef(null)
  const navigate = useNavigate();

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

  // Outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setType("")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  let data = defaultData
  if (type === "international") data = international
  if (type === "domestic") data = domestic

  return (
    <div className='min-h-screen bg-[#f5f5f5] text-black gredient'>

      <div className='flex justify-between items-center px-10 py-10'>
        <h1 className='text-4xl font-bold'>Top Destination</h1>

        <div ref={toggleRef} className='flex gap-4 bg-white p-2 rounded-full shadow'>
          <button
            onClick={() => setType("international")}
            className={`px-4 py-1 rounded-full ${
              type === "international" ? "bg-black text-white" : ""
            }`}>
            International
          </button>

          <button
            onClick={() => setType("domestic")}
            className={`px-4 py-1 rounded-full ${
              type === "domestic" ? "bg-black text-white" : ""
            }`} >
            Domestic
          </button>
        </div>
      </div>

      {/* Stylish Cards */}
    <div className="relative px-10">

      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full 
          flex items-center justify-center z-10 hover:scale-110 transition"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full 
          flex items-center justify-center z-10 hover:scale-110 transition"
        >
          <ChevronRight size={22} />
        </button>
        
      )}

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto  scroll-smooth no-scrollbar pl-30 pr-30"
      >
        {data.map((item, index) => (

          <div
            key={index}
            onClick={()=>{
              navigate("/explorePackages")
              window.scrollTo(0, 0);
            }}
            
            className="min-w-[25%] max-w-[20%] group relative overflow-hidden shadow-xl rounded-b-[40px] rounded-t-[150px] 
            transform transition-all duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
            before:absolute before:inset-0 before:rounded-b-[40px] before:rounded-t-[150px]
            before:bg-white/20 before:opacity-0 group-hover:before:opacity-100 before:transition 
            animate-[fadeIn_0.6s_ease_forwards]">

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[400px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />  

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t  from-black/70 via-black/20 to-transparent
              opacity-80 group-hover:opacity-10 transition duration-500">
            </div>

            <div 
              className="absolute bottom-5 left-5 text-white translate-y-6 opacity-0 
              group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              
              <div className="flex flex-col gap-1">
                {type && (
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold text-lg">
                    {type === "international"
                      ? "International Tour"
                      : "Domestic Tour"}
                  </span>
                )}

                <p className="text-xs tracking-widest uppercase opacity-80 font-serif">
                  {item.label || "Top Destination"}
                </p>

              </div>
              <h1 className="text-2xl font-bold font-serif">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TopDestination