import React from "react";
import {
  FaMobileAlt,
  FaApple,
  FaCloud,
  FaGlobe,
  FaCogs,
  FaDatabase,
  FaRobot,
  FaCube,
  FaMicrochip,
  FaFlask,
  FaBullhorn,
  FaShoppingCart,
  FaVrCardboard,
  FaProjectDiagram,
  FaCheckCircle,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
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

    // ✅ নতুন ৪টা সার্ভিস
    {
      icon: <FaShoppingCart className="text-cyan-400 text-3xl" />,
      title: "E-Commerce Services",
      desc: "Custom e-commerce platforms and online store development that engage & convert.",
    },
    {
      icon: <FaVrCardboard className="text-cyan-400 text-3xl" />,
      title: "AR/VR Development",
      desc: "Immersive AR/VR applications for interactive training, simulation, and experiences.",
    },
    {
      icon: <FaProjectDiagram className="text-cyan-400 text-3xl" />,
      title: "ERP & CRM Development",
      desc: "Custom ERP & CRM solutions to centralize data and streamline processes.",
    },
    {
      icon: <FaCheckCircle className="text-cyan-400 text-3xl" />,
      title: "Quality Assurance Testing",
      desc: "Manual & automated testing to ensure usability, performance & security.",
    },
      {
      icon: <FaCloud className="text-cyan-400 text-3xl" />,
      title: "SAAS Development",
      desc: "Complete designing, building and lounching and scalable Software-as-a-Service(SaaS) cross-platform solution for startups.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="bg-gray-800/40 text-[#FFF] text-2xl px-4 py-2 rounded-2xl inline-flex items-center gap-2 border border-gray-700">
          👋 Our Services
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 text-center shadow-md"
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
    transition={{
    duration: 0.35,   // 👉 দ্রুত হবে
    delay: index * 0.05, // 👉 stagger effect ছোট
    ease: "easeOut",  // 👉 smooth motion
  }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)",
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
