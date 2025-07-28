import React from "react";
import { Link } from "react-router-dom";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { li } from "framer-motion/client";

const Footer = () => {
  return (
    <footer className="bg-black-theme-poor text-white pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#eefb7b]/70 to-transparent animate-gold-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-6 shadow-text">
              PESWANI PIXELS
            </h3>
            <p className="text-gray-light font-roboto mb-6">
              A bouquet of creative companies delivering exceptional creative,
              photography, ads and films, digital, social and website solutions.
            </p>
            <div className="flex space-x-4">
              {[FiInstagram, FiFacebook, FiLinkedin, FiYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:text-black   hover:bg-[#F2FC87] hover:shadow-text  transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-[#eefb7b] inline-flex items-center">
              <span className="w-6 h-px bg-[#eefb7b] mr-2"></span>
              Quick Links
            </h3>

            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(/\s/g, "")}`
                      }
                      className="text-gray-light hover:text-[#eefb7b] font-roboto hover:translate-x-1 inline-block transition-transform"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-[#eefb7b] inline-flex items-center">
              <span className="w-6 h-px bg-[#eefb7b] mr-2"></span>
              Services
            </h3>

            <ul className="space-y-3">
              {[
                "Creative Design",
                "Ads & Films",
                "Photography",
                "Digital Marketing",
                "Social Media",
                "Website Development",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/service"
                    className="text-gray-light hover:text-[#eefb7b] font-roboto hover:translate-x-1 inline-block transition-transform"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-[#eefb7b] inline-flex items-center">
              <span className="w-6 h-px bg-[#eefb7b] mr-2"></span>
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start group">
                <IoMdMail className="lucide lucide-mail w-5 h-5 text-[#eefb7b] mr-3 mt-0.5 group-hover:animate-pulse" />
                <span className="text-gray-light font-roboto group-hover:text-[#eefb7b] transition-colors">
                  peswanipixels@gmail.com
                </span>
              </li>
              <li className="flex items-start group">
                <IoMdCall className="lucide lucide-phone w-5 h-5 text-[#eefb7b] mr-3 mt-0.5 group-hover:animate-pulse" />
                <span className="text-gray-light font-roboto group-hover:text-[#eefb7b] transition-colors">
                  +91 9468500300
                </span>
              </li>
              <li className="flex items-start group">
                <IoLocationSharp className="lucide lucide-map-pin w-5 h-5 text-[#eefb7b] mr-3 mt-0.5 group-hover:animate-pulse" />
                <span className="text-gray-light font-roboto group-hover:text-[#eefb7b] transition-colors">
                  G1, Elite Homes , Block-A, Sitaram Vihar, Patrakar Colony, Jaipur
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black-theme-rich text-center">
          <p className="text-gray-light text-sm font-roboto">
            © 2025 <span className="text-[#eefb7b]">PESWANI PIXELS </span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
