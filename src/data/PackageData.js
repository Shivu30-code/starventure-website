import dubaiVideo from "../assets/dubai.gif";
import Goa from "../assets/goa.gif";
import maldives from "../assets/maldives.gif";
import bali from "../assets/Bali.gif";
import paris from "../assets/paris.gif";
import v from "../assets/v.gif";
import Rajasthan from "../assets/Rajsthan.gif";
import Kerala from "../assets/kerala.gif";
import singa from "../assets/singapore.gif";
import manali from "../assets/manali.gif";
import coorg from "../assets/coorg.gif";

export const categories = [
  "All Packages",
  "Weekend",
  "Family",
  "Honeymoon",
  "Adventure",
  "Beach",
  "International",
];

export const packages = [
  {
    title: "Maldives Escape",
    location: "Maldives",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    price: "₹49,999",
    days: "5 Days / 4 Nights",
    tag: "Beach",
    type: "International",
  },
  {
    title: "Himachal Getaway",
    location: "India",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop",
    price: "₹15,999",
    days: "4 Days / 3 Nights",
    tag: "Weekend",
    type: "Domestic",
  },
  {
    title: "European Delight",
    location: "Paris, Switzerland",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    price: "₹89,999",
    days: "7 Days / 6 Nights",
    tag: "International",
    type: "International",
  },
  {
    title: "Kerala Backwaters",
    location: "India",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    price: "₹12,999",
    days: "3 Days / 2 Nights",
    tag: "Family",
    type: "Domestic",
  },
  {
    title: "Dubai Luxury Trip",
    location: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    price: "₹59,999",
    days: "5 Days / 4 Nights",
    tag: "Weekend",
    type: "International",
  },
  {
    title: "Rishikesh Adventure",
    location: "India",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
    price: "₹6,999",
    days: "2 Days / 1 Night",
    tag: "Adventure",
    type: "Domestic",
  },
  {
    title: "Bali, Indonesia",
    location:"Bali",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Bali, Indonesia",
    price: "₹45,999",
    days: "5 Days / 4 Nights",
    tag: "Honeymoon",
    type: "International",
  },
  {
    title: "Paris, France",
    location:"France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "₹89,999",
    days: "7 Days / 6 Nights",
    tag: "Honeymoon",
    type: "International",
  },
];

export const Popularpackages = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Bali, Indonesia",
    price: "₹45,999",
    days: "5 Days / 4 Nights",
    rating: "4.9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    title: "Dubai, UAE",
    price: "₹65,999",
    days: "6 Days / 5 Nights",
    rating: "4.8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    title: "Paris, France",
    price: "₹89,999",
    days: "7 Days / 6 Nights",
    rating: "4.9",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop",
    title: "Rishikesh",
    price: "₹6,999",
    days: "2 Days / 1 Night",
    rating: "4.8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    title:"Maldives", 
    price: "₹49,999",
    days: "5 Days / 4 Nights",
    rating: "4.8",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    title: "Kerala",
    price: "₹12,999",
    days: "3 Days / 2 Nights",
    rating: "4.6",
  },
];

export const defaultData = [
  {
    name: "Vietnam", 
    // img: 
    //  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    img:v,
    label:"Hidden Gem of Asia",
  },
  { 
    name: "Bali", 
    // img: 
    //   "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    img:bali,
    label:"Island of Gods",
  },
  { 
    name: "Paris", 
    // img: 
    //   "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    img:paris,
    label:"City of Love", 
  },
  { 
    name: "Maldives", 
    // img: 
    //   "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3", 
    img:maldives,
    label:"Tropical Paradise", 

  },
  { 
    name: "Goa", 
    // img: 
    //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    img:Goa,
    label:"Beach Paradise", 
  },
  { 
    name: "Dubai", 
    // img: 
    //   "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    img: dubaiVideo,
    label:"Luxury Skyline Escape", 

  },
  { 
    name: "Kerala", 
    // img: 
    //   "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    img:Kerala,
    label:"God’s Own Country",  
  },
  { 
    name: "Rajasthan", 
    // img: 
    // "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3",
    img:Rajasthan,
    label:"Royal Heritage City", 
  },

];

export const international = [
  {
    name: "Vietnam", 
    // img: 
    //  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    img:v,
    label:"Hidden Gem of Asia",
  },
  { 
    name: "Bali", 
    // img: 
    //   "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    img:bali,
    label:"Island of Gods",
  },
  { 
    name: "Paris", 
    // img: 
    //   "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    img:paris,
    label:"City of Love", 
  },
  { 
    name: "Maldives", 
    // img: 
    //   "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3", 
    img:maldives,
    label:"Tropical Paradise", 

  },
  {
    name: "Dubai", 
    // img: 
    //   "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    img: dubaiVideo,
    label:"Luxury Skyline Escape",
  },  

  { 
    name: "Singapore", 
    // img: 
    //   "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3",
    img:singa,
    label:"Futuristic City Escape", 
  },  
]

export const domestic = [
  { 
    name: "Goa", 
    // img: 
    //   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    img:Goa,
    label:"Beach Paradise", 
  },
  { name: "Manali", 
    // img:
    //   "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    img:manali,
    label:"Snowy Mountain Retreat", 

  },
  { 
    name: "Kerala", 
    // img: 
    //   "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    img:Kerala,
    label:"God’s Own Country",  
  },
  { 
    name: "Rajasthan", 
    // img: 
    // "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3",
    img:Rajasthan,
    label:"Royal Heritage City", 
  },
  { 
    name: "Coorg", 
    // img: 
    // "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c3",
    img:coorg,
    label:"Cloudy Green Retreat", 
  },
]