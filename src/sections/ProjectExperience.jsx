import React from "react";
import { FaClock, FaAward, FaUsers } from "react-icons/fa"; // demo icons

const ProjectExperience = () => {
  return (
    <section className="px-6 p-10 bg-[#050614]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Item 1 */}
        <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          {/* Left: Icon */}
          <FaClock className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          {/* Right: Text */}
          <div>
            <p className="text-3xl font-bold text-white">80+</p>
            <p className="text-gray-300 text-sm">Projects Completed</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          <FaAward className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          <div>
            <p className="text-3xl font-bold text-white">5+</p>
            <p className="text-gray-300 text-sm">Years of Experience</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          <FaUsers className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          <div>
            <p className="text-3xl font-bold text-white">100+</p>
            <p className="text-gray-300 text-sm">Team Member</p>
          </div>
        </div>
           <div className="bg-gray-800/50 rounded-2xl p-6 flex items-center justify-center shadow-md hover:shadow-lg transition">
          <FaAward className="text-[#38B6FF] text-5xl mr-4 flex-shrink-0" />
          <div>
            <p className="text-3xl font-bold text-white">50+</p>
            <p className="text-gray-300 text-sm">Happy Clients

</p>
          </div>
        </div>

      </div>
       
    </section>
  );
};

export default ProjectExperience;
