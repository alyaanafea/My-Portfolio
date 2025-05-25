import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 px-6 max-w-screen w-full">
      <h2
        className="text-4xl font-bold text-center mb-20 text-black"
        data-aos="fade-up"
      >
        Contact Me
      </h2>
      <div className="max-w-6xl mx-auto grid  grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <form
          className="space-y-4 order-2 md:order-1"
          action="https://formspree.io/f/xwpojjnv"
          method="POST"
          data-aos="fade-right"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full border border-black px-4 py-2 rounded focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-black px-4 py-2 rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Your website (if exists)"
            className="w-full border border-black px-4 py-2 rounded focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="How can I help?*"
            className="w-full border border-black px-4 py-2 rounded h-32 resize-none focus:outline-none"
            required
          ></textarea>

          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio form"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://alyaanafea.netlify.app/thank-you"
          />

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              className="hover:bg-white gap-1 hover:text-black hover:border-black transition md:flex border-1 text-white bg-black px-3 py-2 rounded-md font-medium"
            >
              Get In Touch
            </button>

            <div className="flex md:gap-5 md:justify-start justify-center gap-4">
              <SocialIcon
                href="https://www.linkedin.com/in/alyaa-nafea"
                icon={<FaLinkedin size={20} />}
                delay="0"
              />
              <SocialIcon
                href="https://wa.me/201201664241"
                icon={<FaWhatsapp size={20} />}
                delay="100"
              />
              <SocialIcon
                href="https://www.facebook.com/share/1AMPp4nADo/"
                icon={<FaFacebook size={20} />}
                delay="200"
              />
              <SocialIcon
                href="https://github.com/alyaanafea"
                icon={<FaGithub size={20} />}
                delay="300"
              />
            </div>
          </div>
        </form>

        <div
          className="text-black space-y-6  order-1 md:order-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold leading-tight">
            Let’s <span className="outline-text">talk</span> for <br />{" "}
            Something special
          </h2>
          <p className="text-gray-600">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
          <Link
            href="mailto:alyaanafea@gmail.com"
            className="text-black underline"
          >
            alyaanafea@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
