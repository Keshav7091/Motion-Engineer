import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeV from '../assets/HomeV.mp4'

const LandingHero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={HomeV} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Button */}
      <div className="absolute bottom-10 right-20 z-20">
        <Link to="/portfolio" className="flex items-center gap-5 bg-danger text-black px-10 py-3 rounded-lg shadow-lg font-semibold text-sm group">
          Let's Peswani Pixels Your Next Move
          <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      </div>
    </section>
  )
}

export default LandingHero;
