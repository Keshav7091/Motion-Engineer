import React from 'react';

const VideoPlay = ({ videoSrc }) => {
  return (
    <section className='relative py-6 sm:py-8 md:py-12 bg-black text-white'>
      <div className='container mx-auto px-2 sm:px-4 md:px-6'>
        <div className='max-w-3xl mx-auto'>
          <div className='w-full max-w-2xl mx-auto rounded overflow-hidden shadow-gold'>
            <video autoPlay muted loop playsInline className='w-full h-auto'>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-[2px] overflow-hidden'>
        <div className='w-1/3 h-full bg-[#eefb7b]/70 ml-auto animate-gold-pulse'></div>
      </div>
    </section>
  );
};

export default VideoPlay;
