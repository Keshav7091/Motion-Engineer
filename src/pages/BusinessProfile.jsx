import React from "react";

const services = [
  "Graphic Design",
  "Video Editing",
  "Social Media Management",
  "Meta Ads",
  "Google Ads",
  "Website Design and Hosting",
  "SEO",
  "Photography and Videography",
  "Influencer Marketing",
  "E-commerce Listing",
  "Copywriting",
  "UI/UX Design",
  "3D Animation",
  "Cafe Shoot and SMM",
  "Google Map Reviews",
  "YouTube Thumbnail",
  "WhatsApp Automation",
  "PR Services",
  "Founder's Personal Branding",
  "App Development",
];

const clientBenefits = [
  {
    title: "Tailored Solutions",
    desc: "We create customized digital strategies based on your unique brand goals.",
  },
  {
    title: "Creative Expertise",
    desc: "Our team brings innovative ideas, visual storytelling, and industry insights.",
  },
  {
    title: "Cost-Effective Services",
    desc: "We deliver high-quality solutions with pricing that fits your budget.",
  },
  {
    title: "Ongoing Support",
    desc: "We stay with you post-launch to ensure smooth operation and continued success.",
  },
  {
    title: "Tech-Driven Innovation",
    desc: "We use the latest digital tools and trends to keep you ahead in the market.",
  },
];

const BusinessProfile = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="text-white bg-black-theme-poor py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat tracking-tight">
                <span className="text-danger">Peswani Pixels </span> - Elevate
                Your Brand Digitally
              </h2>
              {/* <div className="w-24 h-1 bg-danger mt-2"></div> */}
            </div>
          </div>
          <p className="text-xl text-gray-light font-roboto mb-8 max-w-5xl mx-auto">
            We are a creative digital marketing agency based in Jaipur, India,
            specializing in innovative strategies, impactful advertising, and
            tailored solutions that drive growth.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="text-white bg-black-theme-rich py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Title */}
          <div className="max-w-5xl mx-auto mb-24 text-center">
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat tracking-tight">
                  <span className="text-danger">About</span> Us
                </h2>
                {/* <div className="w-24 h-1 bg-danger mt-2"></div> */}
              </div>
            </div>
            <p className="text-gray-light font-roboto text-lg">
              At Peswani Pixels, we are more than just a digital marketing
              agency — we are your creative growth partner in the fast-paced
              digital world. From brand building to SEO, social media, and
              performance marketing, we help brands thrive online with
              purposeful strategies and consistent execution.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="text-white bg-black-theme-poor py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Title */}
          <div className="max-w-5xl mx-auto mb-24 text-center">
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold font-montserrat tracking-tight">
                  <span className="text-danger">Welcome </span> Message
                </h2>
                {/* <div className="w-24 h-1 bg-danger mt-2"></div> */}
              </div>
            </div>
            <p className="text-gray-light font-roboto text-lg">
              At Peswani Pixels, we believe every brand has a unique story — and
              we’re here to help you tell it in the most impactful way. From
              building your online presence to generating leads and increasing
              engagement — we’re with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-black-theme-rich text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-center mb-8">
                <div className="inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2 tracking-tight">
                    <span className="text-danger">Our</span> Vision
                  </h2>

                  {/* <div className="w-10 h-1 bg-danger mt-2"></div> */}
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-5">
                <li>
                  To be a leading force in the digital marketing industry with
                  innovative, result-driven strategies.
                </li>
                <li>
                  To build long-term partnerships delivering measurable growth
                  and enhanced digital presence.
                </li>
              </ul>
            </div>

            <div>
              <div className="text-center mb-8">
                <div className="inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-2 tracking-tight">
                    <span className="text-danger">Our</span> Mission
                  </h2>

                  <div className="w-10 h-1 bg-danger mt-2"></div>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-5">
                <li>
                  Deliver customized solutions aligned with clients’ unique
                  goals.
                </li>
                <li>
                  Combine creativity, technology, and strategy to create
                  impactful digital experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="text-white bg-black-theme-poor py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2 tracking-tight">
                <span className="text-danger">Our</span> Services
              </h2>

              {/* <div className="w-16 h-1 bg-danger mt-2"></div> */}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-white transition-all duration-300 
                     transform hover:scale-105 hover:!text-[#f10000] 
                     bg-black-theme-rich text-white text-lg"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="text-white bg-black-theme-rich py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center mb-8">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-2 tracking-tight">
                <span className="text-danger">Client</span> Benefits
              </h2>
              {/* <div className="w-24 h-1 bg-danger mt-2"></div> */}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientBenefits.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-white/20 bg-black-theme-poor 
                         hover:scale-105 hover:bg-[#f10000]/10 hover:border-[#f10000] 
                         transition-all duration-300 group"
              >
                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#f10000]">
                  {item.title}
                </h3>
                <p className="text-gray-300">- {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessProfile;
