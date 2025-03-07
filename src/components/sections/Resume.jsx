import { useState } from "react";

export const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-20 text-white px-4">
      
      {/* Toggle Resume Button */}
      <button
        onClick={() => setShowResume(!showResume)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg mb-6 transition duration-300 shadow-md"
      >
        {showResume ? "Hide Resume" : "View Resume"}
      </button>

      {/* Resume Image */}
      {showResume && (
        <div className="flex justify-center w-full max-w-4xl border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out scale-95 hover:scale-100">
          <img
            src="/image/res.jpeg"
            alt="Resume"
            className="w-[80%] max-w-full max-h-[85vh] object-contain rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
    </div>
  );
};
