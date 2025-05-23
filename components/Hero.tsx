import React from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  return (
    <section className="py-20 px-2 md:px-6 max-w-screen w-full" data-aos="fade-in" data-aos-once="false">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left flex-1">
          <h1
            className="text-4xl md:text-5xl leading-[1.4] font-medium mb-4"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            Hello I’m <span className="font-bold">Aliaa Nafea Frontend</span>   <span className="outline-text">Developer</span>
          </h1>

          <p
            className="text-md text-gray-700 mb-4 md:mb-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A highly skilled Front-End developer with fair experience in
            building scalable, engaging, responsive and user friendly websites.
            competent in front-end technologies, including Angular, React, Vue.
            With knowledge of back end techniques including NodeJS, Nest and
            MongoDB.
          </p>

          <div
            className="flex md:gap-5 md:justify-start justify-center gap-4 pt-4 md:pt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <SocialIcon
              href="https://github.com/alyaanafea"
              icon={<FaGithub size={20} />}
              delay="0"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/alyaa-nafea"
              icon={<FaLinkedin size={20} />}
              delay="50"
            />
            <SocialIcon
              href="https://www.facebook.com/share/1AMPp4nADo/"
              icon={<FaFacebook size={20} />}
              delay="200"
            />
          </div>
        </div>

        <div className="flex-1" data-aos="fade-left" data-aos-delay="400">
          <Image
            src="/images/Banner.png"
            alt="Hero Illustration"
            width={450}
            height={450}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
