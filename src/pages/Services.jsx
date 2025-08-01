import React from "react";
import VideoPlay from "../components/VideoPlay";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import servicesV from "../assets/servicesV.mp4";

import {
  CiImageOn,
  CiVideoOn,
  CiShare2,
  CiBullhorn,
  CiGlobe,
  CiDesktop,
  CiSearch,
  CiCamera,
  CiUser,
  CiShoppingTag,
  CiEdit,
  CiViewTimeline,
  CiForkAndKnife,
  CiLocationOn,
  CiChat2,
  CiFaceSmile,
  CiMicrophoneOn,
  CiMobile3,
} from "react-icons/ci";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Services = () => {
  const serviceData = [
    {
      title: "Graphic Design",
      icon: <CiImageOn className="text-danger w-6 h-6" />,
      description:
        "Crafting visually stunning graphics to communicate your brand effectively across all platforms.",
      features: [
        "Logo & Branding",
        "Social Media Creatives",
        "Brochures & Flyers",
        "Poster & Banner Design",
      ],
    },
    {
      title: "Video Editing",
      icon: <CiVideoOn className="text-danger w-6 h-6" />,
      description:
        "Professional video editing services to bring your raw footage to life with style and storytelling.",
      features: [
        "Corporate Videos",
        "YouTube Editing",
        "Reels & Shorts",
        "Motion Graphics",
      ],
    },
    {
      title: "Social Media Management",
      icon: <CiShare2 className="text-danger w-6 h-6" />,
      description:
        "Manage and grow your social media presence with engaging content, strategy, and community building.",
      features: [
        "Content Planning",
        "Scheduling & Publishing",
        "Engagement & Analytics",
        "Profile Optimization",
      ],
    },
    {
      title: "Meta Ads",
      icon: <CiBullhorn className="text-danger w-6 h-6" />,
      description:
        "Reach your audience with targeted advertising on Facebook and Instagram for high ROI.",
      features: [
        "Campaign Strategy",
        "Ad Creatives",
        "Audience Targeting",
        "Performance Optimization",
      ],
    },
    {
      title: "Google Ads",
      icon: <CiGlobe className="text-danger w-6 h-6" />,
      description:
        "Maximize your visibility and leads through Google Search, Display, and YouTube Ads.",
      features: [
        "Keyword Research",
        "Search & Display Ads",
        "Performance Tracking",
        "A/B Testing",
      ],
    },
    {
      title: "Website Design & Hosting",
      icon: <CiDesktop className="text-danger w-6 h-6" />,
      description:
        "Custom websites designed for performance, UX, and reliability with secure hosting solutions.",
      features: [
        "Responsive Web Design",
        "Domain & Hosting Setup",
        "Landing Pages",
        "Maintenance & Updates",
      ],
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: <CiSearch className="text-danger w-6 h-6" />,
      description:
        "Improve your online visibility, rank higher on Google, and attract organic traffic.",
      features: [
        "On-Page SEO",
        "Technical SEO",
        "Backlink Building",
        "Keyword Optimization",
      ],
    },
    {
      title: "Photography & Videography",
      icon: <CiCamera className="text-danger w-6 h-6" />,
      description:
        "Capture professional-quality photos and videos that speak volumes for your brand.",
      features: [
        "Product Shoots",
        "Event Coverage",
        "Corporate Photography",
        "Drone Videography",
      ],
    },
    {
      title: "Influencer Marketing",
      icon: <CiUser className="text-danger w-6 h-6" />,
      description:
        "Leverage trusted influencers to promote your brand to a highly engaged audience.",
      features: [
        "Influencer Outreach",
        "Campaign Planning",
        "Brand Collaborations",
        "Performance Metrics",
      ],
    },
    {
      title: "Ecommerce Listing",
      icon: <CiShoppingTag className="text-danger w-6 h-6" />,
      description:
        "Professional product listing and catalog management for ecommerce platforms.",
      features: [
        "Product Title & Description",
        "Image Optimization",
        "SEO-Friendly Listings",
        "Bulk Upload Support",
      ],
    },
    {
      title: "Copywriting",
      icon: <CiEdit className="text-danger w-6 h-6" />,
      description:
        "Persuasive and brand-aligned content writing to drive conversions and engagement.",
      features: [
        "Website Copy",
        "Ad Copywriting",
        "Email Campaigns",
        "Product Descriptions",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <CiViewTimeline className="text-danger w-6 h-6" />,
      description:
        "Designing intuitive and beautiful user experiences that delight and convert.",
      features: [
        "Wireframes & Prototypes",
        "User Flow Design",
        "Mobile & Web UI",
        "Design Systems",
      ],
    },
    {
      title: "3D Animation",
      icon: <IoCubeOutline className="text-danger w-6 h-6" />,
      description:
        "High-quality 3D animation services to visually communicate complex ideas and stories.",
      features: [
        "Product Animations",
        "Explainer Videos",
        "Modeling & Texturing",
        "Visual Effects",
      ],
    },
    {
      title: "Cafe Shoot & SMM",
      icon: <CiForkAndKnife className="text-danger w-6 h-6" />,
      description:
        "End-to-end visual content creation and social media marketing for cafes and restaurants.",
      features: [
        "Food Photography",
        "Reels & Stories",
        "Menu Design",
        "Instagram Growth",
      ],
    },
    {
      title: "Google Maps Reviews",
      icon: <CiLocationOn className="text-danger w-6 h-6" />,
      description:
        "Enhance your local presence by increasing your visibility and trust on Google Maps.",
      features: [
        "Review Strategy",
        "Listing Optimization",
        "Reputation Management",
        "Photo & Q&A Updates",
      ],
    },
    {
      title: "YouTube Thumbnail Design",
      icon: <CiImageOn className="text-danger w-6 h-6" />,
      description:
        "Custom, eye-catching thumbnails that increase click-through rates and grow your channel.",
      features: [
        "CTR Optimized Designs",
        "Brand Style Thumbnails",
        "Text Highlights",
        "Fast Turnaround",
      ],
    },
    {
      title: "WhatsApp Automation",
      icon: <CiChat2 className="text-danger w-6 h-6" />,
      description:
        "Automate customer communication and lead engagement through WhatsApp bots and APIs.",
      features: [
        "Broadcast Messaging",
        "Lead Capture Automation",
        "CRM Integration",
        "Chatbot Setup",
      ],
    },
    {
      title: "Meme Marketing",
      icon: <CiFaceSmile className="text-danger w-6 h-6" />,
      description:
        "Leverage viral meme content to reach audiences in a fun, relatable, and organic way.",
      features: [
        "Brand-Specific Memes",
        "Trend Hijacking",
        "Instagram Engagement",
        "Humor-Driven Campaigns",
      ],
    },
    {
      title: "PR Services",
      icon: <CiMicrophoneOn className="text-danger w-6 h-6" />,
      description:
        "Build credibility and media presence through strategic public relations and press coverage.",
      features: [
        "Media Outreach",
        "Press Releases",
        "Brand Mentions",
        "Online Reputation",
      ],
    },
    {
      title: "Founder Personal Branding",
      icon: <FaRegUserCircle className="text-danger w-6 h-6" />,
      description:
        "Craft and promote your personal brand to become a trusted face of your company.",
      features: [
        "LinkedIn Content Strategy",
        "Media Mentions",
        "Video Storytelling",
        "Thought Leadership",
      ],
    },
    {
      title: "App Development",
      icon: <CiMobile3 className="text-danger w-6 h-6" />,
      description:
        "End-to-end mobile app development services tailored to your business needs.",
      features: [
        "iOS & Android Apps",
        "Custom Features",
        "UI/UX for Mobile",
        "App Store Publishing",
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

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.map((service, index) => (
              <div key={index} className="group relative h-full flex flex-col">
                <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:-translate-y-1 flex flex-col h-full">
                  <div className="bg-neutral-900 p-8 rounded-lg border border-danger/10 transition-all duration-500 group-hover:border-[#f10000]/30 group-hover:shadow-glow-sm h-full flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-danger/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#f10000]/10 group-hover:border-[#f10000]/40">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat mb-4 group-hover:text-[#f10000] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-roboto mb-8">
                      {service.description}
                    </p>
                    <h5 className="font-medium mb-4 text-white-theme-pure font-montserrat">
                      Key Features:
                    </h5>

                    <ul className="space-y-2">
                      {service.features.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <LuCircleCheckBig className="lucide lucide-circle-check-big w-5 h-5 text-danger mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-light font-roboto">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black-theme-rich">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-widest text-danger mb-4 font-montserrat">
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
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black-theme-card text-xl font-bold text-danger mb-6 border border-danger/30">
                  {step.step}
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="absolute top-8 left-16 w-full h-0.5 bg-danger/20 hidden md:block"></div>
                )}

                <h4 className="text-xl font-semibold font-montserrat mb-3 text-white-theme-pure">
                  {step.title}
                </h4>
                <p className="text-gray-light font-roboto">
                  {step.description}
                </p>
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
