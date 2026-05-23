import { useState } from "react";
import { categories, packages } from "../data/PackageData.js";
import { Search, MapPin, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExplorePackages = () => {
  const [activeCategory, setActiveCategory] = useState("All Packages");
  const [searchTerm, setSearchTerm] = useState("");
  const [tourType, setTourType] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const filteredPackages = packages.filter((item) => {
    const matchesCategory =
      activeCategory === "All Packages" ||
      item.tag === activeCategory ||
      item.type === activeCategory;

    const matchesType = tourType === "All" || item.type === tourType;

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesType && matchesSearch;
  });

  const visiblePackages = filteredPackages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategoryClick = (item) => {
    setActiveCategory(item);
    setTourType("All");
    setVisibleCount(6);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] gradient">
      <button
        onClick={() => navigate("/")}
        className="fixed top-4 right-5 z-50 w-8 h-8 rounded-full text-black bg-white shadow-lg border border-gray-200
        hover:bg-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>
      <div className="p-4 md:p-10">

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative w-full lg:w-[350px] flex-shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

            <input
              type="text"
              placeholder="Search destination..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(6);
              }}
              className="w-full py-3 md:py-4 pl-12 md:pl-14 pr-10 rounded-full border border-gray-200 bg-white text-gray-800 text-sm md:text-base font-medium shadow-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />

            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setVisibleCount(6);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex gap-3 overflow-x-auto no-scrollbar lg:flex-1">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(item)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === item
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 md:mb-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3">
            Explore Packages
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Discover amazing places with our handpicked travel packages.
          </p>
        </div>

        {activeCategory !== "All Packages" &&
          activeCategory !== "Domestic" &&
          activeCategory !== "International" && (
            <div className="flex gap-3 mb-6 md:mb-8 overflow-x-auto no-scrollbar">
              <button
                onClick={() => {
                  setTourType("Domestic");
                  setVisibleCount(6);
                }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 ${
                  tourType === "Domestic"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-blue-50"
                }`}
              >
                Domestic Tours
              </button>

              <button
                onClick={() => {
                  setTourType("International");
                  setVisibleCount(6);
                }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 ${
                  tourType === "International"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-blue-50"
                }`}
              >
                International Tours
              </button>
            </div>
          )}

        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
          {visiblePackages.length > 0 ? (
            visiblePackages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[150px] md:h-64 w-full object-cover"
                  />

                  <div className="absolute top-2 left-2 md:top-4 md:left-4">
                    <span className="bg-blue-600 text-white text-[10px] md:text-sm px-2 md:px-4 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <button className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/80 backdrop-blur-md w-7 h-7 md:w-10 md:h-10 rounded-full text-sm md:text-xl">
                    ♡
                  </button>
                </div>

                <div className="p-3 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h2 className="text-sm md:text-2xl font-bold text-gray-800 mb-1 font-serif line-clamp-1">
                        {item.title}
                      </h2>

                      <p className="flex items-center gap-1 text-gray-500 text-xs md:text-sm font-serif line-clamp-1">
                        <MapPin size={14} />
                        {item.location}
                      </p>
                    </div>

                    <span className="text-xs md:text-sm text-gray-400">
                      {item.days}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-3 md:mt-5 gap-2">
                    <h3 className="text-base md:text-3xl font-bold text-blue-600">
                      {item.price}
                    </h3>

                    <button 
                      onClick={() => {
                        navigate("/booking", { state: item });
                        setTimeout(() => {
                          window.scrollTo(0, 0);
                        }, 0);
                      }}
                      className="bg-blue-600 text-white px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-base rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">
                No Packages Found 😔
              </h2>
              <p className="text-gray-500">Try searching another destination.</p>
            </div>
          )}
        </div>

        {visibleCount < filteredPackages.length && (
          <div className="flex justify-center mt-10 md:mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Load More Packages
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ExplorePackages;