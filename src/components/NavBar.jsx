import React, { useState, useRef, useEffect } from "react";
import star from "../assets/logo.png";
import { Search, Menu, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showTourism, setShowTourism] = useState(false);
  const [showDomestic, setShowDomestic] = useState(false);
  const [showInternational, setShowInternational] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Mobile accordion
  const [mobileTourism, setMobileTourism] = useState(false);
  const [mobileDomestic, setMobileDomestic] = useState(false);
  const [mobileInternational, setMobileInternational] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tourismRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tourismRef.current && !tourismRef.current.contains(e.target)) {
        setShowTourism(false);
        setShowDomestic(false);
        setShowInternational(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowDomestic(false);
      setShowInternational(false);
    }

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const suggestions = [
    "Dubai Tour Packages",
    "Russia Work Permit",
    "Thailand Honeymoon",
    "Goa Weekend Trip",
    "Tempo Traveller Booking",
    "Visa Assistance",
    "Armenia Jobs",
  ];

  const quickSearches = [
    "Dubai Tour",
    "Russia Jobs",
    "Goa Package",
    "Visa",
    "Transport",
    "Hotel Booking",
  ];


  useEffect(() => {
    const text = suggestions[currentIndex];
    let charIndex = 0;

    const typing = setInterval(() => {
      if (charIndex <= text.length) {
        setPlaceholder(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % suggestions.length);
        }, 2000);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [currentIndex]);
  const handleSearch = () => {

    const value = searchTerm.toLowerCase();

    if (
      value.includes("job") ||
      value.includes("work permit") ||
      value.includes("employment") ||
      value.includes("russia") ||
      value.includes("armenia")
    ) {
      navigate("/employment");
    }

    else if (
      value.includes("visa") ||
      value.includes("immigration")
    ) {
      navigate("/immigration");
    }

    else if (
      value.includes("cab") ||
      value.includes("transport") ||
      value.includes("tempo") ||
      value.includes("logistics")
    ) {
      navigate("/transport");
    }

    else if (value.includes("goa")) {
      navigate("/goa-package");
    }

    else if (value.includes("dubai")) {
      navigate("/dubai-package");
    }

    else if (value.includes("thailand")) {
      navigate("/thailand-package");
    }

    else {
      navigate("/");
    }
  };

  return (
    <div className="w-full sticky top-0 z-[9999] bg-white border-b shadow-sm">
      <div className="w-full  flex items-center justify-between px-4 py-3">
        <div className="md:hidden">
          <div onClick={() => setMenuOpen(true)} className="p-2 cursor-pointer text-[#272727]">
            <Menu />
          </div>
        </div>

        <div className="flex md:hidden flex-1 ml-6 mr-2 relative max-w-[200px]">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 z-20 pointer-events-none "
              size={16}
            />
          <input
            type="text"
            placeholder={`Search ${placeholder}`}
            className="w-full py-2 pl-9 pr-3 rounded-full text-gray-80 font-medium bg-white/90
            backdrop-blur-md text-sm outline-none border border-white/30 shadow-lg focus:ring-2
            focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder:text-gray-400"
          />
        </div>

        <img 
          src={star} 
          alt="logo" 
          className="h-15 w-15 md:hidden" 
        />


        <img 
          src={star} 
          alt="logo" 
          className="h-15 w-15 ml-25 hidden md:block" 
        />

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black">

          <div className="relative w-56">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 z-20 pointer-events-none "
              size={16}
            />            
            <input
              type="text"
              placeholder={`Search ${placeholder}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="w-full py-2 pl-9 pr-3 rounded-full text-gray-80 font-medium bg-white/90
              backdrop-blur-md text-sm outline-none border border-white/30 shadow-lg focus:ring-2
              focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 placeholder:text-gray-400"
            />
          </div>

          <div
            ref={tourismRef}
            className="relative cursor-pointer hover:text-blue-500"
            onClick={() => setShowTourism(!showTourism)}
          >
            TOURISM
            {showTourism && (
              <>
                <div className="absolute top-10 left-0 bg-white shadow-xl w-48 rounded-xl p-2 z-[9999]">

                  <div
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDomestic(!showDomestic);
                      setShowInternational(false);
                    }}
                  >
                    Domestic &#8611;
                  </div>

                  <div
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInternational(!showInternational);
                      setShowDomestic(false);
                    }}
                  >
                    International &#8611;
                  </div>

                </div>

                {showDomestic && (
                  <div className="absolute top-[120px] left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl p-6 w-[70vw] max-w-[700px] z-[9999]">

                    <h3 className="text-lg font-semibold mb-4">Domestic Destinations</h3>

                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-800">

                      <div className="flex gap-3">
                        Goa <span className="bg-red-200 text-xs px-2 rounded-full">TRENDING</span>
                      </div>
                      <div className="flex gap-3">
                        Kashmir <span className="bg-pink-200 text-xs px-2 rounded-full">Honeymoon</span>
                      </div>
                      <div>Manali</div>
                      <div>Rajasthan</div>
                      <div>Kerala</div>
                      <div>Andaman</div>
                      <div>Udaipur</div>
                      <div>Shimla</div>
                      <div>Leh Ladakh</div>
                      <div>Andaman Nicobar Island</div>
                      <div>LakshwaDeep</div>
                      <div
                        onClick={()=>navigate("/domesticTours")}
                      >
                        
                        Explore More Destination
                        </div>

                    </div>
                  </div>
                )}

                {showInternational && (
                  <div className="absolute top-[120px] left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl p-6 w-[70vw] max-w-[700px] z-[9999]">

                    <h3 className="text-lg font-semibold mb-4">International Destinations</h3>

                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-800">

                      <div className="flex gap-3">
                        Dubai <span className="bg-red-200 text-xs px-2 rounded-full">TRENDING</span>
                      </div>

                      <div className="flex gap-3">
                        Maldives <span className="bg-pink-200 text-xs px-2 rounded-full">HONEYMOON</span>
                      </div>

                      <div>Thailand</div>
                      <div>Singapore</div>
                      <div>Malaysia</div>
                      <div className="flex gap-3">
                        Maldives <span className="bg-purple-200 text-xs px-2 rounded-full">Popular</span>
                      </div> 
                      <div>Bali</div>                     
                      <div>Europe</div>
                      <div>Switzerland</div>
                      <div>Sri-lanka</div>
                      <div>Vietnam</div>
                      <div>Australia</div>
                      <div>South-Africa</div>
                      <div>Mauritis</div>
                      <div>Explore More Destination</div>
                    </div>
                  </div>
                )}

              </>
            )}
          </div>

          <div className="cursor-pointer hover:text-blue-500">
            <NavLink to="/transport">TRANSPORT</NavLink>
          </div>
          <div className="cursor-pointer hover:text-blue-500">
            <NavLink to="/employment">EMPLOYMENT</NavLink>
          </div>
            <div className="cursor-pointer hover:text-blue-500">
          <NavLink to="/immigration">IMMIGRATION</NavLink>
          </div>


        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-[9998]"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[300px] bg-[#272727] text-white z-[9999] shadow-2xl p-5 transition-all duration-300 border-r">

            <div className="flex items-center gap-3 mb-6">
              <img src={star} alt="logo" className="h-13 w-13" />
              <span className="text-2xl font-semibold ">
                Star Venture
              </span>
            </div>
           
            <div>
              <div
                className="flex justify-between items-center font-semibold cursor-pointer"
                onClick={() => setMobileTourism(!mobileTourism)}
              >
                TOURISM <ChevronDown size={16} />
              </div>

              {mobileTourism && (
                <div className="pl-3 mt-2">

                  <div onClick={() => setMobileDomestic(!mobileDomestic)} className="cursor-pointer">
                    Domestic
                  </div>

                  {mobileDomestic && (
                    <div className="pl-3 text-gray-600"
                      onClick={()=>navigate("/domesticTours")}
                    >
                      {/* <div>Goa</div>
                      <div>Kashmir</div>
                      <div>Manali</div> */}
                    
                    </div>
                  )}

                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => setMobileInternational(!mobileInternational)}
                  >
                    International
                  </div>

                  {mobileInternational && (
                    <div className="pl-3 text-gray-700 text-sm"
                      onClick={()=>navigate("/internationalTours")}
                    >
                      {/* <div>Dubai</div>
                      <div>Thailand</div>
                      <div>Singapore</div> */}
                    </div>
                  )}

                </div>
              )}
            </div>

            <div className="cursor-pointer hover:text-blue-500">
              <NavLink to="/transport">TRANSPORT</NavLink>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              <NavLink to="/employment">EMPLOYMENT</NavLink>
            </div>
            <div className="cursor-pointer hover:text-blue-500">
              <NavLink to="/immigration">IMMIGRATION</NavLink>
            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;