import { FaPenNib, FaVideo, FaCamera } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaTh } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaPenNib className="text-danger text-2xl" />,
    title: "Creative Design",
    description: "We build brands that people remember.",
    link: "Learn more",
  },
  {
    icon: <FaVideo className="text-danger text-2xl" />,
    title: "Ads & Films",
    description: "From script to screen, we bring ideas to life.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-danger text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-danger text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-danger text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-danger text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
];

const OurServices = () => {
  return (
    <section className="text-white bg-black-theme-poor py-24 relative overflow-hidden">
      {/* Title and Description */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto mb-24 text-center opacity-100 transform-none">
          <div className="relative inline-block mb-2 opacity-100 transform-none">
            <FaTh className="w-8 h-8 mx-auto mb-4 text-danger" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#f10000]/50 to-transparent mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 tracking-tight">
            We've Got You{" "}
            <span className="text-danger gold-glow relative inline-block pb-1">
              Covered
              <svg
                className="absolute left-0 -bottom-0 w-full h-[10px]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 10, 50 5 T 100 5"
                  stroke="#f10000"
                  strokeWidth="2"
                  fill="transparent"
                  opacity="0.5"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-light font-roboto text-lg">
            You don't need a vendor. You need a creative partner who gets it.
            Someone who understands that great work isn't just about looking
            good— it's about making an impact. That's where we come in.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative opacity-100 transform-none"
            >
              <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="bg-neutral-900 p-8 rounded-lg border border-danger/10 transition-all duration-500 group-hover:border-[#f10000]/30 group-hover:shadow-glow-sm h-full z-10 relative">
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-danger/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#f10000]/10 group-hover:border-[#f10000]/40">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat mb-4 group-hover:text-[#f10000] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-roboto mb-8">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-danger font-medium transition-all group-hover:translate-x-1 duration-300"
                    >
                      {service.link}
                      <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full flex justify-center mt-12">
          <Link to="/services">
            <button className="group relative overflow-hidden border border-danger text-danger px-10 py-3 rounded-md text-base cursor-pointer font-medium">
              <span className="absolute inset-0 bg-danger translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 flex items-center gap-5 group-hover:text-black transition-colors duration-300">
                See What We Can Do For You
                <FiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
