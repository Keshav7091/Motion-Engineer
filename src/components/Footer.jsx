import React from "react";
import { Link } from "react-router-dom";

import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { li } from "framer-motion/client";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black-theme-poor text-white pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-danger/70 to-transparent "></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-xl font-montserrat font-semibold mb-6 shadow-text">
                PESWANI PIXELS
              </h3>
              <p className="text-gray-light font-roboto mb-6">
                A bouquet of creative companies delivering exceptional creative,
                photography, ads and films, digital, social and website
                solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: FiInstagram,
                    link: "https://www.instagram.com/peswanipixels/",
                  },
                  {
                    icon: FiFacebook,
                    link: "https://www.facebook.com/peswanipixels/",
                  },
                  {
                    icon: FiLinkedin,
                    link: "https://www.linkedin.com/in/himanshu-peswani-7a3371345/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  },
                  {
                    icon: FiYoutube,
                    link: "https://www.youtube.com/peswanipixels",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white hover:bg-[#f10000] transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <item.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-montserrat font-semibold mb-6 text-danger inline-flex items-center">
                <span className="w-6 h-px bg-danger mr-2"></span>
                Quick Links
              </h3>

              <ul className="space-y-3">
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/about" },
                  { name: "Services", link: "/services" },
                  { name: "Portfolio", link: "/portfolio" },
                  { name: "Contact", link: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-gray-light hover:text-[#f10000] font-roboto hover:translate-x-1 inline-block transition-transform"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-montserrat font-semibold mb-6 text-danger inline-flex items-center">
                <span className="w-6 h-px bg-danger mr-2"></span>
                Services
              </h3>

              <ul className="space-y-3">
                {[
                  "Social Media Management",
                  "Video Editing",
                  "Website Design & Hosting",
                  "Performance Marketing",
                  "Graphic Design",
                  "Cafe Shoot & SMM",
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-light font-roboto">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-fit">
              <h3 className="text-lg font-montserrat font-semibold mb-6 text-danger inline-flex items-center">
                <span className="w-6 h-px bg-danger mr-2"></span>
                Contact Us
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start group">
                  <IoMdMail className="lucide lucide-mail w-5 h-5 text-danger mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="mailto:peswanipixels@gmail.com"
                    className="text-gray-light font-roboto group-hover:text-[#f10000] transition-colors"
                  >
                    peswanipixels@gmail.com
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoMdCall className="lucide lucide-phone w-5 h-5 text-danger mr-3 mt-0.5 group-hover:animate-pulse" />
                  <a
                    href="tel:+91 9468500300"
                    className="text-gray-light font-roboto group-hover:text-[#f10000] transition-colors"
                  >
                    +91 9468500300
                  </a>
                </li>
                <li className="flex items-start group">
                  <IoLocationSharp className="lucide lucide-map-pin w-5 h-5 text-danger mr-3 mt-0.5 group-hover:animate-pulse" />
                  <span className="text-gray-light font-roboto group-hover:text-[#f10000] transition-colors">
                    G1, Elite Homes , Block-A, Sitaram Vihar, Patrakar Colony,
                    Jaipur
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black-theme-rich text-center">
          <p className="text-gray-light text-sm font-roboto">
            © 2025 <span className="text-danger">PESWANI PIXELS </span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
