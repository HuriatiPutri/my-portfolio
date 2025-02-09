'use client';

import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconFile, IconHome, IconMail, IconReportSearch, IconUser } from "@tabler/icons-react";
import { useEffect } from "react";

export default function NavbarMobile({ setIsMenuOpen }) {

  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.tagName === 'A') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('click', handleLinkClick);
    };
  }, [setIsMenuOpen]);

  return (
    <nav className="bg-[#040b14] text-white p-5 w-full h-screen absolute z-0 top-0">
      <div>
        <h1 className="text-2xl font-bold mt-10">Putri Huriati</h1>
        <div className="flex gap-2">
          <a href="https://www.instagram.com/huriatiputri/" target="_blank" rel="noreferrer">
          <IconBrandInstagram/>
          </a>
          <a href="https://www.linkedin.com/in/putri-huriati-2abb2412a/" target="_blank" rel="noreferrer">
            <IconBrandLinkedin/>
          </a>
          <a href="https://www.github.com/huriatiputri/" target="_blank" rel="noreferrer">
            <IconBrandGithub/>
          </a>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-4 mt-10">
          <li>
            <a href="#hero" className="flex gap-2">
              <IconHome />Home
            </a>
          </li>
          <li>
            <a href="#about" className="flex gap-2 "><IconUser /> About</a>
          </li>
          <li>
            <a href="#resume" className="flex gap-2"><IconFile/> Resume</a>
          </li>
          <li>
            <a href="#portfolio" className="flex gap-2"><IconReportSearch/> Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="flex gap-2"><IconMail/> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
