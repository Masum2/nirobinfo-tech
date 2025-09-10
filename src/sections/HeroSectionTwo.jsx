import React from "react";

const HeroSectionTwo = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center text-white px-6 overflow-hidden bg-gradient-to-b from-[#050d27] via-[#081229] to-[#0a0f1e]">
      
      {/* Background polygon (right side) */}
      <div className="absolute right-5 md:right-20 bottom-10 md:bottom-20 opacity-40 animate-pulse">
        <img
          src="/images/banner2.png"
          alt="Polygon wireframe"
          className="w-32 md:w-52 lg:w-64"
        />
      </div>

      {/* Main image */}
      <div className="mb-10 md:mb-12 animate-fadeDown drop-shadow-xl">
        <img
          src="/images/banner1.png"
          alt="Tech illustration"
          className="max-w-[90%] md:max-w-[700px] mx-auto"
        />
      </div>

      {/* Quote text */}
      <p className="max-w-5xl text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 px-4">
        "In today’s rapidly changing tech landscape, 
        <span className="text-sky-400 font-semibold"> digital transformation </span>
        is no longer optional — it’s essential. Emerging technologies like
        <span className="text-sky-400 font-semibold"> AI</span>, 
        <span className="text-sky-400 font-semibold"> cloud computing</span>, 
        and data-driven solutions are empowering businesses to grow smarter, faster, and more secure. 
        At <span className="text-sky-400 font-semibold">Nirob InfoTech Ltd</span>, 
        we help organizations harness these innovations to stay ahead in a competitive world."
      </p>

      {/* Underline separator */}
      <div className="mt-8 w-24 md:w-40 h-[2px] bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 rounded-full"></div>
    </section>
  );
};

export default HeroSectionTwo;
