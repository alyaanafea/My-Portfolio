import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I am Aliaa
          </h1>
          <p className="text-md text-gray-700 mb-6 leading-relaxed">
            A highly skilled Front-End developer with fair experience in building scalable, engaging, responsive and user
friendly websites. competent in front-end technologies, including Angular, React. With knowledge of back end 
techniques including NodeJS Nest and MongoDB.
 
          </p>
          <div className="flex md:gap-5 md:justify-start justify-center gap-4 pt-8">
            <Link
              href="https://www.linkedin.com/in/alyaa-nafea"
              target="_blank"
              className="inline-block transition text-black hover:bg-black hover:text-white p-3 border-2 rounded-md"
            >
              <FaLinkedin size={20} />
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

        {/* Image or Illustration */}
        <div className="flex-1">
          <Image
            src="/images/Banner.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
