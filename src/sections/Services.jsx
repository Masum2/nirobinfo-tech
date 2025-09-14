import React, { useState } from "react";
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
  FaCircle,
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaGlobe className="text-cyan-400 text-3xl" />,
      title: "Website Development & Services",
      desc: "Responsive, scalable, and modern websites tailored to your business needs.",
      details: [
        "Website Development (Static & Dynamic)",
        "Custom Web Design",
        "WordPress Development",
        "Shopify Development",
        "E-Commerce Website",
        "Website Maintenance",
      ],
    },
    {
      icon: <FaCogs className="text-cyan-400 text-3xl" />,
      title: "Software Solutions",
      desc: "Custom software solutions designed to optimize workflows and efficiency.",
      details: [
        "Custom Desktop Applications",
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Business Automation Tools",
      ],
    },
    {
      icon: <FaDatabase className="text-cyan-400 text-3xl" />,
      title: "Data Solutions",
      desc: "Data-driven insights and solutions for smarter decision-making.",
      details: [
        "Database Design & Management",
        "Data Analytics & Visualization",
        "Big Data Solutions",
        "ETL & Data Integration",
      ],
    },
    {
      icon: <FaRobot className="text-cyan-400 text-3xl" />,
      title: "AI & Machine Learning",
      desc: "AI & ML solutions that enable automation, prediction, and innovation.",
      details: [
        "Predictive Analytics",
        "Natural Language Processing",
        "AI Chatbots",
        "Machine Learning Models",
      ],
    },
    {
      icon: <FaCube className="text-cyan-400 text-3xl" />,
      title: "Blockchain Solutions",
      desc: "Secure, decentralized blockchain solutions for diverse industries.",
      details: [
        "Smart Contract Development",
        "NFT Development",
        "Cryptocurrency Solutions",
        "Decentralized Apps (DApps)",
      ],
    },
    {
      icon: <FaCloud className="text-cyan-400 text-3xl" />,
      title: "Cloud & DevOps Services",
      desc: "Cloud-based services and infrastructure to scale your business.",
      details: [
        "AWS, Azure, GCP Deployment",
        "Continuous Integration/Delivery",
        "Serverless Architecture",
        "Infrastructure Automation",
      ],
    },
    {
      icon: <FaMicrochip className="text-cyan-400 text-3xl" />,
      title: "Automation & IoT Solutions",
      desc: "Smart automation and IoT systems for enhanced connectivity.",
      details: [
        "Smart Home Systems",
        "Industrial IoT Solutions",
        "Automation Tools",
        "IoT Device Integration",
      ],
    },
    {
      icon: <FaFlask className="text-cyan-400 text-3xl" />,
      title: "Research & Development",
      desc: "Innovative R&D to explore new technologies and future solutions.",
      details: [
        "Prototype Development",
        "Tech Feasibility Studies",
        "Experimental AI & ML",
        "Product Innovation",
      ],
    },
    {
      icon: <FaBullhorn className="text-cyan-400 text-3xl" />,
      title: "Digital Solutions & Branding",
      desc: "Creative digital solutions and branding strategies to boost presence.",
      details: [
        "Digital Marketing Strategy",
        "Social Media Management",
        "Brand Identity Design",
        "Campaign Management",
      ],
    },
    {
      icon: <FaMobileAlt className="text-cyan-400 text-3xl" />,
      title: "Mobile App Development",
      desc: "Intricate bespoke mobile app solutions for engaging Android users.",
      details: [
        "Android App Development",
        "Cross-Platform Apps",
        "App Maintenance & Support",
      ],
    },
    {
      icon: <FaApple className="text-cyan-400 text-3xl" />,
      title: "iOS App Development",
      desc: "Unmatched mobile solutions for iOS platforms for maximum engagement.",
      details: [
        "iOS App Development",
        "Swift & Objective-C",
        "App Store Deployment",
      ],
    },
    {
      icon: <MdDesignServices className="text-cyan-400 text-3xl" />,
      title: "UI/UX Design",
      desc: "Eye candy UI/UX design for smooth user experience & trust building.",
      details: [
        "Wireframing & Prototyping",
        "User Interface Design",
        "User Experience Optimization",
        "Design System Implementation",
      ],
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 text-center shadow-md flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.5)" }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.desc}</p>
            </div>

            {/* Button */}
            <button
              onClick={() => setSelectedService(service)}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-full transition"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">{selectedService.title}</h2>
              <ul className="space-y-2 text-gray-200">
                {selectedService.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <FaCircle className="text-cyan-400 mt-1 text-[0.5rem]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
