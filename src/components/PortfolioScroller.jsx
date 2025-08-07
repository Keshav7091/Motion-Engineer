import React, { useRef } from "react";
import "./portfolioScroller.css"; // Custom CSS
import Button from "./Button";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const portfolioProjects = [
  {
    id: "image-project-1",
    image: "/brands/com1.webp",
    alt: "Contemporary Beauty Products",
  },
  {
    id: "image-project-2",
    image: "/brands/com1.webp",
    alt: "Citrus Vitality Essence",
  },
  {
    id: "image-project-3",
    image: "/brands/com1.webp",
    alt: "Premium Smartphone Collection",
  },
  {
    id: "image-project-4",
    image: "/brands/com1.webp",
    alt: "Luxury Spirits Photography",
  },
  {
    id: "image-project-5",
    image: "/brands/com1.webp",
    alt: "Heritage Collection",
  },
  {
    id: "image-project-6",
    image: "/brands/com1.webp",
    alt: "Minimalist Fashion Series",
  },
  {
    id: "image-project-7",
    image: "/brands/com1.webp",
    alt: "Seasonal Fashion Collection",
  },
  {
    id: "image-project-8",
    image: "/brands/com1.webp",
    alt: "Fashion Editorial",
  },
  {
    id: "image-project-9",
    image: "/brands/com1.webp",
    alt: "Brand Campaign Photography",
  },
];

const PortfolioScroller = () => {
  const contentRef = useRef(null);

  const restartAnimation = () => {
    const content = contentRef.current;
    if (content) {
      content.style.animation = "none";
      content.offsetHeight;
      content.style.animation = "";
    }
  };

  return (
    <section className="bg-black-theme-poor text-white py-16">
      <div className="mx-auto">
        <div className="scroller-track" onMouseEnter={restartAnimation}>
          <div className="scroller-content" ref={contentRef}>
            {portfolioProjects
              .concat(portfolioProjects)
              .map((project, index) => (
                <div key={index} className="scroller-image-container">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="scroller-image"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="mt-16 text-center">
          <Link to="/contact" className="font-montserrat">
            <Button>
              Start Your Project <IoIosArrowForward />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioScroller;
