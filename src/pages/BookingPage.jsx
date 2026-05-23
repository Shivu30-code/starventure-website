import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const packageData = location.state;

  const handleWhatsAppBooking = () => {
        const message = `
            Hello Star Venture 👋

            I want to book this package:

            Package: ${packageData?.title}
            Location: ${packageData?.location}
            Price: ${packageData?.price}
            Duration: ${packageData?.days}

            Please share more details.
        `;

        const url = `https://wa.me/917874041324?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-blue-400 flex items-center justify-center px-4">

            <button
                onClick={() => navigate("/explorePackages")}
                className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200
                hover:bg-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
            >
                <X size={22} />
            </button>

            <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl rounded-[30px] shadow-2xl overflow-hidden border border-white/30">

                <img
                    src={packageData?.image}
                    alt={packageData?.title}
                    className="w-full h-[250px] md:h-[320px] object-cover"
                />

                <div className="p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {packageData?.title}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        {packageData?.location}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6">

                        <div className="bg-blue-50 p-4 rounded-2xl">
                            <p className="text-gray-500 text-sm">Price</p>
                            <h2 className="text-xl font-bold text-blue-600">
                                {packageData?.price}
                            </h2>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-2xl">
                            <p className="text-gray-500 text-sm">Duration</p>
                            <h2 className="text-xl font-bold text-yellow-600">
                                {packageData?.days}
                            </h2>
                        </div>
                    </div>

                    <button
                        onClick={handleWhatsAppBooking}
                        className="w-full mt-8 bg-green-600 text-white py-4 rounded-2xl font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Confirm Booking on WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;