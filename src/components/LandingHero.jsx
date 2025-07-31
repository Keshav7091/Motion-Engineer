import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const LandingHero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../assets/video_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Button */}
      <div className="absolute bottom-10 right-20 z-20">
        <button className="flex items-center gap-5 bg-danger text-black px-10 py-3 rounded-lg shadow-lg font-semibold text-sm group">
          Let's Engineer Your Next Move
          <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
        </button>
      </div>
    </section>
  )
}

export default LandingHero;
