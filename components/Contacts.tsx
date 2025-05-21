import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contacts" className=" py-20 px-6 ">
      <h2 className="text-4xl font-bold text-center  mb-20 text-black">
        Contact Me
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-black px-4 py-2 rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-black px-4 py-2 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your website (if exists)"
            className="w-full border border-black px-4 py-2 rounded focus:outline-none"
          />
          <textarea
            placeholder="How can I help?*"
            className="w-full border border-black px-4 py-2 rounded h-32 resize-none focus:outline-none"
          ></textarea>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              className="hover:bg-white  gap-1 hover:text-black hover:border-black transition md:flex border-1 text-white bg-black px-3 py-2 rounded-md font-medium"
            >
              Get In Touch
            </button>
            <div className="flex md:gap-5 md:justify-start justify-center gap-4 ">
              <Link
                href="https://www.linkedin.com/in/alyaa-nafea"
                target="_blank"
                className="inline-block transition text-black hover:bg-black hover:text-white p-3 border-2 rounded-md"
              >
                <FaLinkedin size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alyaa-nafea"
                target="_blank"
                className="inline-block transition text-black hover:bg-black hover:text-white p-3 border-2 rounded-md"
              >
                <FaWhatsapp size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/share/1AMPp4nADo/"
                target="_blank"
                className="inline-block transition text-black hover:bg-black hover:text-white p-3 border-2 rounded-md"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://github.com/alyaanafea"
                target="_blank"
                className="inline-block transition text-black hover:bg-black hover:text-white p-3 border-2 rounded-md"
              >
                <FaGithub size={20} />
              </Link>
            </div>
          </div>
        </form>

        <div className="text-black space-y-6">
          <h2 className="text-3xl font-bold leading-tight">
            Let’s <span className="underline">talk</span> for <br /> Something
            special
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
