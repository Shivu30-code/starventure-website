import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Wallet, Headphones, Users,X } from "lucide-react";
import Enquiry from "./Enquiry";



const About = () => {


  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
    const [openEnquiry, setOpenEnquiry] = useState(false);
  
    // ESC key close
    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === "Escape") {
          setOpenEnquiry(false);
        }
      };
  
      window.addEventListener("keydown", handleEsc);
  
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);

  return (
    <>
      <div className="w-full bg-[#f5f5f5] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="relative">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#af8861] rounded-xl"></div>


            <div className="relative bg-gradient-to-r from-[#4e3030] to-[#c79767] rounded-2xl p-10 overflow-hidden shadow-xl">

              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                WHO <br />
                <span className="italic font-light">we</span> ARE
              </h1>

              <div className="mt-6 border border-white/40 rounded-xl p-5 max-w-sm">
                <p className="text-white text-sm">
                  We provide the best travel services including flights, hotels,
                  visa assistance, and tour packages — with affordability and
                  100% customer satisfaction.
                </p>
              </div>
              <div className="absolute top-6 right-6 bg-white text-black px-4 py-1 rounded-full text-xs font-semibold">
                100% AFFORDABLE PACKAGE
              </div>
            </div>
          </div>

    
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              About Us
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Welcome to <span className="font-semibold">Star Venture Group of Companies</span>!
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              At Star Venture, we believe travel is not just about reaching a
              destination — it's about experiences, memories, and moments that
              stay with you forever. We provide complete travel solutions
              including flight bookings, hotel reservations, tourist visas,
              cruise bookings, and customized tour packages.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              <span className="font-semibold text-black">Our Mission:</span>{" "}
              To deliver seamless, affordable, and unforgettable travel
              experiences tailored to every customer's needs and comfort.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              <span className="font-semibold text-black">Who We Are:</span>{" "}
              Your trusted travel partner. With a dedicated team and customer-first
              approach, we ensure stress-free journeys from planning to execution.
            </p>

            <button 
              onClick={() => setOpenEnquiry(true)}
              className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer">
              Enquiry Now
            </button>
          </div>
        </div>

        <div className="mt-20 px-6">
          <h1 className="text-black text-center text-4xl font-semibold">
            Why would you choose us ?
          </h1>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto"
          >

            <motion.div 
              variants={cardVariant} 
              className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
              <Globe className="mx-auto text-blue-400 mb-4" size={40} />
              <h3 className="font-bold text-lg text-gray-500">
                All-in-One Services
              </h3>
              <p className="text-md text-gray-600 mt-2">
                  <b>Tourism, Transport, Employment & <span className="text-center">Immigration</span> </b> <br/>
                  everything under one roof.
              </p>
            </motion.div>

      
            <motion.div variants={cardVariant} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
              <Wallet className="mx-auto text-green-400 mb-4" size={40} />
              <h3 className="font-bold text-lg text-gray-500">
                Affordable Pricing
              </h3>
              <p className="text-md text-gray-600 mt-2">
                Premium services at competitive prices with no hidden costs.
              </p>
            </motion.div>

            <motion.div variants={cardVariant} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
              <Headphones className="mx-auto text-red-400 mb-4" size={40} />
              <h3 className="font-bold text-lg text-gray-500">
                Trusted Support
              </h3>
              <p className="text-md text-gray-600 mt-2">
                Dedicated team ensuring smooth and hassle-free experience.
              </p>
            </motion.div>

            <motion.div variants={cardVariant} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg hover:scale-105 transition text-center">
              <Users className="mx-auto text-purple-400 mb-4" size={40} />
              <h3 className="font-bold text-lg text-gray-500">
                Global Opportunities
              </h3>
              <p className="text-md text-gray-600 mt-2">
                Helping clients explore international travel, jobs, and migration.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
            {openEnquiry && (
        <div
          onClick={() => setOpenEnquiry(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-white/20 backdrop-blur-xl shadow-2xl animate-modalOpen mt-20"
          >

            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/20 bg-white/10 backdrop-blur-md rounded-t-3xl">

              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Enquiry Form
              </h2>

              <button
                onClick={() => setOpenEnquiry(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white text-2xl font-bold shadow-lg transition duration-300 cursor-pointer"
              >
                <X />
              </button>
            </div>

            <div className="p-2 md:p-4">
              <Enquiry />
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default About;