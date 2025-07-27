import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ProjectHighlights = () => {
  const expertiseHighlights = [
    {
      icon: "👨‍💼",
      title: "Industry Experts",
      subtitle: "10+ Years Combined Experience",
      description: "Our team has led top campaigns across India and beyond.",
      highlight: "250+ successful Brands delivered",
    },
    {
      icon: "💡",
      title: "Creative Strategies",
      subtitle: "Innovation Meets Impact",
      description:
        "We bring unique ideas that turn heads and drive real results.",
      highlight: "100+ viral campaigns executed",
    },
    {
      icon: "🚀",
      title: "Performance Driven",
      subtitle: "Focused on ROI",
      description:
        "Every step we take is backed by data and focused on outcomes.",
      highlight: "5x Average Return on Investment",
    },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#eefb7b"
                stroke-width="0.5"
                opacity="0.3"
              ></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>

      {/** Boxes in Background */}
      <div className="absolute top-20 left-20 border border-[#eefb7b]/20 w-32 h-32 animate-float-delay"></div>
      <div className="absolute bottom-20 right-20 border border-[#eefb7b]/20 w-48 h-48 animate-float"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#eefb7b]/10 to-transparent blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-1/4 w-24 h-24 border border-[#eefb7b]/30 rounded-full"></div>
      <div className="absolute top-10 right-1/4 w-20 h-20 border border-[#eefb7b]/30"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-l from-[#eefb7b]/5 to-transparent blur-3xl rounded-full"></div>

      {/* <div class="absolute inset-0 overflow-hidden opacity-30">
        <div
          class="absolute bg-[#eefb7b]/30 rounded-full"
          style="top: 74.0589%; left: 20.0638%; width: 2.90234px; height: 4.77572px; animation: 6.85558s ease-in-out 0s infinite alternate none running float;"
        ></div>
        <div
          class="absolute bg-[#eefb7b]/30 rounded-full"
          style="top: 73.0624%; left: 40.1653%; width: 2.49976px; height: 4.81029px; animation: 7.24411s ease-in-out 0s infinite alternate none running float;"
        ></div>
        <div
          class="absolute bg-[#eefb7b]/30 rounded-full"
          style="top: 96.4245%; left: 60.3223%; width: 2.32157px; height: 7.90525px; animation: 8.97444s ease-in-out 0s infinite alternate none running float;"
        ></div>
        <div
          class="absolute bg-[#eefb7b]/30 rounded-full"
          style="top: 17.0044%; left: 71.1725%; width: 6.51566px; height: 7.29062px; animation: 7.58764s ease-in-out 0s infinite alternate none running float;"
        ></div>
        <div
          class="absolute bg-[#eefb7b]/30 rounded-full"
          style="top: 69.2078%; left: 5.76672%; width: 2.65409px; height: 5.14498px; animation: 5.7677s ease-in-out 0s infinite alternate none running float;"
        ></div>
      </div> */}

      {/** Text */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gap-5 font-montserrat mb-6 tracking-tight text-white-theme-pure text-center">
            <span>What Makes Us </span>
            <span className="shadow-text relative inline-block">
              Different
              <span className="absolute -bottom-1 left-0 h-[2px] bg-[#eefb7b]/30 w-[100%]"></span>
            </span>
          </h2>

          <p className="text-gray-light font-roboto text-lg mb-16 text-center max-w-3xl mx-auto opacity-100 transform-none">
            We're not just another creative agency. We're a team of passionate
            storytellers and technical experts who've mastered the art of making
            brands unforgettable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {expertiseHighlights.map((item, index) => (
              <div
                key={index}
                className="group relative opacity-100 transform-none"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-[#eefb7b]/0 via-[#eefb7b]/10 to-[#eefb7b]/0 rounded-lg opacity-0 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-500 -z-10"></div>

                <div className="bg-black-theme-card p-10 rounded-lg border border-[#eefb7b]/20 hover:border-[#eefb7b]/40 transition-all duration-300 hover:shadow-glow-sm flex flex-col items-center text-center h-full group-hover:bg-[#0c0c0c] relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-[#eefb7b]/10 w-24 h-4 -right-6 top-6"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-[#eefb7b]/10 w-24 h-4 -left-6 bottom-6"></div>
                  </div>
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#eefb7b]/5 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-[#eefb7b]/5 rounded-full blur-xl opacity-50"></div>
                    <div className="relative z-10 w-20 h-20 rounded-full border-2 border-[#eefb7b]/30 p-1 group-hover:border-[#eefb7b]/50 transition-all duration-300">
                      <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div
                      className="absolute -z-10 inset-0 rounded-full"
                      style={{
                        boxShadow:
                          "rgba(238, 251, 123, 0.055) 0px 0px 0px 5.4426px",
                      }}
                    ></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4 text-white-theme-pure group-hover:text-[#eefb7b] transition-colors duration-300">
                    {" "}
                    {item.title}{" "}
                  </h3>

                  <div className="mb-4 px-4 py-1.5 bg-[#eefb7b]/10 rounded-full inline-block">
                    <p className="text-sm text-[#eefb7b] font-medium tracking-wide">
                      {" "}
                      {item.subtitle}{" "}
                    </p>
                  </div>
                  <p className="text-gray-light font-roboto group-hover:text-gray-100 transition-colors duration-300 mb-6">
                    {" "}
                    {item.description}{" "}
                  </p>

                  <div className="mt-auto mb-2 bg-black-theme-pure/50 px-6 py-3 rounded-lg w-full border border-[#eefb7b]/10 group-hover:border-[#eefb7b]/20 transition-all duration-300">
                    <p className="text-sm font-medium text-[#eefb7b]">
                      {" "}
                      {item.highlight}{" "}
                    </p>
                  </div>

                  <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-[#eefb7b]/20 to-transparent opacity-100 transform-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md border-2 border-[#eefb7b] bg-transparent px-10 py-6 h-10 text-sm font-medium tracking-wide text-[#eefb7b] transition-all duration-500 hover:text-black focus:outline-none font-montserrat group">
            
            <span className="absolute left-0 top-0 h-full w-0 bg-[#eefb7b] transition-all duration-500 ease-in-out group-hover:w-full z-0" />

            <span className="relative z-10">Let's Work Together</span>
            <FiArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;


