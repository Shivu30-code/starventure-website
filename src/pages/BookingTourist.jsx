import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const BookingTourist = () => {
  const handleWhatsAppBooking = () => {
        const phoneNumber = "917874041324";
        const message ="Hello Star Venture, I want to book a vehicle for transport service. Kindly share the details.";
    
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
            window.open(whatsappURL, "_blank");
    };
    return (
      // <div className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900">
      <div className="min-h-screen bg-gradient-to-br from-[#78a6d3] via-[#8ea6c5] to-[#c9b568] px-6 py-16 text-gray-900">
          <div className="text-center mb-12">
              <span className="text-yellow-600 text-5xl font-semibold tracking-[5px] uppercase font-serif">
                  Star Venture Booking
              </span>
              <h1 className="text-4xl md:text-4xl font-bold mt-4 font-serif">
                  Book Your Transport Service
              </h1>
              <p className="max-w-3xl mx-auto mt-5 text-gray-300 text-lg leading-8 font-semibold   font-serif">
                  Request your vehicle booking for family trips, airport transfers,
                  corporate travel and private transport services.
              </p>
          </div>
  
          {/* <div className="max-w-4xl mx-auto bg-white rounded-[30px] shadow-xl border border-gray-200 p-8 text-center mb-14"> */}
          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-2xl rounded-[30px] shadow-2xl border border-white/20 p-8 text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                  Book Directly on Call / WhatsApp
              </h2>
  
              <p className="text-gray-600 mt-3 font-serif">
                  Connect with our booking team for quick confirmation and best price.
              </p>
  
              <div className="flex justify-center gap-5 mt-7 flex-wrap">
                  <a
                      href="tel:+917874041324"
                      className="flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full
                      hover:bg-yellow-500 hover:text-black transition">
                      <Phone size={20} />
                      Call Now
                  </a>
  
                  <a
                      onClick={handleWhatsAppBooking}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-500 text-white px-7 py-3 
                      rounded-full hover:bg-green-600 transition">
                      <MessageCircle size={20} />
                      WhatsApp
                  </a>
              </div>
          </div>
  
          <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-serif">
              Requesting Free Quote
              </h2>
  
              <p className="text-gray-600 mt-3 font-serif">
              Fill your travel details and our team will contact you shortly.
              </p>
          </div>
  
          {/* <div className="max-w-5xl mx-auto bg-white rounded-[35px] shadow-xl border border-gray-200 p-6 md:p-10"> */}
          <div className="max-w-5xl mx-auto bg-white/20 backdrop-blur-2xl rounded-[35px] shadow-2xl border border-white/20 p-6 md:p-10">
              <form className="grid md:grid-cols-2 gap-6">
  
                  <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                  />
  
                  <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                  />
  
                  <input
                      type="tel"
                      placeholder="Phone Number*"
                      className="w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"   
                  />
  
                  <select className="w-full border-2 border-black/50 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500">
                      <option>How many seater vehicle required?</option>
                      <option>4 Seater Car</option>
                      <option>6-7 Seater Ertiga / Innova</option>
                      <option>10 Seater Van</option>
                      <option>12 Seater Van</option>
                      <option>15 Seater Van</option>
                      <option>18 Seater Van</option>
                      <option>25-35 Seater Staff Bus</option>
                      <option>40-45 Seater Luxury Bus</option>
                  </select>
  
                  <select className="w-full border-2 border-black/50 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500">
                      <option>Trip Type</option>
                      <option>Family Trip</option>
                      <option>Friend Trip</option>
                      <option>One Way Transfer</option>
                      <option>Two Way Transfer</option>
                      <option>Airport Arrival</option>
                      <option>Airport Departure</option>
                      <option>Corporate Travel</option>
                      <option>Outstation Trip</option>
                  </select>

                  <input
                      type="date"
                      className="w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                  />
  
                  <input
                      type="text"
                      placeholder="Pickup Location"
                      className="w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                  />
  
                  <input
                      type="text"
                      placeholder="Drop Location"
                      className="w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                  />
  
                  <textarea
                      placeholder="Booking Details / Special Requirement"
                      rows="5"
                      className="md:col-span-2 w-full border-2 border-black/50 bg-white/10 backdrop-blur-md text-black placeholder:text-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500">
                  </textarea>
  
                  <button
                      type="submit"
                      className="md:col-span-2 bg-black text-white py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-700 transition-all duration-300"
                  >
                      Submit Free Quote Request
                  </button>
  
              </form>
          </div>
  
      </div>
    );
};
  

export default BookingTourist