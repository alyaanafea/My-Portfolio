// components/Header.tsx
"use client";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed max-w-screen w-full z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link className="text-xl font-bold text-black"  href="#about">ALIAA</Link>

        <nav className="space-x-6  hidden md:flex text-black font-medium">
          <Link
            href="#about"
            className="relative group overflow-hidden hidden md:inline-block text-black font-medium"
          >
            <span className="relative z-10">About</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Link>

          <Link
            href="#skills"
            className="relative group overflow-hidden hidden md:inline-block text-black font-medium"
          >
            <span className="relative z-10">Skills</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Link>
          <Link
            href="#projects"
            className="relative group overflow-hidden hidden md:inline-block text-black font-medium"
          >
            <span className="relative z-10">Projects</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Link>
          <Link
            href="#contacts"
            className="relative group overflow-hidden hidden md:inline-block text-black font-medium"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Link>
        </nav>
        <Link
          href="https://drive.google.com/file/d/1PydSasqg8MuMARRB_AnLFIqPQaGV7Y0w/view?usp=sharing"
          className="hover:bg-white hidden gap-1 hover:text-black hover:border-black transition md:flex border-1 text-white bg-black px-3 py-2 rounded-md font-medium"
        >
          Resume <Download size={20} />
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white text-black shadow-md">
          <Link
            href="#about"
            className="block hover:bg-black hover:text-white px-4 py-2  transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="#skills"
            className="block hover:bg-black hover:text-white px-4 py-2   transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="block hover:bg-black hover:text-white px-4 py-2   transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block hover:bg-black hover:text-white px-4 py-2   transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1PydSasqg8MuMARRB_AnLFIqPQaGV7Y0w/view?usp=sharing"
            className="flex gap-1 hover:bg-black hover:text-white px-4 py-2   transition"
            onClick={() => setMenuOpen(false)}
          >
            Resume <Download size={20} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
