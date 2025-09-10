import React from "react";

const HeroSectionTwo = () => {
  return (
    <section className="mt-10 px-6 pb-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-[#000] pb-12">
        
        {/* Left Side (Text + Button) */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Unforgettable Websites, Brands & Visuals for Bold Visionaries.
          </h1>
          <p className="text-[#393B51] leading-relaxed">
          At Nirob InfoTech LTD, we blend strategy, creativity, and technology to craft powerful brands, design impactful websites, and deliver seamless digital experiences that drive growth..
          </p>
          <button className="px-6 py-3 bg-[#38B6FF] text-white rounded-full font-semibold hover:bg-[#ED8A12] transition">
            Know More About
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
            alt="Hero Visual"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTwo;
