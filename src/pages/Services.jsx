import React from "react";
import VideoPlay from "../components/VideoPlay";
import { LuCircleCheckBig } from "react-icons/lu";
import { CiVideoOn } from "react-icons/ci";
import { LuLeaf } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import servicesV from "../assets/servicesV.mp4";
import { div } from "framer-motion/client";

const Services = () => {
  const serviceData = [
    {
      title: "Creative Design",
      icon: <CiVideoOn className="text-[#eefb7b] w-6 h-6" />,
      description:
        "Our design team crafts visual identities, brand guidelines, packaging, marketing collateral, and more that capture your brand's essence and connect with your audience.",
      features: [
        "Brand Identity & Logo Design",
        "Packaging Design",
        "Print & Digital Collateral",
        "UI/UX Design",
        "Illustration & Graphics",
      ],
    },
    {
      title: "Creative Design",
      icon: <CiVideoOn className="text-[#eefb7b] w-6 h-6" />,
      description:
        "Our design team crafts visual identities, brand guidelines, packaging, marketing collateral, and more that capture your brand's essence and connect with your audience.",
      features: [
        "Brand Identity & Logo Design",
        "Packaging Design",
        "Print & Digital Collateral",
        "UI/UX Design",
        "Illustration & Graphics",
      ],
    },
    {
      title: "Creative Design",
      icon: <CiVideoOn className="text-[#eefb7b] w-6 h-6" />,
      description:
        "Our design team crafts visual identities, brand guidelines, packaging, marketing collateral, and more that capture your brand's essence and connect with your audience.",
      features: [
        "Brand Identity & Logo Design",
        "Packaging Design",
        "Print & Digital Collateral",
        "UI/UX Design",
        "Illustration & Graphics",
      ],
    },
    {
      title: "Creative Design",
      icon: <LuLeaf className="text-[#eefb7b] w-6 h-6" />,
      description:
        "Our design team crafts visual identities, brand guidelines, packaging, marketing collateral, and more that capture your brand's essence and connect with your audience.",
      features: [
        "Brand Identity & Logo Design",
        "Packaging Design",
        "Print & Digital Collateral",
        "UI/UX Design",
        "Illustration & Graphics",
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description:
        "We learn about your brand, goals, audience, and challenges to understand your unique needs.",
    },
    {
      step: 2,
      title: "Strategy",
      description:
        "We develop a strategic approach tailored to your objectives and target audience.",
    },
    {
      step: 3,
      title: "Creation",
      description:
        "Our specialized teams collaborate to create compelling content that resonates with your audience.",
    },
    {
      step: 4,
      title: "Delivery",
      description:
        "We deliver the final assets and provide ongoing support to ensure successful implementation.",
    },
  ];

  return (
    <div className="pt-16">
      <VideoPlay videoSrc={servicesV} />

      <section className="py-24 bg-black-theme-poor">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-light font-roboto">
              Explore our comprehensive range of services designed to meet all
              your creative needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="bg-black-theme-card rounded-lg border border-[#eefb7b]/20 shadow-gold overflow-hidden hover-scale"
              >
                <div className="p-8 bg-neutral-900">
                  <div className="w-12 h-12 rounded-full bg-[#eefb7b]/10 flex items-center justify-center mb-6 border border-[#eefb7b]/40 ">
                    {service.icon}
                  </div>

                  <h4 className="text-xl font-semibold font-montserrat mb-3 text-white-theme-pure">
                    {" "}
                    {service.title}{" "}
                  </h4>

                  <p className="text-gray-light font-roboto mb-6">
                    {" "}
                    {service.description}{" "}
                  </p>
                  <h5 className="font-medium mb-4 text-white-theme-pure font-montserrat">
                    Key Features:
                  </h5>

                  <ul className="space-y-2">
                    {service.features.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <LuCircleCheckBig className="lucide lucide-circle-check-big w-5 h-5 text-[#eefb7b] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-light font-roboto">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black-theme-rich">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-widest text-[#eefb7b] mb-4 font-montserrat">
              Our Approach
            </h2>
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-white-theme-pure">
              The Magic Behind It
            </h3>
            <p className="text-gray-light font-roboto">
              Our streamlined process ensures efficient delivery of exceptional
              results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black-theme-card text-xl font-bold text-[#eefb7b] mb-6 border border-[#eefb7b]/30">
                    {step.step}
                  </div>

                  {index !== processSteps.length - 1 && (
                    <div className="absolute top-8 left-16 w-full h-0.5 bg-[#eefb7b]/20 hidden md:block"></div>
                  )}

                  <h4 className="text-xl font-semibold font-montserrat mb-3 text-white-theme-pure">
                    {step.title}
                  </h4>
                  <p className="text-gray-light font-roboto">{step.description}</p>
                </div>
              ))}
            </div>


          <div className="mt-16 text-center">
            <Link to="/contact" className="font-montserrat">
              <Button>
                Start Your Project <IoIosArrowForward />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
