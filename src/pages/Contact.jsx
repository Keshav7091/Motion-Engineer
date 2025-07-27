import React from 'react'
import VideoPlay from "../components/VideoPlay";
import contactV from "../assets/contactV.mp4";
import contactV2 from "../assets/contactV2.mp4";

const Contact = () => {
  return (
    <div className='pt-20'>
      <VideoPlay videoSrc={contactV} />

      <section className='py-24 bg-black-theme-rich text-white-theme-pure'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-12 items-center'>
              <div className='opacity-100 transform-none'>
                <h2 className='text-sm uppercase tracking-widest text-[#eefb7b] mb-4 font-montserrat'>Get in Touch</h2>
                <h3 className='text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight'>Let's Start a Conversation</h3>
                <p className='text-gray-light font-roboto mb-8'>Whether you have a project in mind or just want to explore possibilities, we're here to help. Fill out the form, and one of our team members will get back to you shortly.</p>

                <form action="" className='space-y-6'>
                  
                </form>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </section>


      <section></section>


      
      <VideoPlay videoSrc={contactV2} />
    </div>
  )
}

export default Contact
