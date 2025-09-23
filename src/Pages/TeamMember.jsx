import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "K M Ramjan Ali",
    title: "Chairman",
    role: "Managing Director",
    company: "Nirob InfoTech LTD",
    company2: "Nirob Trading Corporation",
    company3: "Kumkum Construction",
    company4: "Nirob Agro Care LTD",
    image: "/images/ramzan.jpeg",
  },
  {
    name: "K M Yeaser Arafat",
    title: "Managing Director & CEO",
    role: "Director & CEO",
    company: "Nirob InfoTech LTD",
    company2: "Nirob Trading Corporation",
    company3: "Kumkum Construction",
    company4: "Nirob Agro Care LTD",
    image: "/images/arafat.jpeg",
  },
  {
    name: "Md. Tariqul Islam",
    title: "Advising Director",
    role: "",
    company: "Nirob InfoTech LTD",
    image: "/images/tarik.jpeg",
  },
  {
    name: "Wahid Anwar",
    title: "Advisor",
    role: "",
    company: "Nirob InfoTech LTD",
    image: "/images/wahid.jpeg",
    social: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Shoaibur Rahman Badhon",
    title: "General Manager",
    role: "",
    company: "Nirob InfoTech LTD",
    image: "/images/badhon.jpeg",
  },
  {
    name: "Tanvir Anjum Neon",
    title: "IT Executive",
    role: "",
    company: "Nirob InfoTech LTD",
    image: "/images/Neon.jpeg",
  },
  {
    name: "Muhammad Nazmus Sakib Prachurjo",
    title: "Digital Executive",
    role: "",
    company: "Nirob InfoTech LTD",
    image: "/images/Sakib.jpeg",
  },
  {
    name: "Mohiuddin Mohi",
    title: "Marketing Executive",
    role: "",
    company: "Nirob InfoTech LTD",
    image: "/images/mohi.jpeg",
  },
];

const TeamMember = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
          <motion.div
  key={index}
  whileHover={{ scale: 1.05 }}
  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-700"
>
  {/* Image Section */}
  <div className="relative w-full h-64">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover object-top rounded-t-2xl"
    />
  </div>

  {/* Text Section */}
  <div className="p-3 text-center">
    <h3 className="text-xl font-bold text-gray-100 mb-2">{member.name}</h3>

    {index < 2 ? (
      <>
        {member.title && <p className="text-gray-100">{member.title}</p>}
        {member.company && <p className="text-gray-100">{member.company}</p>}
        {member.role && <p className="text-gray-100">{member.role}</p>}
        {member.company2 && <p className="text-gray-100">{member.company2}</p>}
        {member.company3 && <p className="text-gray-100">{member.company3}</p>}
        {member.company4 && <p className="text-gray-100">{member.company4}</p>}
      </>
    ) : (
      <>
        {member.title && <p className="text-gray-100">{member.title}</p>}
        {member.company && (
          <p className="text-gray-100 text-sm">{member.company}</p>
        )}
        {member.role && <p className="text-gray-100">{member.role}</p>}
      </>
    )}
  </div>
</motion.div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
