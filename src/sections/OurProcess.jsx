import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaDollarSign,
  FaCogs,
  FaClock,
  FaCertificate,
} from "react-icons/fa";

const OurProcess = () => {
  const steps = [
    {
      title: "Innovative Solutions",
      description: "Creative and unique problem-solving techniques.",
      icon: <FaLightbulb className="text-3xl text-cyan-600" />,
      position: "top-[-8%] left-1/2 -translate-x-1/2", // top
    },
    {
      title: "Expert Employees",
      description: "Highly skilled, knowledgeable, and experienced team members.",
      icon: <FaUsers className="text-3xl text-cyan-600" />,
      position: "top-1/3 right-0 translate-x-[50%] -translate-y-1/2", // right-top
    },
    {
      title: "Cost Effective",
      description: "Providing affordable solutions within client’s budget.",
      icon: <FaDollarSign className="text-3xl text-cyan-600" />,
      position: "bottom-1/3 right-0 translate-x-[50%] translate-y-1/2", // right-bottom
    },
    {
      title: "Quality Assurances",
      description: "Strict and thorough quality control measures.",
      icon: <FaCertificate className="text-3xl text-cyan-600" />,
      position: "bottom-[-8%] left-1/2 -translate-x-1/2", // bottom
    },
    {
      title: "On-time Delivery",
      description: "Timely completion of projects, no delays.",
      icon: <FaClock className="text-3xl text-cyan-600" />,
      position: "bottom-1/3 left-0 -translate-x-[50%] translate-y-1/2", // left-bottom
    },
    {
      title: "Cutting-Edge Technology",
      description: "Use of the latest and most advanced technological tools.",
      icon: <FaCogs className="text-3xl text-cyan-600" />,
      position: "top-1/3 left-0 -translate-x-[50%] -translate-y-1/2", // left-top
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-cyan-50 text-gray-800 py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-sm md:text-lg">
          At DeepChain Labs, we combine innovation, expertise, and integrity 
          to deliver powerful solutions tailored to your needs. From concept 
          to execution, we ensure excellence, transparency, and long-term 
          value for our clients.
        </p>
      </div>

      {/* 🔹 Circle Layout (only visible on lg and up) */}
      <div className="hidden lg:block relative w-[680px] h-[680px]">
        {/* Center Image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="relative w-[420px] h-[420px]">
            <img
              src="/images/process.png"
              alt="process-center"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Outer Items */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute ${step.position} w-60 text-center`}
          >
            <div className="flex flex-col items-center group bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md">
              <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/443/372/small_2x/neon-light-frame-png.png"
                  alt={`hex-${index}`}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="mt-3 font-semibold text-lg text-gray-800 group-hover:text-cyan-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 leading-snug">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Card Layout (for mobile & tablet, below lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden w-full max-w-4xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-16 h-16 mb-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/036/443/372/small_2x/neon-light-frame-png.png"
                alt={`hex-${index}`}
                className="w-full h-full object-contain drop-shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
