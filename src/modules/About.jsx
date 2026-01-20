"use client";

import Rounded from "@/components/Icons/rounded";
import { helpServices, randomColor, techStacks } from "@/data/helpServices";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Heading from "@/components/Atoms/Heading";

export default function About() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      ref={ref}
      className={`bg-white h-min-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6 md:p-12 lg:p-20 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="flex flex-col">
        <Heading level={1}>What do I help?</Heading>
        {helpServices.map((service, index) => (
          <div className="flex gap-1 mt-4 items-start" key={service}>
            <div className="mt-1">
              <Rounded color={randomColor[index]} />
            </div>
            <span>{service}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Heading level={1}>Tech Stack I Use</Heading>
        {techStacks.map((tech, index) => (
          <div key={tech + index} className="items-center gap-3">
            <span>{tech.name}</span>
            <Image
              height={tech.imageHeight || 200}
              width={tech.imageWidth || 400}
              src={tech.image}
              alt={tech.name}
              loading="lazy"
              className={`w-[${tech.imageWidth || 400
                }px] h-auto object-contain`}
            />
          </div>
        ))}
        <Heading level={7} className="mt-4">
          And many more technologies that I have learned and used in my
          projects. Feel free to reach out if you want to know more!
        </Heading>
        <Heading level={7}>
          You can also check my learning path on Dicoding:
          <a
            href="https://www.dicoding.com/users/huriatiputri/academies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {" "}
            Putri Huriati
          </a>
        </Heading>
      </div>
    </section>
  );
}
