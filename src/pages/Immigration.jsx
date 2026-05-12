import React from 'react'
import ComingSoon from '../components/ComingSoon'
import { X } from "lucide-react";
import { useNavigate } from 'react-router-dom';


const Immigration = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 gradient">
      <button
        onClick={() => navigate("/")}
        className="fixed top-3 right-6 z-50 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <X size={22} />
      </button>
      <ComingSoon/>
    </div>
 
  )
}

export default Immigration