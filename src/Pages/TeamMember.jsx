import React from 'react';

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
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-102 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-xl hover:text-blue-500"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-xl hover:text-blue-400"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-xl hover:text-blue-600"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
