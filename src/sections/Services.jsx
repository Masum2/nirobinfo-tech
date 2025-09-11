import React from "react";
import {
  FaMobileAlt,
  FaApple,
  FaDesktop,
  FaCloud,
  FaGlobe,
  FaCogs,
  FaDatabase,
  FaRobot,
  FaCube,
  FaMicrochip,
  FaFlask,
  FaBullhorn,
  FaUsers,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const Services = () => {
  const services = [
    // তোমার সার্ভিসগুলো
    {
      icon: <FaGlobe className="text-cyan-400 text-3xl" />,
      title: "Website Development & Services",
      desc: "Responsive, scalable, and modern websites tailored to your business needs.",
    },
    {
      icon: <FaCogs className="text-cyan-400 text-3xl" />,
      title: "Software Solutions",
      desc: "Custom software solutions designed to optimize workflows and efficiency.",
    },
    {
      icon: <FaDatabase className="text-cyan-400 text-3xl" />,
      title: "Data Solutions",
      desc: "Data-driven insights and solutions for smarter decision-making.",
    },
    {
      icon: <FaRobot className="text-cyan-400 text-3xl" />,
      title: "Artificial Intelligence & Machine Learning",
      desc: "AI & ML solutions that enable automation, prediction, and innovation.",
    },
    {
      icon: <FaCube className="text-cyan-400 text-3xl" />,
      title: "Blockchain Solutions",
      desc: "Secure, decentralized blockchain solutions for diverse industries.",
    },
    {
      icon: <FaCloud className="text-cyan-400 text-3xl" />,
      title: "Cloud & DevOps Services",
      desc: "Cloud-based services and infrastructure to scale your business.",
    },
    {
      icon: <FaMicrochip className="text-cyan-400 text-3xl" />,
      title: "Automation & IoT Solutions",
      desc: "Smart automation and IoT systems for enhanced connectivity.",
    },
    {
      icon: <FaFlask className="text-cyan-400 text-3xl" />,
      title: "Research & Development Services",
      desc: "Innovative R&D to explore new technologies and future solutions.",
    },
    {
      icon: <FaBullhorn className="text-cyan-400 text-3xl" />,
      title: "Digital Solutions & Branding",
      desc: "Creative digital solutions and branding strategies to boost presence.",
    },

    // আমার আগের ইউনিক সার্ভিসগুলো
    {
      icon: <FaMobileAlt className="text-cyan-400 text-3xl" />,
      title: "Mobile App Development",
      desc: "Intricate bespoke mobile app solutions for engaging Android users.",
    },
    {
      icon: <FaApple className="text-cyan-400 text-3xl" />,
      title: "iOS App Development",
      desc: "Unmatched mobile solutions for iOS platforms for maximum engagement.",
    },

 
    {
      icon: <MdDesignServices className="text-cyan-400 text-3xl" />,
      title: "UI/UX Design",
      desc: "Eye candy UI/UX design for smooth user experience & trust building.",
    },

  ];

  return (
    <section className="bg-gray-900 text-white  py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="bg-gray-800/40 text-[#FFF] text-2xl px-4 py-2 rounded-2xl inline-flex items-center gap-2 border border-gray-700">
          👋 Our Services
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
      
        
    </section>
  );
};

export default Services;
