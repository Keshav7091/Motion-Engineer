import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black py-5 bg-gradient-to-b from-black to-black/80 shadow-lg border-b">
      

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="z-50 flex items-center">
            <img
              src={logo}
              alt="Peswani Pixels Logo"
              className="h-16 md:h-20 w-auto object-contain"
              style={{ marginTop: "-19px", marginBottom: "-19px" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F2FC87] font-montserrat"
                    : "text-gray-300 hover:text-[#F2FC87] transition duration-200 font-montserrat"
                }
              >
                {item}
              </NavLink>
            ))}

            <Link to="/contact" className="font-montserrat">
              <Button>
                Get Started <IoIosArrowForward />
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu} className="text-white">
              {isMobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/40 backdrop-blur z-40 pt-16 pb-10 overflow-y-auto">
          <div className="px-6 flex flex-col space-y-5 mt-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#F2FC87] py-3 text-center text-xl font-medium font-montserrat"
                    : "py-3 text-center text-xl font-medium font-montserrat text-white"
                }
                onClick={closeMenu}
              >
                {item}
              </NavLink>
            ))}

            <Link to="/contact" onClick={closeMenu} className="flex justify-center pt-6">
              <div className="flex text-center items-center justify-center rounded-md text-sm font-medium border border-[#F2FC87] bg-black/50 text-[#F2FC87] hover:bg-[#F2FC87] hover:text-black px-[69px] py-2.5 cursor-pointer transition">
                Get a Free Consultation
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
