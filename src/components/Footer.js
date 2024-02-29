import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-slate-300 text-gray py-5" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-5 mb-4 md:mb-0 my-2">
          <a
            href="https://www.linkedin.com/in/sandeep-chikane-bb314119/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-800" id="footer-icon" />
          </a>
          <a
            href="https://wa.me/9819163611
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl text-green-500" id="footer-icon" />
          </a>
          <a href="mailto:sandeep@hitechnicss.com">
            <FaEnvelope className="text-3xl text-gray-600" id="footer-icon" />
          </a>
        </div>
        <div className="text-center md:text-left">
          <p className="mb-2 font-sans font-extrabold text-black-700 text-1xl">
            @Hi-Technic Systems and Services
          </p>
          <p className="font-sans font-bold text-zinc-700 footer-address">
            Office No. 1/A, Pancharatna Apartment; NSS Road, Near Asalpha Metro
            Station, Asalpha, Ghatkopar- West, Mumbai - 400084
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
