import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-gray-900 border-b border-gray-700 relative">
      {/* ---------- Desktop View ---------- */}
      <div className="hidden md:flex justify-between items-center w-full">
        {/* Logo + Name */}
        <div className="flex text-2xl font-bold text-[#38B6FF]">
          <img src="/images/logo.png" style={{ width: "80px", height: "50px" }} />
          <div>
            Nirob <span className="text-[#38B6FF]">InfoTech LTD</span>
            <p className="text-gray-300 text-[5px] md:text-xs hidden md:flex flex-wrap">
              <span className="animate-pulse">✦</span>
              <span className="mx-1">Empowering</span>
              <span className="text-blue-400 font-medium mx-1">the</span>
              <span>Tech</span>
              <span className="text-blue-400 font-medium mx-1">Flow</span>
              <span className="animate-pulse">✦</span>
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-white font-medium">
           <Link to="/" className="hover:text-[#ED8A12]" >Home</Link>
          <Link to="/about" className="hover:text-[#ED8A12]">About Us</Link>
           <Link to="/team" className="hover:text-[#ED8A12]">Team</Link>
         <Link to="/services" className="hover:text-[#ED8A12]">Services</Link>
            <Link to="/companies" className="hover:text-[#ED8A12]">Companies</Link>
            <Link to="/contact" className="hover:text-[#ED8A12]">Contact</Link>
                   <Link to="/civil" className="hover:text-[#ED8A12]">Civil calculator</Link>
            
        
        </nav>

        {/* Call to Action */}
        <div >
          
        </div>
      </div>

      {/* ---------- Mobile View ---------- */}
      <div className="flex md:hidden items-center justify-between w-full">
        {/* Left: Logo */}
        <img src="/images/logo.png" alt="logo" className="w-12 h-8" />

        {/* Center: Company Name */}
        <div className="text-white text-sm font-bold">
          Nirob <span className="text-[#38B6FF]">InfoTech LTD</span>
        </div>

        {/* Right: Menu Icon */}
        <button onClick={toggleDrawer}>
          {isOpen ? <HiX size={28} className="text-white" /> : <HiMenu size={28} className="text-white" />}
        </button>
      </div>

      {/* Drawer (Mobile Only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <div className="text-xl font-bold">Menu</div>
          <button onClick={toggleDrawer}>
            <HiX size={28} />
          </button>
        </div>
        <nav className="flex flex-col mt-4 space-y-4 px-4">
       
              <Link to="/" className="hover:text-[#ED8A12]" onClick={toggleDrawer}>Home</Link>
          <Link to="/about" className="hover:text-[#ED8A12]" onClick={toggleDrawer}>About Us</Link>
           <Link to="/team" className="hover:text-[#ED8A12]" onClick={toggleDrawer}>Team</Link>
         <Link to="/services" className="hover:text-[#ED8A12]" onClick={toggleDrawer}>Services</Link>
            <Link to="/companies" className="hover:text-[#ED8A12]" onClick={toggleDrawer}>Companies</Link>
            <Link to="/contact" className="hover:text-[#ED8A12]" onClick={toggleDrawer}>Contact</Link>
        </nav>
      </div>

      {/* Overlay */}
   {isOpen && (
  <div
    className="fixed inset-0 bg-black/30 z-30"   // <-- এখানে opacity কমালাম
    onClick={toggleDrawer}
  ></div>
)}
    </header>
  );
};

export default Header;
