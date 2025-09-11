import React from "react";
import { motion } from "framer-motion";

const techs = [
  { name: "Next.js", src: "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "AWS", src: "https://svgmix.com/uploads/skillicons/29026e-aws-dark.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitHub", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" },
];

const ServicesAnimation = () => {
  return (
    <div className="w-full bg-gray-900  ">
    <div className="mb-6 animate-fadeDown flex justify-center align-items-center">
                <span className="bg-gray-800/40 text-[#FFF] text-2xl px-4 py-2 rounded-lg mt-8 inline-flex items-center gap-2 border border-gray-700 rounded-2xl">
                    <span>👋</span> We Technologies use
                </span>
            </div>

      <div className="overflow-hidden relative border-y border-gray-700 py-4">
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: ["0%", "-50%"] }} // only move half, because we duplicated
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {/* duplicate 2x for seamless loop */}
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-32 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-16 object-contain mb-3 drop-shadow-md"
              />
              <span className="text-gray-300 text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
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
    </div>
  );
};

export default ServicesAnimation;
