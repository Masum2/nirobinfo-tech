import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaCloudUploadAlt,
  FaTools,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb size={28} className="text-blue-500" />,
    title: "Discover & Consult",
    description: "We listen first — shaping the right foundation.",
  },
  {
    icon: <FaPencilRuler size={28} className="text-blue-500" />,
    title: "Customized Solution Design",
    description: "Scalable solutions with Web, AI/ML & IoT",
  },
  {
    icon: <FaCode size={28} className="text-blue-500" />,
    title: "Developing",
    description: "Writing code, building components, integrating systems",
  },
  {
    icon: <FaCheckCircle size={28} className="text-blue-500" />,
    title: "Quality Assurance",
    description: "Testing functionality, bug fixing, optimization",
  },
  {
    icon: <FaCloudUploadAlt size={28} className="text-blue-500" />,
    title: "Deployment",
    description: "Constant evaluation, monitoring, feedback, support",
  },
  {
    icon: <FaTools size={28} className="text-blue-500" />,
    title: "Launch & Long-Term Support",
    description: "From launch to support — driving growth and innovation.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Development Process
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From the spark of an idea to successful launch, we guide every stage of
          development to convert visionary concepts into powerful, market-leading
          solutions backed by meticulous execution and proven reliability..
        </motion.p>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-72 h-72 relative flex items-center justify-center cursor-pointer">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/443/372/small_2x/neon-light-frame-png.png"
                  alt="Step Shape"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="relative text-center px-4">
                  <div className="flex justify-center mb-3">{step.icon}</div>
                  <h3 className="text-[16px] font-bold text-gray-800">
                    {step.title.length > 19 ? (
                      <>
                        {step.title.slice(0, 19)} <br />
                        {step.title.slice(19)}
                      </>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="text-[12px] font-semibold text-gray-600 mt-2 break-words w-[24ch]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
