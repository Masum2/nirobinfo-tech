import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = ['Home', 'About', 'Services', 'Companies', 'Team', 'Contact'];

  return (
    <div className="w-full">
      <header className="bg-white/5 border-b border-cyan-800/30 shadow-xl">
        <div className="mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo for mobile and desktop */}
            <div className="flex items-center">
              <div className="flex-shrink-0 relative">
                <img 
                  src='/images/logo.png' 
                  className="relative w-12 h-12 md:w-16 md:h-16 object-contain"
                  alt="Nirob InfoTech LTD Logo"
                />
              </div>
              
              {/* Company name - visible on all devices */}
              <div className="ml-3">
                <p className="font-bold text-lg md:text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Nirob InfoTech LTD
                </p>
                <p className="text-gray-300 text-[10px] md:text-xs hidden md:flex flex-wrap">
                  <span className="animate-pulse">✦</span>
                  <span className="mx-1">Empowering</span>
                  <span className="text-cyan-400 font-medium mx-1">the</span>
                  <span>Tech</span>
                  <span className="text-blue-400 font-medium mx-1">Flow</span>
                  <span className="animate-pulse">✦</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveItem(item)}
                  className={`px-4 py-2 cursor-pointer rounded-lg font-medium transition-all duration-300 ${
                    activeItem === item
                      ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Contact Button - Right for desktop */}
            <div className="hidden md:block">
<button className="group cursor-pointer relative p-[2px] rounded-lg">
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"></div>
  <div className="relative bg-gray-900 py-2 px-5 rounded-lg group-hover:bg-transparent transition-all duration-300">
    <span className="text-cyan-400 group-hover:text-white font-medium">Contact Us</span>
  </div>
</button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop with glass effect */}
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Drawer from left side */}
        <div className={`absolute top-0 left-0 h-full w-80 bg-white/20 backdrop-blur transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 h-full flex flex-col">
            {/* Drawer header with logo and close button */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center space-x-3">
                <img 
                  src='/images/logo.png' 
                  className="w-12 h-12 object-contain"
                  alt="Nirob InfoTech LTD Logo"
                />
                <div>
                  <p className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Nirob InfoTech
                  </p>
                  <p className="text-gray-300 text-xs">Empowering the Tech Flow</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-cyan-400 p-1 rounded-full"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation items */}
            <nav className="flex-1">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveItem(item);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center ${
                      activeItem === item
                        ? 'bg-cyan-600 text-white shadow-lg'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="flex-1">{item}</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </nav>

            {/* Contact button in drawer */}
            <div className="pt-6 border-t border-gray-800">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-transform duration-200 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;