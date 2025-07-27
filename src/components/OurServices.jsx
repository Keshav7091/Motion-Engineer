import { FaPenNib, FaVideo, FaCamera } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaTh } from "react-icons/fa";

const services = [
  {
    icon: <FaPenNib className="text-[#dfff59] text-2xl" />,
    title: "Creative Design",
    description: "We build brands that people remember.",
    link: "Learn more",
  },
  {
    icon: <FaVideo className="text-[#dfff59] text-2xl" />,
    title: "Ads & Films",
    description: "From script to screen, we bring ideas to life.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-[#dfff59] text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-[#dfff59] text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-[#dfff59] text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
  {
    icon: <FaCamera className="text-[#dfff59] text-2xl" />,
    title: "Photography",
    description: "Every frame tells a story.",
    link: "Learn more",
  },
];

const OurServices = () => {
  return (
    <section className="text-white py-24 relative overflow-hidden">
      {/* Title and Description */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
       <div className="max-w-3xl mx-auto mb-24 text-center">
          <div className="relative inline-block mb-2">
            <FaTh className="w-8 h-8 mx-auto mb-4 text-[#eefb7b]" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#eefb7b]/50 to-transparent mx-auto"></div>
          </div>
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 tracking-tight">
          We've Got You{" "}
          <span className="text-[#eefb7b] gold-glow relative inline-block">
            Covered
            <svg
              className="absolute left-0 -bottom-0 w-full h-[10px]"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 25 10, 50 5 T 100 5"
                stroke="#dfff59"
                strokeWidth="2"
                fill="transparent"
                opacity="0.5"
              />
            </svg>
          </span>
        </h2>
        <p className="text-gray-light font-roboto text-lg">
          You don't need a vendor. You need a creative partner who gets it.
          Someone who understands that great work isn't just about looking good—
          it's about making an impact. That's where we come in.
        </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:-translate-y-1">
              <div className="bg-neutral-900 p-8 rounded-lg border border-[#eefb7b]/10 transition-all duration-500 group-hover:border-[#eefb7b]/30 group-hover:shadow-glow-sm h-full z-10 relative">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-[#eefb7b]/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#eefb7b]/10 group-hover:border-[#eefb7b]/40">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-montserrat mb-4 group-hover:text-[#eefb7b] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-roboto mb-8">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center text-[#eefb7b] font-medium transition-all group-hover:translate-x-1 duration-300"
                  >
                    {service.link}
                    <FiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-center mt-12">
        <button className="group relative overflow-hidden border border-[#f3f95f] text-[#f3f95f] px-10 py-3 rounded-md text-base font-medium">
          <span className="absolute inset-0 bg-[#f3f95f] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          <span className="relative z-10 flex items-center gap-5 group-hover:text-black transition-colors duration-300">
            See What We Can Do For You
            <FiArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default OurServices;
