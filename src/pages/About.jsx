import React from 'react'
import VideoPlay from '../components/VideoPlay'
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import AboutV from "../assets/AboutV.mp4";
import peopleImage from "../assets/peopleImage.webp";
import manish from "../assets/manish.webp"
import Nihal from "../assets/Nihal.webp"


const About = () => {
  return (
    <div className='pt-16'>
      <VideoPlay videoSrc={AboutV} />
      <section className='py-24 bg-black text-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='prose prose-invert max-w-none'>
                <h3 className='text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight'>
                  About ME{" "}
                  <span className='relative inline-block ml-1'>
                    <span className='text-[#eefb7b] gold-glow text-3xl relative z-10'><FaHeart /></span>
                    <span className='absolute -inset-0.5 blur-[6px] bg-[#eefb7b]/40 rounded-full animate-pulse z-0'></span>
                    <span className='absolute -inset-1 blur-[12px] bg-[#eefb7b]/20 rounded-full animate-pulse z-0 delay-75'></span>
                  </span>
                </h3>

                <p className='text-gray-light font-roboto mb-6 text-lg italic'>
                  Ever seen a brand and thought, Damn, that's genius? That's what we're here to create, or at least try our best to! 🤞
                </p>
                <h4 className='text-xl font-montserrat text-[#eefb7b] mb-4'>Origin of Motion Engineers, the boutique agency...</h4>
                <p className='text-gray-light font-roboto mb-4 font-medium'>We believe that storytelling isn't just an art—it's science.</p>

                <p className='text-gray-light font-roboto mb-4'>
                  After working on{" "}
                  <span className='text-[#eefb7b]'>250+ brands</span>
                  {" "}and{" "}
                  <span className='text-[#eefb7b]'>1,000+ projects</span>
                  {" "}in different roles, across different industries, we had an idea—why not bring our expertise together?
                </p>

                <p className='text-gray-light font-roboto mb-4'>Each of us has spent years shaping brands in our own way, but we realized that the real magic happens when strategy, creativity, and technology work in sync. So, we built Motion Engineers, blending our individual experiences into one powerhouse solution.</p>

                <p className='text-gray-light font-roboto mb-4'>ME is a dream brought to life by a collective of passionate creatives—designsmiths, brandsmiths, techsmiths and more like-minded pros—all under one roof—because we believe great branding should be seamless, not scattered, offering end-to-end brand solutions under one roof.</p>

                <p className='text-gray-light font-roboto mb-6'>We wanted to engineer motion—not just in ads, but in the way people experience stories. Hence, we structured ME to merge creativity with the latest technology, ensuring that every project we touch is fresh, dynamic, and ahead of the curve. Whether you think of us as a collective or focus on our individual expertise, our mission remains the same—to create memorable brand experiences that move people.</p>

                <h4 className='text-xl font-montserrat text-[#eefb7b] mb-4'>Our process? Strategy meets design meets tech.</h4>

                <p className='text-gray-light font-roboto mb-4'>Think of us as your creative pit crew—here to fine-tune, rev up, and launch your brand and story with serious impact.</p>

                <p className='text-gray-light font-roboto mb-6'>So, if you're ready to build a brand that moves with the times (and ahead of them), let's make it happen.</p>

                <p className='text-gray-light font-roboto italic text-right'>-Love, ME.</p>
              </div>


              <div className='relative aspect-square md:aspect-auto md:h-[600px]'>
                <img src={peopleImage} alt="Agency studio" className='w-full h-full object-cover rounded-lg shadow-text border ' />

                <div className='absolute -bottom-6 -right-6 w-56 h-56 bg-neutral-900 border border-[#eefb7b]/40 rounded-lg p-6 flex items-center justify-center'>
                  <div className='text-center'>
                    <p className='text-5xl font-bold font-montserrat text-[#eefb7b] shadow-text'>10+</p>

                    <p className='text-gray-light font-roboto mt-2'>Years of Creative Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className='py-24 bg-black text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/70 z-0'></div>
        <div className='absolute top-0 left-0 w-full h-[2px] overflow-hidden'>
          <div className='w-1/2 h-full bg-gradient-to-r from-transparent via-[#eefb7b]/70 to-transparent animate-gold-pulse'></div>
        </div>

        <div className='absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[#eefb7b]/5 blur-3xl'></div>
        <div className='absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-[#eefb7b]/5 blur-3xl'></div>

        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='text-center mb-16 opacity-100 transform-none'>
              <h2 className='text-3xl md:text-4xl font-bold font-montserrat mb-4 tracking-tight'>
                Meet Our{" "}
                <span className='shadow-text'>Team</span>
              </h2>
              <p className='text-gray-light font-roboto max-w-2xl mx-auto'>The creative minds behind Motion Engineers, committed to crafting exceptional brand experiences.</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto'>

            {/** CEO profile */}
            <div className='relative z-10 group opacity-100 transform-none'>
              <div className="relative overflow-hidden h-full">
                <div className='relative aspect-[9/16] overflow-hidden'>
                  <img src={manish} alt="" className='w-full h-full object-cover transition-all duration-500' />

                  <div className='absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 p-8 opacity-0 md:group-hover:opacity-100'>
                    <div className='max-w-xs'>
                      <h3 className='text-white-theme-pure text-2xl font-bold font-montserrat mb-1'>Manish Chaudhary</h3>

                      <span className='text-[#eefb7b] text-lg font-medium tracking-wide font-montserrat mb-4 inline-block'>CEO</span>

                      <p className='text-[#eefb7b] font-medium text-center mb-1 font-montserrat'>Founder. Visual storyteller. People-first builder.</p>

                      <p className='text-white-theme-pure font-roboto text-center'>From editing suites to film sets, Manish has spent years crafting stories that connect. Now, he brings creative minds and cutting-edge tech together under one roof — building an agency where everyone grows, and wins, together.</p>
                    </div>
                  </div>
                </div>

                <div className='text-center mt-3'>
                  <div className='text-[#eefb7b] text-lg font-medium tracking-wide font-montserrat'>
                    Design-smith
                  </div>
                </div>
              </div>
            </div>

            {/** CTO Profile */}
            <div className='relative z-10 group opacity-100 transform-none'>
              <div className="relative overflow-hidden h-full">
                <div className='relative aspect-[9/16] overflow-hidden'>
                  <img src={Nihal} alt="" className='w-full h-full object-cover transition-all duration-500' />

                  <div className='absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 p-8 opacity-0 md:group-hover:opacity-100'>
                    <div className='max-w-xs'>
                      <h3 className='text-white-theme-pure text-2xl font-bold font-montserrat mb-1'>Nihal Singh</h3>

                      <span className='text-[#eefb7b] text-lg font-medium tracking-wide font-montserrat mb-4 inline-block'>CTO</span>

                      <p className='text-[#eefb7b] font-medium text-center mb-1 font-montserrat'>Tech visionary. Systems thinker. Founding builder.</p>

                      <p className='text-white-theme-pure font-roboto text-center'>An IITian with deep expertise in generative AI, Nihal leads our entire technology vertical — building scalable systems and pushing the boundaries of what's possible. Off the clock, you'll likely find him deep in an FPS match, as precise with strategy as he is with code.</p>
                    </div>
                  </div>
                </div>

                <div className='text-center mt-3'>
                  <div className='text-[#eefb7b] text-lg font-medium tracking-wide font-montserrat'>
                    Tech-smith
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-20 text-center'>

            <Link to="/contact" className="font-montserrat">
              <Button>
                Join Our Team <IoIosArrowForward />
              </Button>
            </Link>

          </div>

        </div>
      </section>
    </div>
  )
}

export default About
