import  star  from "../assets/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-black via-[#050505] to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="star"
                className="w-12 h-12 object-contain"
              />

              <h2 className="text-2xl font-bold text-white">
                Star Venture Tourism
              </h2>
            </div>

            <p className="mt-4 text-gray-300 leading-relaxed text">
              Your trusted travel partner for international visa assistance and curated holiday experiences.
              We simplify travel planning and ensure a smooth, safe and memorable journey across the world.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text">
              At Star Venture Tourism, we are committed to delivering excellence across four key domains
              that shape global connectivity and opportunities:
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/starventuregroups"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 
                hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              <a
                href="https://wa.me/917874041324"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366] transition">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.535.744 5.014 2.152 7.137L3 29l5.999-2.09A12.94 12.94 0 0 0 16.001 29C23.18 29 29 23.18 29 16S23.18 3 16.001 3zm0 23.5a10.4 10.4 0 0 1-5.294-1.444l-.379-.225-3.56 1.24 1.16-3.468-.247-.356A10.43 10.43 0 1 1 16.001 26.5zm5.73-7.797c-.314-.157-1.856-.916-2.144-1.02-.287-.105-.497-.157-.706.157-.21.314-.81 1.02-.994 1.23-.183.21-.366.235-.68.078-.314-.157-1.325-.488-2.524-1.555-.933-.831-1.563-1.856-1.746-2.17-.183-.314-.02-.483.137-.64.14-.139.314-.366.471-.55.157-.183.21-.314.314-.523.105-.21.053-.393-.026-.55-.078-.157-.706-1.7-.968-2.327-.255-.612-.514-.53-.706-.54l-.602-.01c-.21 0-.55.078-.837.393-.288.314-1.1 1.073-1.1 2.615s1.126 3.032 1.283 3.241c.157.21 2.215 3.384 5.367 4.744.75.324 1.335.517 1.79.661.752.239 1.437.205 1.978.124.603-.09 1.856-.758 2.118-1.49.262-.733.262-1.36.183-1.49-.078-.13-.287-.21-.602-.367z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6 text-sm text-gray-300">
            <p className="text">
                <span className="text-[#236eab] font-bold">&#10022; Tourism: </span> 
                We create unforgettable travel experiences with curated domestic 
                and international tour packages, ensuring comfort, adventure, and cultural exploration at every step.           
            </p>
            <p className="text">
                <span className="text-[#236eab] font-bold">&#10022; Transport: </span> 
                We provide reliable and efficient transportation solutions, offering 
                seamless travel support for individuals, groups, and corporate clients.
            </p>
            <p className="text">
                <span className="text-[#236eab] font-bold">&#10022; Employment: </span> 
                We aim to connect talent with opportunity by supporting career placements 
                and overseas job assistance, helping individuals build a better future.
            </p>
            <p className="text">
                <span className="text-[#236eab] font-bold">&#10022; Immigration: </span> 
                We offer expert guidance for visa processing and immigration services, 
                making global relocation smooth, transparent, and hassle-free.
            </p>
          </div>
        </div>

       <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-t  border-white/20 mt-12 pt-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300 ">

            <div>
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                {/* <div className="flex gap-4 ">
                  <a href="/">Home</a>
                  <a href="/">About-us</a>
                  <a href="/">Services</a>
                  <a href="/">Contacts</a>
                </div> */}
                <ul className="space-y-3">
                <li>Home</li>   
                <li>About us</li>
                <li>Services</li>
                <li>Contact</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-3">Policy</h3>
                <ul className="space-y-3">
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Cancellation Policy</li>
                </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Talk to Us</h3>
              <div className="space-y-2.5">
                <p>+917874041324</p>
                {/* <a
                  href="mailto:admin@starventuregroups.com"
                  className="hover:text-yellow-500 transition"
                  >
                  admin@starventuregroups.com
                </a><br/> */}
                <p> admin@starventuregroups.com</p>
                <p> Valsad, Gujarat</p>
              </div>
            </div>
          
            <div>
                <h3 className="text-white font-semibold mb-3">Socials</h3>
                <div className=" gap-3 flex">
                    <span 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#2a6392] cursor-pointer">
                        <FacebookIcon/>
                    </span>
                    <span 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition cursor-pointer">
                        <InstagramIcon/>
                    </span>
                    <span 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 
                      hover:bg-gradient-to-r hover:from-black hover:via-gray-800 hover:to-gray-600 
                      hover:text-white transition duration-300 cursor-pointer">
                      <XIcon/>
                    </span>
                </div>
            </div>

        </div>

       <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-t  border-white/20 mt-20 pt-5 text-center">
         <p className="">
             © {new Date().getFullYear()} Star Venture Tourism. All Rights Reserved.
         </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;