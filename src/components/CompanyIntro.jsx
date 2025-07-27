import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Button from "./Button";

const CompanyIntro = () => {
  return (
    <section className="text-white bg-black-theme-rich py-24 px-4 text-center">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-8 leading-tight">
          We don't just create campaigns— <br />we engineer movements.
        </h2>
        <p className="text-xl text-gray-light font-roboto mb-8 max-w-3xl mx-auto">
          Whether it's a brand that turns heads, a strategy that drives real results, or a story that
          makes people feel something, we make sure your message doesn't just reach the right people
          but stays with them.
        </p>

        <Link to="/contact" className='font-montserrat px-10'>
          <Button>
            See Our Work <FaArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CompanyIntro;
