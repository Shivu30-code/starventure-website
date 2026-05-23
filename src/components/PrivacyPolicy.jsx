import React from "react";
import {X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#030303] text-white px-6 py-20 bg-gradient-to-br from-yellow-500/18 via-black to-blue-900/30">
        <button
            onClick={() => navigate("/")}
            className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200
            hover:bg-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
            <X size={22} />
        </button>   
      <div className="max-w-5xl mx-auto">

        <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-3 text-center">
          Star Venture Groups
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-10 leading-relaxed text-center">
          At Star Venture Tourism, we value your trust and are committed to protecting your personal information. 
          This Privacy Policy outlines how we collect, use, store, and safeguard your data when you interact with our services.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              1. Information We Collect
            </h2>

            <p>
              We collect personal and travel-related information when you interact with our website, request services, or make bookings.
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Personal details (Name, Phone Number, Email Address)</li>
              <li>Travel preferences and booking details</li>
              <li>Passport and identification details (for visa assistance)</li>
              <li>Payment-related information (processed securely via third parties)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              2. How We Use Your Information
            </h2>

            <p>
              Your information is used to deliver a seamless and personalized experience across our services.
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>To process bookings and travel arrangements</li>
              <li>To provide visa, transport, and employment assistance</li>
              <li>To communicate confirmations, updates, and support</li>
              <li>To improve our services and customer experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              3. Information Sharing & Disclosure
            </h2>

            <p>
              To successfully deliver our services, your information may be shared with trusted partners and third-party providers.
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Airlines, hotels, and transport providers</li>
              <li>Visa processing agencies and embassies</li>
              <li>Payment gateways and financial institutions</li>
            </ul>

            <p className="mt-3">
              We strictly do not sell, rent, or misuse your personal data for unauthorized purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              4. Data Protection & Security
            </h2>

            <p>
              We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
            </p>

            <p className="mt-3">
              While we strive to protect your information, no system is completely secure. We encourage users to share sensitive data only through official channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              5. Cookies & Website Tracking
            </h2>

            <p>
              Our website uses cookies and tracking technologies to enhance user experience, analyze website performance, and improve service quality.
            </p>

            <p className="mt-3">
              You may choose to disable cookies through your browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              6. Your Rights & Choices
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your information</li>
              <li>Opt out of promotional communication</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              7. Data Retention
            </h2>

            <p>
              We retain your information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              8. Policy Updates
            </h2>

            <p>
              Star Venture reserves the right to update this Privacy Policy at any time. Updates will be reflected on this page with a revised date.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;