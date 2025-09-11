import React from "react";
import { FaClock, FaAward, FaUsers } from "react-icons/fa"; // demo icons

const ProjectExperience = () => {
  return (
    <section className="px-6 p-10 bg-[#050614]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Item 1 */}
        <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          {/* Left: Icon */}
          <FaClock className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          {/* Right: Text */}
          <div>
            <p className="text-3xl font-bold text-white">80+</p>
            <p className="text-gray-300 text-sm">Hour Prototype Guarantee</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          <FaAward className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          <div>
            <p className="text-3xl font-bold text-white">5Y+</p>
            <p className="text-gray-300 text-sm">Experience</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          <FaUsers className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          <div>
            <p className="text-3xl font-bold text-white">100+</p>
            <p className="text-gray-300 text-sm">Team Member</p>
          </div>
        </div>
      </div>
           {/* Logos */}
            <div className="mb-6 animate-fadeDown mt-8 flex justify-center align-items-center">
                <span className="bg-gray-800/40 text-[#FFF] text-2xl px-4 py-2 rounded-lg mt-8 inline-flex items-center gap-2 border border-gray-700 rounded-2xl">
                    <span>👋</span> Our Companies
                </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8  px-6  bg-gray-800/40 backdrop-blur-md border border-gray-700">
                {[
                    { img: "/images/logo2.png", name: "Nirob Trading Corporation", tagline: "(Powering Progress Through Trusted Trade)" },
                    { img: "/images/logo3.png", name: "Kumkum Construction", tagline: "(we commited to raising the standard of Construction)" },
                    { img: "/images/logo1.png", name: "Nirob InfoTech LTD", tagline: "(Empowering the Tech Flow)" },
                    { img: "/images/logo4.png", name: "Nirob Agro Care LTD", tagline: "(Where green possibilities are created &  quality moves the world)" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="  rounded-2xl shadow-lg p-6 w-64 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl"
                    >
                        {/* Logo */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-contain mb-4"
                        />
                        {/* Company Name */}
                        <p className="text-[15px] font-semibold text-white">{item.name}</p>
                        {/* Tagline */}
                        <p className="text-[10px] text-gray-300 mt-2 italic">{item.tagline}</p>
                    </div>
                ))}
            </div>
    </section>
  );
};

export default ProjectExperience;
