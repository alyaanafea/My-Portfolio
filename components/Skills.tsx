"use client";
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSass,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiVuedotjs,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={32} className="text-black" /> },
  { name: "TypeScript", icon: <SiTypescript size={32} className="text-black" /> },
  { name: "React", icon: <SiReact size={32} className="text-black" /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black" /> },
  { name: "Vue.js", icon: <SiVuedotjs size={32} className="text-black" /> },
  { name: "Node.js", icon: <SiNodedotjs size={32} className="text-black" /> },
  { name: "Sass", icon: <SiSass size={32} className="text-black" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={32} className="text-black" /> },
  { name: "Figma", icon: <SiFigma size={32} className="text-black" /> },
  { name: "Git", icon: <SiGit size={32} className="text-black" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen w-full py-20 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl mb-20 text-black"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          My <span className="font-bold">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="flex flex-col items-center justify-center gap-2 text-xl w-36 h-36 border-2 rounded-sm"
            >
              {skill.icon}
              <span className="text-sm text-black font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
