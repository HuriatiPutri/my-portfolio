"use client";

import Heading from "@/components/Atoms/Heading";
import AddressIcon from "@/components/Icons/AddressIcon";
import EmailIcon from "@/components/Icons/EmailIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconBrandGithub } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const router = useRouter();

  const contactInfo = [
    {
      type: "email",
      value: "huriatiputri@gmail.com",
      link: "mailto:huriatiputri@gmail.com",
      icon: <EmailIcon />,
    },
    {
      type: "github",
      value: "huriatiputri",
      link: "https://github.com/huriatiputri",
      icon: <GithubIcon />,
    },
    {
      type: "LinkedIn",
      value: "Putri Huriati",
      link: "https://www.linkedin.com/in/putri-huriati-2abb2412a/",
      icon: <LinkedInIcon />,
    },
    {
      type: "address",
      value: "Jakarta, Indonesia",
      icon: <AddressIcon />,
    },
  ];
  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-[#F8F7F1] md:p-20 p-5 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="gap-4 flex justify-between flex-col md:flex-row">
        <div className="max-w-[500px]">
          <Heading level={1} className="font-semibold">
            Always learning, always building and always open to new
            opportunities.
          </Heading>
        </div>
        <div className="flex flex-col justify-center">
          <Heading level={1} className="mb-4">
            Information
          </Heading>
          {contactInfo.map((info) => (
            <button
              key={info.type}
              className="flex gap-2 items-center cursor-pointer hover:text-blue-500 mb-2 bg-transparent border-none p-0 text-left"
              onClick={() => info.link && router.push(info.link)}
              disabled={!info.link}
            >
              {info.icon}
              <Heading level={6} className=" mb-2">
                {info.value}
              </Heading>
            </button>
          ))}
        </div>
      </div>
      <hr className="mt-10 border-t border-gray-300" />
      <div className="flex justify-between mt-6">
        <h1 className="text-2xl font-italianno">My Portfolio</h1>
        <h1 className="ml-4 text-sm self-end">© 2025 Putri Huriati</h1>
      </div>
    </section>
  );
}
