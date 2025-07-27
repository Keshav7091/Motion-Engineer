import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-gradient-to-br relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[100vw] h-full opacity-40">
          <div className="absolute top-0 left-0 w-[100vw] h-[5px] bg-gradient-to-r from-transparent via-[#eefb7b]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[100vw] h-[5px] bg-gradient-to-r from-transparent via-[#eefb7b]/30 to-transparent"></div>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#eefb7b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#eefb7b]/5 rounded-full blur-3xl"></div>

      <div className="px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl gap-5 font-bold font-montserrat mb-8">
            Ready to create{" "}
            <span className="shadow-text">something{" "}</span>
            extraordinary?
          </h2>

          <p className="text-gray-light font-roboto text-xl mb-12 max-w-3xl mx-auto opacity-100 transform-none">
            Let's turn your vision into reality. Our team of experts is ready to
            help you create a brand that resonates, content that engages, and
            campaigns that convert.
          </p>

          <div className="flex flex-wrap justify-center gap-6 opacity-100 transform-none">
                 
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-10 py-7 h-11 rounded-md bg-[#eefb7b] text-black text-lg font-montserrat tracking-wide transition-all duration-300 shadow-[rgba(238,251,123,0.055)_0px_0px_0px_5.4426px] hover:bg-[#eefb7b]/90"
              >
                <span>Start Your Project</span>
                <FiArrowRight className="text-xl" />
              </Link>

              <Link
                to="/portfolio"
                className="flex items-center gap-2 px-10 py-7 h-11 rounded-md border border-[#eefb7b]/40 bg-transparent text-[#eefb7b] text-lg font-montserrat tracking-wide transition-all duration-300 hover:bg-[#eefb7b]/5 hover:text-black"
              >
                <span>View Our Work</span>
                <LuExternalLink className="text-xl" />
              </Link>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

// opacity-100 transform-none
