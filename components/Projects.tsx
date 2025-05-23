"use client";
import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Chat Website",
    description:
      "Developed Chat-app with Sign in, Sign up, Send and receive in real time Each user can send text message and emoji at real time , see online users",
    Technologies: "React Js , Tailwind CSS, DaisyUI, rest APIs and Socket.io",
    image: "/images/Screenshot 2025-05-22 174519.png",
    reverse: false,
    href: "https://react-chat-app-i-6ezg4988o-ahmed96cells-projects.vercel.app/",
  },
  {
    id: 2,
    title: " Ecommerce Website Template",
    description:
      " Developed a responsive E-Commerce website, user can Add products to cart,view and edit cart items, view product details and clear cart.",
    Technologies: "React JS, Tailwind CSS ",
    image: "/images/e-c.png",
    reverse: true,
    href: "https://ecommerce011.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio Website Template",
    description: " Developed Responsive Personal Website Template",
    image: "/images/ChatGPT Image May 23, 2025, 06_40_35 PM.png",
    Technologies: "HTML5, CSS3, JS, Bootstrap ",
    reverse: false,
    href: "https://portfoliotemplate01.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 max-w-screen w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-16" data-aos="fade-up">
          My <span className="text-white">Projects</span>
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                project.reverse ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div
                className="md:w-1/2"
                data-aos="zoom-in"
                data-aos-delay={index * 200 + 100}
              >
                <Link href={project.href}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="rounded shadow-md"
                  />
                </Link>
              </div>
              <div
                className="md:w-1/2 space-y-4"
                data-aos={project.reverse ? "fade-left" : "fade-right"}
                data-aos-delay={index * 200 + 200}
              >
                <h3 className="text-2xl font-bold">0{project.id}</h3>
                <Link href={project.href}>
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                </Link>
                <p className="text-gray-300">{project.description}</p>
                <p className="text-gray-500">Technologies : {project.Technologies}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel=""
                  className="inline-flex items-center gap-2 text-white hover:text-gray-300"
                >
                  <FaExternalLinkAlt />
                  Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
