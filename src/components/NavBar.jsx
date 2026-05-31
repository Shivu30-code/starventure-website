import React, { useState, useRef, useEffect } from "react";
import star from "../assets/logo.png";
// import { Search, Menu, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
// imports me ye add karo
import {
  Search,
  Menu,
  ChevronDown,
  ChevronRight,
  X,
  Plane,
  Bus,
  Briefcase,
  Globe2,
  Phone,
  Mail,
  MessageCircle,
  CalendarDays,
  ArrowUpRight,
  ArrowRight
} from "lucide-react";

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
    // <div className="w-full sticky top-0 z-[9999] bg-white border-b shadow-sm">
    <div className="w-full absolute top-0 left-0 z-[9999] bg-transparent">
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
            className="w-full py-2 pl-9 pr-3 rounded-full text-black text-gray-80 font-medium bg-white/90
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

        {/* <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-black"> */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">

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
              className="w-full py-2 pl-9 pr-3 rounded-full text-black text-gray-80 font-medium bg-white/90
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
                        onClick={()=>navigate("/domesticTours")}>
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
                      <div
                        onClick={()=>navigate("/internationalTours")}>
                        Explore More Destination
                      </div>
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

      {/* {menuOpen && (
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
                    <div className="pl-3 mt-3 grid grid-cols-1 gap-3 text-sm text-gray-300">
                      <div className="flex gap-2 items-center">
                        Goa <span className="bg-red-200 text-red-700 text-[10px] px-2 rounded-full">TRENDING</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        Kashmir <span className="bg-pink-200 text-pink-700 text-[10px] px-2 rounded-full">Honeymoon</span>
                      </div>

                      <div>Manali</div>
                      <div>Rajasthan</div>
                      <div>Kerala</div>
                      <div>Andaman</div>
                      <div>Udaipur</div>
                      <div>Shimla</div>
                      <div>Leh Ladakh</div>
                      <div>Andaman Nicobar Island</div>
                      <div>Lakshadweep</div>

                      <div
                        onClick={() => {
                          navigate("/domesticTours");
                          setMenuOpen(false);
                        }}
                        className="text-blue-400 font-semibold cursor-pointer"
                      >
                        Explore More Destination
                      </div>
                    </div>
                  )}

                  <div
                    className="mt-2 cursor-pointer"
                    onClick={() => setMobileInternational(!mobileInternational)}
                  >
                    International
                  </div>

                 {mobileInternational && (
                    <div className="pl-3 mt-3 grid grid-cols-1 gap-3 text-sm text-gray-300">
                      <div className="flex gap-2 items-center">
                        Dubai <span className="bg-red-200 text-red-700 text-[10px] px-2 rounded-full">TRENDING</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        Maldives <span className="bg-pink-200 text-pink-700 text-[10px] px-2 rounded-full">HONEYMOON</span>
                      </div>

                      <div>Thailand</div>
                      <div>Singapore</div>
                      <div>Malaysia</div>

                      <div className="flex gap-2 items-center">
                        Bali <span className="bg-purple-200 text-purple-700 text-[10px] px-2 rounded-full">Popular</span>
                      </div>

                      <div>Europe</div>
                      <div>Switzerland</div>
                      <div>Sri-lanka</div>
                      <div>Vietnam</div>
                      <div>Australia</div>
                      <div>South-Africa</div>
                      <div>Mauritius</div>

                      <div
                        onClick={() => {
                          navigate("/internationalTours");
                          setMenuOpen(false);
                        }}
                        className="text-blue-400 font-semibold cursor-pointer"
                      >
                        Explore More Destination
                      </div>
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
      )} */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 h-full w-[88%] max-w-[360px] 
            bg-gradient-to-b from-[#061827] via-[#071d33] to-[#020617]
            text-white z-[9999] shadow-2xl px-6 py-6 overflow-y-auto
            border-r border-yellow-400/30">

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 
              flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
            >
              <X size={24} />
            </button>

            <div className="text-center mt-8 mb-10">
              <img src={star} alt="logo" className="h-24 w-24 mx-auto object-contain" />
              {/* <h2 className="text-4xl font-bold mt-2">Star Venture</h2> */}
              <p className="text-yellow-400 text-sm tracking-[4px] mt-2">
                EXPLORE • TRAVEL • SUCCEED
              </p>
            </div>

            <div className="space-y-4">

              <div>
                <button
                  onClick={() => setMobileTourism(!mobileTourism)}
                  className="w-full flex items-center justify-between px-5 py-4 
                  rounded-2xl bg-white/10 border border-white/10 
                  hover:border-yellow-400/60 hover:bg-white/15 transition"
                >
                  <div className="flex items-center gap-4">
                    <Plane className="text-yellow-400" size={30} />
                    <span className="text-lg font-semibold">TOURISM</span>
                  </div>
                  {
                    mobileTourism ? (
                      <ArrowRight size={22} className="text-yellow-400" />
                    ) : (
                      <ArrowUpRight size={22} className="text-yellow-400" />
                    )
                  }
                </button>

                {mobileTourism && (
                  <div className="mt-3 ml-4 space-y-3 border-l border-yellow-400/30 pl-4">

                    <button
                      onClick={() => setMobileDomestic(!mobileDomestic)}
                      className="w-full flex justify-between text-gray-200"
                    >
                      Domestic Tours
                      {
                        mobileDomestic ? (
                          <ArrowRight size={16} className="text-yellow-400" />
                        ) : (
                          <ArrowUpRight size={16} className="text-yellow-400" />
                        )
                      }
                    </button>

                    {mobileDomestic && (
                      <div className="grid gap-2 text-sm text-gray-300">
                        <p>Goa <span className="bg-red-200 text-red-700 text-[15px] px-2 rounded-full">TRENDING</span></p>
                        <p>Kashmir <span className="bg-pink-200 text-pink-700 text-[15px] px-2 rounded-full">HONEYMOON</span></p>
                        <p>Manali</p>
                        <p>Rajasthan</p>
                        <p>Kerala</p>
                        <p>Andaman & Nicobar Island</p>
                        <p>Udaipur</p>
                        <p>Shimla</p>
                        <p>Lakswadeep</p>
                        <p>Darjeeling</p>
                        <p>Munnar</p>
                        <p>Rishikesh <span className="bg-purple-200 text-purple-700 text-[15px] px-2 rounded-full">ADVENTURE</span></p>
                        <p
                          onClick={() => {
                            navigate("/domesticTours");
                            setMenuOpen(false);
                          }}
                          className="text-yellow-400 font-semibold cursor-pointer"
                        >
                          Explore More →
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => setMobileInternational(!mobileInternational)}
                      className="w-full flex justify-between text-gray-200"
                    >
                      International Tours 
                      {
                        mobileInternational ? (
                          <ArrowRight size={16} className="text-yellow-400" />
                        ) : (
                          <ArrowUpRight size={16} className="text-yellow-400" />
                        )
                      }
                    </button>

                    {mobileInternational && (
                      <div className="grid gap-2 text-sm text-gray-300">
                        <p>Dubai <span className="bg-red-200 text-red-700 text-[15px] px-2 rounded-full">TRENDING</span></p>
                        <p>Maldives <span className="bg-pink-200 text-pink-700 text-[15px] px-2 rounded-full">HONEYMOON</span></p>
                        <p>Thailand</p>
                        <p>Singapore</p>
                        <p>Bali <span className="bg-purple-200 text-purple-700 text-[15px] px-2 rounded-full">POPULAR</span></p>
                        <p>Europe</p>
                        <p>Switzerland</p>
                        <p>Sweden</p>
                        <p>Vitenam</p>
                        <p>Srilanka</p>
                        <p>Australia</p>
                        <p>Mauritius</p>
                        <p>South-Africa <span className="bg-yellow-200 text-yellow-700 text-[15px] px-2 rounded-full">SAFRI</span></p>
                        <p
                          onClick={() => {
                            navigate("/internationalTours");
                            setMenuOpen(false);
                          }}
                          className="text-yellow-400 font-semibold cursor-pointer"
                        >
                          Explore More →
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <NavLink
                to="/transport"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 rounded-2xl 
                bg-white/10 border border-white/10 hover:border-yellow-400/60 transition"
              >
                <div className="flex items-center gap-4">
                  <Bus className="text-yellow-400" size={30} />
                  <span className="text-lg font-semibold">TRANSPORT</span>
                </div>
                <ArrowUpRight />
              </NavLink>

              <NavLink
                to="/employment"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 rounded-2xl 
                bg-white/10 border border-white/10 hover:border-yellow-400/60 transition"
              >
                <div className="flex items-center gap-4">
                  <Briefcase className="text-yellow-400" size={30} />
                  <span className="text-lg font-semibold">EMPLOYMENT</span>
                </div>
                <ArrowUpRight />
              </NavLink>

              <NavLink
                to="/immigration"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 rounded-2xl 
                bg-white/10 border border-white/10 hover:border-yellow-400/60 transition"
              >
                <div className="flex items-center gap-4">
                  <Globe2 className="text-yellow-400" size={30} />
                  <span className="text-lg font-semibold">IMMIGRATION</span>
                </div>
                <ArrowUpRight />
              </NavLink>
            </div>

            <div className="flex items-center gap-3 my-8">
              <div className="h-px flex-1 bg-white/15"></div>
              <span className="text-yellow-400">✦</span>
              <div className="h-px flex-1 bg-white/15"></div>
            </div>

            <h3 className="text-gray-400 text-lg font-semibold mb-4">Contact Us</h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/917874041324"
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageCircle className="text-yellow-400" />
                  </span>
                  <span className="font-semibold">WhatsApp</span>
                </div>
                <ChevronRight />
              </a>

              <a
                href="tel:+917874041324"
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="text-yellow-400" />
                  </span>
                  <span className="font-semibold">Call Us</span>
                </div>
                <ChevronRight />
              </a>

              <a
                href="mailto:admin@starventuregroups.com"
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="text-yellow-400" />
                  </span>
                  <span className="font-semibold">Email Us</span>
                </div>
                <ChevronRight />
              </a>
            </div>

            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/contact");
              }}
              className="w-full mt-8 mb-4 py-4 rounded-2xl 
              bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
              text-black font-bold text-lg flex items-center justify-between px-6
              shadow-[0_0_25px_rgba(250,204,21,0.35)]"
            >
              <span className="flex items-center gap-3">
                <CalendarDays />
                BOOK NOW
              </span>
              <ChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;