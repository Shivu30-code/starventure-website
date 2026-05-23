import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RefundCancellation = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 bg-gradient-to-br from-yellow-500/18 via-black to-blue-900/25">
        <button
            onClick={() => navigate("/")}
            className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200
            hover:bg-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
        >
            <X size={22} />
        </button>
        <div className="max-w-5xl mx-auto ">
            <p className="text-yellow-400 uppercase tracking-[4px] text-2xl mb-3 text-center">
                Star Venture Tourism
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Refund & Cancellation Policy
            </h1>

            <p className="text-gray-400 mb-10 text-center">
                Please read our refund and cancellation policy carefully before booking
                any travel service with Star Venture.
            </p>

            <div className="space-y-8 text-gray-300 leading-relaxed">

                <section>
                    <h2 className="text-2xl font-bold text-white mb-3">General</h2>
                    <p>
                        The cancellation policy is effective for all vacations crafted by
                        Star Venture. Customers eligible for refunds will receive the refund
                        amount within 90 working days from the date of cancellation or when
                        the supplier processes the refund, whichever is later.
                    </p>
                    <p className="mt-3">
                        For refunds related to on-trip cancellations, customers will receive
                        the refund amount within 90 working days from the date of their
                        return or when the supplier processes the refund, whichever is later.
                    </p>
                    <p className="mt-3">
                        The refund amount is subject to change based on international
                        exchange rates, refunds received from suppliers, and payments received
                        from customers to date.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-3">Flights</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Non-refundable flights will be eligible for zero refund.</li>
                        <li>Refundable flights will be refunded as per airline policy and final itinerary.</li>
                        <li>Star Venture is not responsible for grounded, cancelled, or delayed flights.</li>
                        <li>Flight refund realization depends on the respective airline carrier.</li>
                        <li>Customers must ensure passport validity and good condition.</li>
                        <li>Star Venture is not liable if boarding is denied due to invalid passport.</li>
                        <li>Customers must reach the airport at least 2 hours before boarding.</li>
                        <li>Extra baggage charges must be paid by the customer.</li>
                        <li>Web check-in rules must be followed where required by airlines.</li>
                        <li>Meal preferences depend on airline availability and quality.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-3">Hotels</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Non-refundable hotels will be eligible for zero refund.</li>
                        <li>Refundable hotels will follow the cancellation terms mentioned in the itinerary.</li>
                        <li>Refunds may vary due to exchange rates.</li>
                        <li>Star Venture is not responsible for hotel staff behaviour, cleanliness, or accommodation quality.</li>
                        <li>Room upgrades and additional amenities must be paid by the customer.</li>
                        <li>Hotel changes during the trip may attract 100% cancellation charges.</li>
                        <li>Early check-in or late check-out depends on hotel discretion.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-3">Activities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Non-refundable activities will be eligible for zero refund.</li>
                        <li>Refundable activities will follow the policy mentioned in the itinerary.</li>
                        <li>Activity refunds may vary due to exchange rates and supplier processing.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Visa & Insurance
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Star Venture acts as a facilitator for visa applications.</li>
                        <li>Visa approval or rejection depends only on the concerned embassy.</li>
                        <li>Star Venture is not responsible for visa rejection.</li>
                        <li>Visa fees are non-refundable in case of rejection.</li>
                        <li>Insurance once applied is non-refundable and may attract 100% cancellation charges.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-3">Transfers</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Transfer refunds will follow the cancellation policy mentioned in the final itinerary.</li>
                        <li>Transfer refunds may vary based on exchange rates and supplier processing.</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
  );
};

export default RefundCancellation;