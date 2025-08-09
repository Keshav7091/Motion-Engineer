import React, { useState } from "react";
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

  // Updated with name + path (space in Business Profile)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Business Profile", path: "/businessprofile" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black py-5 bg-gradient-to-b from-black to-black/80 shadow-lg border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="z-50 group">
            <h1 className="text-xl md:text-2xl font-bold font-montserrat tracking-tight">
              <span className="text-white-theme-pure">
                PESWANI{" "}
                <span className="text-[#eefb7b] group-hover:animate-[#eefb7b] shadow-text">
                  PIXELS
                </span>
              </span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-danger font-montserrat"
                    : "text-gray-300 hover:text-[#f10000] transition duration-200 font-montserrat"
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link to="/contact" className="font-montserrat">
              <Button>
                Get Started <IoIosArrowForward />
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu} className="text-white">
              {isMobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/75 backdrop-blur z-40 pt-16 pb-10 overflow-y-auto">
          <div className="px-6 flex flex-col space-y-5 mt-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "block text-danger py-3 text-center text-xl font-medium font-montserrat"
                    : "py-3 text-center text-xl font-medium font-montserrat text-white"
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}

            <Link to="/contact" onClick={closeMenu} className="flex justify-center pt-6">
              <div className="flex text-center items-center justify-center rounded-md text-sm font-medium border border-danger bg-black/50 text-danger hover:bg-[#f10000] hover:text-black px-[69px] py-2.5 cursor-pointer transition">
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
