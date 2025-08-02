import React from "react";
import VideoPlay from "../components/VideoPlay";
import contactV from "../assets/contactV.mp4";
import contactV2 from "../assets/contactV2.mp4";

import { FiSend } from "react-icons/fi";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

const Contact = () => {
  const contactInfo = {
    email: "peswanipixels@gmail.com",
    phone: "+91 9468500300",
    location: {
      address:
        "G1, Elite Homes , Block-A, Sitaram Vihar, Patrakar Colony, Jaipur",
    },
  };

  return (
    <div className="pt-20">
      <VideoPlay videoSrc={contactV} />

      <section className="py-24 bg-black-theme-rich text-white-theme-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="opacity-100 transform-none">
                <h2 className="text-sm uppercase tracking-widest text-danger mb-4 font-montserrat">
                  Get in Touch
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-light font-roboto mb-8">
                  Whether you have a project in mind or just want to explore
                  possibilities, we're here to help. Fill out the form, and one
                  of our team members will get back to you shortly.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-[150px_1fr] gap-6">
                    <div>
                      <label className="block mb-2 font-semibold">
                        Phone Number
                      </label>
                      <select className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md">
                        <option>India (+91)</option>
                        <option>USA (+1)</option>
                        <option>UK (+44)</option>
                      </select>
                    </div>
                    <div className="pt-7 md:pt-[32px]">
                      <input
                        type="text"
                        placeholder="12345 67890"
                        required
                        className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company / Brand"
                      required
                      className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-neutral-800 border border-danger/50 px-4 py-2 rounded-md focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center gap-5 border border-[#f10000] text-[#f10000] hover:bg-[#f10000] hover:text-black px-5 py-2 rounded-md transition-all duration-300"
                  >
                    <FiSend size={15} />
                    <span className="font-semibold text-sm">Send Message</span>
                  </button>
                </form>
              </div>

              <div className="bg-black text rounded-lg border border-danger/20 shadow-gold p-8 md:p-12">
                <h3 className="text-2xl font-bold font-montserrat mb-8 tracking-tight">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <MdOutlineMail className="lucide lucide-mail w-6 h-6 text-danger mr-4" />
                    <div>
                      <h4 className="font-medium font-montserrat mb-2">
                        Email
                      </h4>
                      <p className="text-gray-light font-roboto">
                        {" "}
                        {contactInfo.email}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MdOutlinePhone className="lucide lucide-mail w-6 h-6 text-danger mr-4" />
                    <div>
                      <h4 className="font-medium font-montserrat mb-2">
                        Phone
                      </h4>
                      <p className="text-gray-light font-roboto">
                        {" "}
                        {contactInfo.phone}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MdOutlineLocationOn className="lucide lucide-mail w-6 h-6 text-danger mr-4" />
                    <div>
                      <h4 className="font-medium font-montserrat mb-2">
                        Locations
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-light font-roboto">
                          {contactInfo.location.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-medium font-montserrat mb-4">
                    Working Hours
                  </h4>
                  <p className="text-gray-light font-roboto">
                    Monday to Friday: 8:00 AM - 11:00 PM
                    <br />
                    Saturday: 9:00 AM - 11:00 PM
                    <br />
                    Sunday: 9:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black-theme-poor">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 tracking-tight text-white-theme-pure">
              Visit Our <span className="shadow-text">Office</span>
            </h2>
            {/* <p className="text-gray-light font-roboto">
              We have professional studios in Delhi and Mumbai equipped with the
              latest technology and creative spaces.
            </p> */}
          </div>

          <div className="overflow-hidden rounded-lg border border-gold-accent/30 shadow-gold">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9263220736048!2d75.73445242522179!3d26.842295626689108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53b4f2a9307%3A0xc4bab07c7538e2c4!2sPeswani%20Pixels%20%7C%20Best%20Digital%20Marketing%20Agency%20%7C%20Jaipur!5e0!3m2!1sen!2sin!4v1753685912324!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-black-theme-rich">
        <VideoPlay videoSrc={contactV2} />
      </section>
    </div>
  );
};

export default Contact;
