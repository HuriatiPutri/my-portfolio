'use client';
import NavbarMobile from "@/modules/NavbarMobile";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import About from "../modules/About";
import Contact from "../modules/Contact";
import Hero from "../modules/Hero";
import Navbar from "../modules/Navbar";
import Portfolio from "../modules/Portfolio";
import { Resume } from "../modules/Resume";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="md:flex font-poppins">
      <div className="sticky top-0 z-50 md:w-1/5 w-full">
      {isMobile && isMenuOpen && (
        <NavbarMobile setIsMenuOpen={setIsMenuOpen}/>
      )}
      {!isMobile && (
        <Navbar setIsMenuOpen={setIsMenuOpen}/>
      )}
      {isMobile && (
        !isMenuOpen ? (
          <IconMenu2 onClick={handleMenu} className="md:hidden text-gray-400 absolute top-5 right-5 z-50" />
        ) : (
          <IconX onClick={handleMenu} className="md:hidden text-white absolute top-5 right-5 z-50" />
        ))
      }
      </div>
      <div className="flex flex-col md:w-4/5 w-full overflow-y-auto">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}