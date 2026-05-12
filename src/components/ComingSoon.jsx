import React from "react";
import { Construction } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full text-center bg-white rounded-3xl shadow-xl p-8 border">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 p-4 rounded-full">
            <Construction className="text-yellow-600" size={42} />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          New Features Coming Soon
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Our team is currently upgrading this section.
        </p>

        <p className="mt-2 text-gray-500">
          Please check back soon for more updates.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;