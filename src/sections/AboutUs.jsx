import React from "react";
import {
  FaMedal,
  FaUsersCog,
  FaBrain,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";

const AboutUs = () => {
  const features = [
    {
      icon: <FaMedal className="text-blue-600 text-2xl" />,
      title: "Client-Centered Approach",
      desc: "We listen first, act second. Every solution is designed with your unique needs and long-termsuccess in mind.",
    },
    {
      icon: <FaUsersCog className="text-blue-600 text-2xl" />,
      title: "End-to-End Support",
      desc: "From the very first consultation to post-project assistance, we’re by your side at every stage of your digital journey"
    },
    {
      icon: <FaBrain className="text-blue-600 text-2xl" />,
      title: "Excellence in Delivery",
      desc: "We don’t settle for “good enough.” Our focus is on delivering high-quality, scalable, and reliable solutions every time",
    },
    {
      icon: <MdVerifiedUser className="text-blue-600 text-2xl" />,
      title: "Trust & Transparency",
      desc: "Clear communication, honest guidance, and ethical practices are the foundation of every partnership we build",
    },
    {
      icon: <FaBalanceScale className="text-blue-600 text-2xl" />,
      title: "Collaborative Growth",
      desc: "We see ourselves as part of your team, working hand-in-hand to turn challenges into opportunities and ideas into success.",
    },
    {
      icon: <FaHandshake className="text-blue-600 text-2xl" />,
      title: "Finishing with Confidence",
      desc: "Every project is completed with precision, dedication, and care—ensuring lasting value for your business",
    },
    //   {
    //   icon: <FaHandshake className="text-blue-600 text-2xl" />,
    //   title: "Relationship",
    //   desc: "Long-term partnerships & client success",
    // },
    //   {
    //   icon: <FaHandshake className="text-blue-600 text-2xl" />,
    //   title: "Relationship",
    //   desc: "Long-term partnerships & client success",
    // },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-4xl mx-auto text-[#38B6FF]">
       At Nirob InfoTech LTD, we believe every great business idea deserves a powerful digital
presence. Founded in 2025, we are a forward-thinking software and IT solutions company
dedicated to helping organizations transform, innovate, and thrive in the digital age.
From startups to established enterprises, we work closely with our clients to understand their
unique needs and craft custom solutions that go beyond expectations..
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 px-16">
        {features.map((feature, index) => {
          // Border pattern logic
          const borderClass =
            index % 2 === 0
              ? "border-t border-l border-r"
              : "border-b border-l border-r";

          return (
          <motion.div
  key={index}
  className={`bg-white p-6 text-center ${borderClass} border-blue-300`}
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
>
  {/* Image with Icon Overlay */}
  <div className="flex justify-center mb-4 relative w-16 h-16">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/036/443/372/small_2x/neon-light-frame-png.png" // replace with your image path
      alt="hex-background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-2xl">
      {feature.icon}
    </div>
  </div>

  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
  <p className="text-sm text-gray-600">{feature.desc}</p>
</motion.div>

          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
