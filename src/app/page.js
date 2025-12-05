'use client';
import { Experience } from "@/modules/Experience";
import Header from "@/modules/Header";
import Project from "@/modules/Project";
import About from "../modules/About";
import Contact from "../modules/Contact";
import Hero from "../modules/Hero";

export default function Home() {
  return (
    <main className="md:flex font-poppins">
      <div className="flex flex-col w-full overflow-y-auto">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  );
}