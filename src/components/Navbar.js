// Navbar.js
import React, { useState } from "react";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-black p-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white flex items-center">
          {/* <img src="/path/to/logo.png" alt="Logo" className="mr-2 h-8" /> */}
          <div className="mr-2 h-8  hover:text-yellow-800 transition duration-300 ease-in-out text-white font-semibold">
            <HiComputerDesktop />
          </div>

          <div>
            <div className="text-2xl font-extrabold ">Hi-Technic</div>
            <div className="text-sm ml-6 font-semibold font-serif z-10 text-blue-300">
              Systems and Services
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-12">
          <a
            href="#home"
            className="hover:text-blue-300 transition duration-300 ease-in-out text-white font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-300 transition duration-300 ease-in-out text-white font-semibold"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-blue-300 transition duration-300 ease-in-out text-white font-semibold"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-blue-300 transition duration-300 ease-in-out text-white font-semibold"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-5">
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
        </div>

        {/* Add responsive menu button for small screens */}
        <div className="md:hidden cursor-pointer">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Responsive navigation links */}
        {showMenu && (
          <div className="md:hidden absolute top-12 left-0 right-0 bg-black p-5">
            <a href="#home" className="text-white font-bold block mb-2">
              Home
            </a>
            <a href="#about" className="text-white font-bold block mb-2">
              About
            </a>
            <a href="#services" className="text-white font-bold block mb-2">
              Services
            </a>
            <a href="#contact" className="text-white font-bold block">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
