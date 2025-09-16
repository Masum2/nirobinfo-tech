import React from "react";
import { FaFacebookF, FaYoutube , FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/images/logo1.png" alt="logo" className="w-14 h-14" />
            <h2 className="text-xl font-bold text-white">
              Nirob <span className="text-[#38B6FF]">InfoTech LTD</span>
            </h2>
          </div>
          <p className="mt-4 text-sm text-gray-400">
           
            <span style={{fontWeight:'bold'}}>Empowering the Tech Flow ✦</span><br></br> Delivering creative solutions with modern design & technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#ED8A12]">Home</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">About Us</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">Team</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">Services</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#ED8A12]">Web Development</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">Mobile App</a></li>
            <li><a href="#" className="hover:text-[#ED8A12]">Branding</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880 1234 567 890</p>
          <p className="text-sm">✉ info@nirobitech.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61580539836179" className="p-2 bg-gray-700 hover:bg-[#38B6FF] rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/nirob-infotech-ltd/" className="p-2 bg-gray-700 hover:bg-[#38B6FF] rounded-full transition">
           <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/nirob_infotech/" className="p-2 bg-gray-700 hover:bg-[#38B6FF] rounded-full transition">
             
                 <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCqhnuQwJ62CQkJ-0aY8nslw" className="p-2 bg-gray-700 hover:bg-[#38B6FF] rounded-full transition">
              <FaYoutube  />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nirob InfoTech LTD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
