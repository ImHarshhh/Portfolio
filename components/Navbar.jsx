import React from "react";

const Navbar = () => {
  return (
    <header className="py-4 px-4 bg-white shadow-sm sticky top-0 z-50"> 
      <div className="max-w-[1280px] mx-auto flex flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center text-2xl font-bold text-[#1a2b4d] gap-3">
          {/* You could add a small icon/logo here if you have one */}
          <span>Harsh Chaudhari</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors"> 
            Home
          </a>
          <a href="#about" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors"> 
            Projects
          </a>
          <a href="#contact" className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

       
        <a href="#contact" className="hidden md:inline-block px-7 py-2.5 rounded-md bg-blue-600 text-white text-base font-semibold hover:bg-blue-700 transition-all">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Navbar;