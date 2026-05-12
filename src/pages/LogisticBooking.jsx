import React from "react";
import { Phone, MessageCircle, Truck } from "lucide-react";

const LogisticBooking = () => {
    const handleWhatsAppBooking = () => {
        const phoneNumber = "917874041324";
        const message ="Hello Star Venture, I want to book a vehicle for transport service. Kindly share the details.";

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappURL, "_blank");
    };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#dbeafe] to-[#fde68a] px-6 py-16 text-gray-900">
      <div className="text-center mb-12">
        {/* <Truck className="mx-auto text-yellow-600" size={45} /> */}
        <span className="text-yellow-600 text-5xl font-semibold tracking-[5px] uppercase font-serif">
            Star Venture Booking
        </span>

        <h1 className="text-4xl md:text-4xl font-bold mt-4 font-serif">
          Logistic Transport Booking
        </h1>

        <p className="max-w-3xl mx-auto mt-5 text-gray-600 text-lg leading-8 font-serif">
          Book trailers, containers, dumpers, Hywa, Eicher delivery trucks and
          heavy cargo transport for business, industrial and daily parcel needs.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-xl rounded-[30px] shadow-2xl border border-white/40 p-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-serif">
          Book Directly on Call / WhatsApp
        </h2>

        <p className="text-gray-600 mt-3 font-serif">
          Connect with our logistics team for quick rate and vehicle availability.
        </p>

        <div className="flex justify-center gap-5 mt-7 flex-wrap">
          <a
            href="tel:+917874041324"
            className="flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            onClick={handleWhatsAppBooking}
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-7 py-3 rounded-full hover:bg-green-600 transition"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
        </div>
      </div>

        <div className="max-w-5xl mx-auto bg-white/50 backdrop-blur-xl rounded-[35px] shadow-2xl border border-white/40 p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-serif mb-8">
                Request Logistic Quote
            </h2>

            <form className="grid md:grid-cols-2 gap-6">
                <input
                    type="text"
                    placeholder="Full Name / Company Name*"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <select className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500">
                    <option>Select Logistic Vehicle</option>
                    <option>Trailer Truck</option>
                    <option>Trailer Tipper</option>
                    <option>Trailer Hywa</option>
                    <option>Container Trailer</option>
                    <option>Dubai Cargo Truck</option>
                    <option>Dumper</option>
                    <option>Dumper With Coal Mine</option>
                    <option>Eicher Daily Delivery</option>
                </select>

                <input
                    type="text"
                    placeholder="Material / Goods Type*"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                    type="text"
                    placeholder="Approx Load Weight"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                    type="text"
                    placeholder="Pickup Location*"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                    type="text"
                    placeholder="Drop Location*"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <input
                    type="date"
                    className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
                />

                <select className="w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500">
                    <option>Delivery Priority</option>
                    <option>Normal Delivery</option>
                    <option>Urgent Delivery</option>
                    <option>Same Day Delivery</option>
                    <option>Long Route Delivery</option>
                </select>

                <textarea
                    rows="5"
                    placeholder="Additional Details / Special Requirement"
                    className="md:col-span-2 w-full border border-gray-300 bg-white/70 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 resize-none"
                ></textarea>

                <button
                    type="submit"
                    className="md:col-span-2 bg-black text-white py-4 rounded-full font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-blue-700 transition-all duration-300"
                >
                    Submit Logistic Quote Request
                </button>
            </form>
        </div>
    </div>
  );
};

export default LogisticBooking;