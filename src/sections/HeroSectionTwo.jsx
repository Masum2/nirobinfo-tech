import React from "react";

const HeroSectionTwo = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-20 border-b border-[#000]">
        {/* Left Side (Text + Button) */}
        <div className="space-y-6 text-center md:text-left text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Unforgettable Websites, Brands & Visuals for Bold Visionaries.
          </h1>
          <p className="leading-relaxed text-gray-200">
            At Nirob InfoTech LTD, we blend strategy, creativity, and technology
            to craft powerful brands, design impactful websites, and deliver
            seamless digital experiences that drive growth.
          </p>
          <button className="px-6 py-3 bg-[#38B6FF] text-white rounded-full font-semibold hover:bg-[#ED8A12] transition">
            Know More About
          </button>
        </div>

        {/* Right Side (Optional image removed since bg covers it) */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg"
            alt="Hero Visual"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
