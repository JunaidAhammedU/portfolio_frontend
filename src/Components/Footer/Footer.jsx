import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
//------------------------------------------------

const Footer = () => {
  return (
    <>
      <div className="text-neutral-content">
        <div className="flex  justify-center items-center mb-2 gap-3 text-xl text-black/80">
          <a href="https://www.linkedin.com/in/junaid-ahammed/"><FaLinkedinIn className="hover:text-black transition duration-300 cursor-pointer" /></a>
          <a href="https://wa.me/918592963337"><IoLogoWhatsapp className="hover:text-black transition duration-300 cursor-pointer" /></a>
          <a href="https://github.com/JunaidAhammedU"><FaGithub className="hover:text-black transition duration-300 cursor-pointer" /></a>
        </div>
        <div>
          <p className="text-black text-center text-xs">Copyright © 2024 - All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
