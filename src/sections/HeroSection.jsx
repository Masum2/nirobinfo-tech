import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center mt-[60px] h-[50vh] text-center text-white px-6 overflow-hidden">
      {/* Badge */}
      <div className="mb-6 animate-fadeDown">
        <span className="bg-gray-800 text-sm px-4 py-2 rounded-lg inline-flex items-center gap-2">
          <span>👋</span> Nirob IT
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-[#0FCEE0] animate-fadeUp [animation-delay:200ms]">
        Empowering <span className="text-white">the Tech</span> Flow
      </h1>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 animate-fadeUp [animation-delay:500ms]">
        <button className="px-6 py-2 rounded-md bg-gray-600 hover:bg-gray-700 transition">
          About Us
        </button>
        <button className="px-6 py-2 rounded-md bg-cyan-600 hover:bg-cyan-700 transition">
          Services
        </button>
      </div>

      {/* Tagline */}
      <p className="mt-10 text-orange-300 italic text-sm md:text-base animate-fadeIn [animation-delay:700ms]">
        Your trusted tech partner — from bold ideas to big success.
      </p>

      {/* Background circles */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-cyan-900 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-cyan-900 opacity-20 blur-3xl"></div>

    </section>
  );
};

export default HeroSection;
