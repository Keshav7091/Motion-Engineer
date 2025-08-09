import React from "react";
import VideoPlay from "../components/VideoPlay";

import People from "/brands/com1.webp";

import portfolioV from "../assets/portfolioV.mp4";
// import PortfolioScroller from '../components/PortfolioScroller';

const services = [
  {
    name: "Video Service",
    buttonText: "Watch Now",
    media: [
      { type: "video", src: { VideoPlay } },
      { type: "video", src: { VideoPlay } },
    ],
  },
  {
    name: "Image Service",
    buttonText: "View Images",
    media: [
      { type: "image", src: { People } },
      { type: "image", src: { People } },
    ],
  },
  {
    name: "PDF Service",
    buttonText: "Download PDF",
    media: [{ type: "pdf", src: "/docs/sample.pdf" }],
  },
];

const Portfolio = () => {
  return (
    <div className="pt-16">
      <VideoPlay videoSrc={portfolioV} />

      <section className="py-24 bg-black-theme-rich text-white-theme-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
              1000+ <span className="text-danger">Exceptional </span>
              Projects
            </h2>
            <p className="text-xl text-gray-light font-roboto mb-8">
              Explore our collection of creative work that showcases our
              expertise across various disciplines. Each project represents our
              commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* <PortfolioScroller /> */}


      {/** services */}
      
      {/* <section className="space-y-12 px-4 md:px-8 lg:px-16 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black border border-purple-500 rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-6"
          >
            
            <div className="flex flex-col justify-between w-full md:w-1/2">
              <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">
                {service.name}
              </h2>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                {service.buttonText}
              </button>
            </div>

           
            <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
              {service.media.map((item, i) => {
                if (item.type === "video") {
                  return (
                    <video
                      key={i}
                      src={item.src}
                      controls
                      className="w-full h-32 md:h-40 rounded-lg object-cover bg-gray-800"
                    />
                  );
                }
                if (item.type === "image") {
                  return (
                    <img
                      key={i}
                      src={item.src}
                      alt={`media-${i}`}
                      className="w-full h-32 md:h-40 rounded-lg object-cover bg-gray-800"
                    />
                  );
                }
                if (item.type === "pdf") {
                  return (
                    <a
                      key={i}
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gray-800 rounded-lg text-white font-medium hover:bg-red-600 transition"
                    >
                      📄 View PDF
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </section> */}
      
    </div>
  );
};

export default Portfolio;
