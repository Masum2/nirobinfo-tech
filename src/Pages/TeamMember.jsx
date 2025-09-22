import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const teamMembers = [
  {
    name: "K M Ramjan Ali",
    role: "Chairman, Managing Director",
    image: "/images/ramzan.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "K M Yeaser Arafat",
    role: "Managing Director & CEO",
    image: "/images/arafat.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Md. Tariqul Islam",
    role: "Advising Director",
    image: "/images/tarik.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Wahid Anwar",
    role: "Advisor",
    image: "/images/wahid.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Shoaibur Rahman Badhon",
    role: "General Manager",
    image: "/images/badhon.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Tanvir Anjum Neon",
    role: "IT Executive",
    image: "/images/Neon.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Muhammad Nazmus Sakib Prachurjo",
    role: "Digital Executive",
    image: "/images/Sakib.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Mohiuddin Mohi",
    role: "Marketing Executive",
    image: "/images/mohi.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
];

const TeamMember = () => {
  return (
     <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top rounded-t-2xl"
                />
                {/* <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex space-x-5">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-2xl hover:text-blue-500"
                      >
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-2xl hover:text-blue-400"
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-2xl hover:text-blue-600"
                      >
                        <FaFacebook />
                      </a>
                    )}
                  </div>
                </div> */}
              </div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
