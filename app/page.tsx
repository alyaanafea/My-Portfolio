"use client";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className="overflow-hidden max-w-screen w-full">
      <div>
        <Header />
        <Hero />

        <Skills />
        <Projects />
        <Contacts />
        <Footer/>
      </div>
    </main>
  );
}
