import React from "react";
import { ShieldCheck, CreditCard, FileText, Plane, Phone, Mail,X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const policies = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Service Policy",
    desc: "Star Venture Group provides tourism, transport, visa assistance, work permit guidance, and travel-related consultation. All services depend on availability, document verification, and third-party approval.",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Booking & Payment",
    desc: "A booking is confirmed only after advance payment. The remaining amount must be paid before the travel date or service start date. Prices may change due to availability, taxes, or currency rates.",
  },
  {
    icon: <FileText size={24} />,
    title: "Documents Responsibility",
    desc: "Customers must provide correct and valid documents such as passport, ID proof, photos, visa documents, and other required details. Star Venture is not responsible for delay or rejection due to incorrect documents.",
  },
  {
    icon: <Plane size={24} />,
    title: "Travel & Visa Disclaimer",
    desc: "Visa approval, embassy decisions, flight changes, hotel availability, and immigration rules are controlled by third parties. Star Venture only provides assistance and does not guarantee visa approval.",
  },
  {
    icon: <CreditCard size={24} />,
    title: "Price Changes",
    desc: "Package prices, transport fares, visa charges, and service fees may change without prior notice due to market conditions, seasonal demand, government rules, or currency fluctuation.",
  },
];

const TermsConditions = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#050505] text-white">
        <button
            onClick={() => navigate("/")}
            className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200
            hover:bg-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
            <X size={22} />
        </button>
      
        <section className="relative px-6 py-24 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-black to-blue-900/40"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-4">
                    Star Venture Groups
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Please read our service, booking, payment, cancellation, and document policies carefully before using our services.
                </p>

                <p className="text-gray-500 mt-6 text-sm">
                    Last Updated: 22 May 2026
                </p>
            </div>
        </section>

        <section className="px-6 pb-20 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-5">
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                {policies.map((item, index) => (
                    <div
                        key={index}
                        className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:text-black transition">
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-gradient-to-br from-yellow-500/20 to-white/5 border border-yellow-400/20 rounded-3xl p-7">
                    <h2 className="text-2xl font-bold mb-4">
                        Need Help?
                    </h2>

                    <p className="text-gray-300 text-sm mb-6">
                        For booking, refund, visa, transport, or work permit related queries, contact Star Venture support.
                    </p>

                    <div className="space-y-4 text-sm">
                        <a
                            href="tel:+917874041324"
                            className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-yellow-400 hover:text-black transition"
                        >
                            <Phone size={18} />
                            +91 78740 41324
                        </a>

                        <a
                            href="mailto:admin@starventuregroups.com"
                            className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-yellow-400 hover:text-black transition"
                        >
                            <Mail size={18} />
                            admin@starventuregroups.com
                        </a>

                        <a
                            href="https://wa.me/917874041324"
                            target="_blank"
                            rel="noreferrer"
                            className="block text-center bg-yellow-400 text-black font-bold rounded-xl p-4 hover:bg-yellow-300 transition"
                        >
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-6 pb-20 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Agreement
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    By booking any tour package, transport service, visa assistance, work permit guidance, or any other service with Star Venture Group, you agree to follow these Terms & Conditions.
                </p>
            </div>
        </section>
    </div>
  );
};

export default TermsConditions;