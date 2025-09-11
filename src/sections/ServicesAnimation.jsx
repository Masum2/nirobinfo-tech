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
     
    </div>
  );
};

export default ServicesAnimation;
