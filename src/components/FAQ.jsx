import React, { useState } from "react";
import {
  ChevronDown,
  Plane,
  CreditCard,
  FileText,
  Car,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    category: "Booking",
    icon: <Plane size={20} />,
    question: "How can I book a tour package?",
    answer:
      "You can book your tour package through our website, WhatsApp, phone call, or by visiting our office. Our team will guide you with package details, pricing, availability, and payment process.",
  },
  {
    category: "Booking",
    icon: <ShieldCheck size={20} />,
    question: "Can I customize my travel package?",
    answer:
      "Yes, Star Venture Tourism offers customized domestic and international tour packages based on your destination, budget, travel dates, hotel preference, transport needs, and activities.",
  },
  {
    category: "Payment",
    icon: <CreditCard size={20} />,
    question: "How much advance payment is required?",
    answer:
      "An advance payment is required to confirm your booking. The remaining amount must be paid before the travel date or as per the final package confirmation shared by our team.",
  },
  {
    category: "Payment",
    icon: <CreditCard size={20} />,
    question: "Which payment methods do you accept?",
    answer:
      "We accept UPI, bank transfer, and other available online payment methods. Payment details will be shared only through official Star Venture communication channels.",
  },
  {
    category: "Visa",
    icon: <FileText size={20} />,
    question: "Do you guarantee visa approval?",
    answer:
      "No. Visa approval depends only on the concerned embassy or immigration authority. Star Venture provides documentation support and guidance, but final approval is not guaranteed.",
  },
  {
    category: "Visa",
    icon: <FileText size={20} />,
    question: "What documents are required for visa assistance?",
    answer:
      "Required documents may include passport, passport-size photos, bank statements, travel history, employment details, invitation letter, and other documents depending on the destination country.",
  },
  {
    category: "Transport",
    icon: <Car size={20} />,
    question: "Do you provide transport services?",
    answer:
      "Yes, we provide bus, car, van, and logistic transport services for personal, group, corporate, airport transfer, and travel package requirements.",
  },
  {
    category: "Policy",
    icon: <ShieldCheck size={20} />,
    question: "Where can I check refund and cancellation details?",
    answer:
      "Refund and cancellation details are available on our dedicated Cancellation Policy page. The applicable policy depends on the selected service, supplier, airline, hotel, or package terms.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden">
      
      <section className="relative px-6 pt-24 pb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/15 via-transparent to-blue-700/15"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[5px] text-xs mb-4">
            Help Center
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Find quick answers about Star Venture Tourism bookings, payments,
            visa assistance, transport services, and travel policies.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-5">
              <MessageCircle size={26} />
            </div>

            <h2 className="text-2xl font-bold mb-3">Still need help?</h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Our support team is available to help you with tour packages,
              visa assistance, transport booking, and custom travel plans.
            </p>

            <a
              href="https://wa.me/917874041324"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-yellow-400 text-black font-bold rounded-xl py-3 hover:bg-yellow-300 transition"
            >
              Chat on WhatsApp
            </a>

            <a
              href="mailto:admin@starventuregroups.com"
              className="block text-center mt-3 border border-white/20 rounded-xl py-3 text-gray-300 hover:text-white hover:border-yellow-400 transition"
            >
              Email Support
            </a>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-yellow-400/40 transition"
            >
                <button
                    onClick={() => setOpen(open === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                    <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-yellow-400 flex items-center justify-center">
                        {faq.icon}
                    </div>

                    <div>
                        <p className="text-xs text-yellow-400 uppercase tracking-widest mb-1">
                        {faq.category}
                        </p>
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                    </div>
                    </div>

                    <ChevronDown
                    size={22}
                    className={`transition ${
                        open === index ? "rotate-180 text-yellow-400" : ""
                    }`}
                    />
                </button>

                {open === index && (
                    <div className="px-6 pb-6 ml-15 text-gray-400 leading-relaxed">
                    {faq.answer}
                    </div>
                )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;