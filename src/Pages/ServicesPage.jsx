import React, { useState } from "react";
import DevelopmentProcess from "../sections/DevelopemntProcess";

const ServicesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const cards = [
    {
      title: "Website Development & Services",
      text: "We build fast, responsive, and user-friendly websites—from custom design and WordPress/Shopify to e-commerce and maintenance.",
      image: "/images/service1.png",
      bg: "bg-[#38B6FF]",
      list: [
        "Website Development (Static & Dynamic)",
        "Custom Web Design",
        "WordPress Development",
        "Shopify Development",
        "E-Commerce Website",
        "Website Maintenance",
      ],
    },
    {
      title: "Application Development",
      text: "We create scalable web, desktop, and mobile apps, along with 2D/3D solutions, chatbots, and browser extensions.",
      image: "/images/service2.png",
      bg: "bg-orange-500",
      list: [
        "Web Applications (e.g., Admin Panels, SaaS)",
        "Desktop Applications (Windows/Linux/iOS)",
        "Mobile Applications (Android/iOS)",
        "App Maintenance",
        "Game Development (2D/3D)",
        "Chatbot Development",
        "Browser Extension Development",
      ],
    },
    {
      title: "Software Solutions",
      text: "Custom business software, CRM, banking, and industrial apps—ensuring quality, security, and reliable performance.",
      image: "/images/service3.png",
      bg: "bg-indigo-700",
      list: [
        "Custom Software Development",
        "Software Quality Assurance, Maintenance & Support",
        "Plugin/Add-on Development",
        "Cross-platform Solutions",
      ],
    },
    {
      title: "UI/UX Design",
      text: "We design intuitive, responsive, and user-friendly interfaces that improve customer satisfaction and engagement.",
      image: "/images/service4.png",
      bg: "bg-orange-500",
      list: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Responsive Design",
      ],
    },
    {
      title: "Data Solutions",
      text: "We turn raw data into insights with big data, analytics, and business intelligence solutions for smarter decisions.",
      image: "/images/service5.png",
      bg: "bg-blue-700",
      list: [
        "Data Preprocessing & Cleaning",
        "Data Analytics & Reporting",
        "Data Mining & Pattern Recognition",
        "Big Data Handling",
      ],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      text: "AI apps powered by NLP, computer vision, and predictive analytics—helping businesses automate and grow smarter.",
      image: "/images/service6.png",
      bg: "bg-teal-700",
      list: [
        "AI-Powered Applications",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Predictive Analytics",
      ],
    },
    {
      title: "Cloud Solutions",
      text: "Scalable cloud setup, migration, app development, and optimization to ensure secure and cost-efficient operations.",
      image: "/images/service8.png",
      bg: "bg-[#38B6FF]",
      list: [
        "Cloud Setup & Migration",
        "Cloud App Development",
        "Cloud Optimization & Security",
      ],
    },
    {
      title: "Blockchain Solutions",
      text: "Smart contracts, decentralized apps, NFT platforms, and consulting to bring blockchain power to your business.",
      image: "/images/service7.png",
      bg: "bg-teal-700",
      list: [
        "Smart Contract Development",
        "Blockchain-based App (DApps) Development",
        "NFT Platform Development",
        "Tokenization & Crypto Wallet Integration",
        "Blockchain Consulting",
      ],
    },
    {
      title: "Automation & IoT Solutions",
      text: "Smart device integration, IoT apps, process automation, and analytics for efficient, connected operations.",
      image: "/images/service9.png",
      bg: "bg-indigo-700",
      list: [
        "Smart Device Integration",
        "IoT Applications",
        "Process Automation",
        "Analytics for Connected Operations",
      ],
    },
    {
      title: "Research & Development",
      text: "We research, prototype, and test IT solutions to solve real challenges—delivering reliable innovations.",
      image: "/images/service10.png",
      bg: "bg-orange-500",
      list: [
        "Prototype Development",
        "Technical Feasibility Studies",
        "Innovation Lab Services",
      ],
    },
    {
      title: "Digital Solution & Branding",
      text: "From ads and content to SEO, social media, and branding—we build strategies that grow your business online.",
      image: "/images/service11.png",
      bg: "bg-teal-700",
      list: [
        "Media Buying (Facebook Ads, Google Ads, etc.)",
        "Content Creation (Copywriting, Video, Graphics)",
        "Branding & Digital Promotion",
        "Social Media Management",
        "SEO (Search Engine Optimization)",
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <img
          src="/images/services.png"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Services</h1>
        </div>
      </div>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-gray-800 flex flex-col transform hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Heading with colored background */}
            <div className={`${card.bg} p-4`}>
              <h3 className="text-[13px] md:text-[15px] font-bold text-white text-center">
                {card.title}
              </h3>
            </div>

            {/* Text Section */}
            <div className="p-6 flex-grow">
              <p className="text-sm leading-relaxed text-gray-300">{card.text}</p>

              {/* Read More */}
              {card.list && (
                <div>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-4 font-bold text-blue-400 hover:underline"
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>

                  {/* Expandable List */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <ul className="text-gray-300 mt-2 space-y-1">
                      {card.list.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="mr-2 text-blue-400">→</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Image Section */}
            <div className="h-48 flex items-center justify-center bg-gray-900">
              <img
                src={card.image}
                alt={card.title}
                className="h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <DevelopmentProcess />
    </div>
  );
};

export default ServicesPage;
