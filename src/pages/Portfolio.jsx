import React from 'react'
import VideoPlay from "../components/VideoPlay";

import portfolioV from "../assets/portfolioV.mp4";
import PortfolioScroller from '../components/PortfolioScroller';




const Portfolio = () => {

  return (
    <div className='pt-16'>

      <VideoPlay videoSrc={portfolioV} />

      <section className='py-24 bg-black-theme-rich text-white-theme-pure'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight'>
              1000+ {" "}
              <span className='text-danger'>Exceptional {" "}</span>
              Projects
            </h2>
            <p className='text-xl text-gray-light font-roboto mb-8'>Explore our collection of creative work that showcases our expertise across various disciplines. Each project represents our commitment to excellence and innovation.</p>
          </div>
        </div>
      </section>

      <PortfolioScroller />

    </div>
  )
}

export default Portfolio
