"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="bg-[#F8F7F1] min-h-screen grid grid-cols-1 lg:grid-cols-4 items-center px-6 pt-20 md:px-12 lg:px-20 lg:py-0 overflow-hidden"
    >
      <div
        id="col-left"
        className={`flex flex-col justify-center lg:justify-between h-full lg:py-20 space-y-8 lg:space-y-12 lg:col-span-1 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <div className="flex flex-col font-semibold text-3xl md:text-4xl lg:text-5xl">
          <h1 className="text-4xl">Hi There,</h1>
          <h2 className="text-4xl">I'm Putri Huriati</h2>
        </div>
        <div className="flex flex-col font-semibold text-lg md:text-xl text-[#F16542]">
          <h1>huriatiputri@gmail.com</h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">5+</h1>
          <div className="flex flex-col text-sm md:text-base">
            <h1>YEARS</h1>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
      </div>
      <div
        id="col-center"
        className={`flex flex-col h-full justify-end items-center order-last lg:order-none mt-8 lg:mt-0 lg:col-span-2 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={"/assets/img/hero-img.png"}
          alt="hero-image"
          objectFit="cover"
          width={500}
          height={500}
          className="w-full max-w-[500px] md:max-w-[400px] lg:max-w-[500px] h-auto"
        />
      </div>
      <div
        id="col-right"
        className={`flex flex-col space-y-4 lg:space-y-6 lg:col-span-1 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <Image
          src={"/assets/img/stack.png"}
          alt="hero-image"
          objectFit="cover"
          width={500}
          height={500}
          className="w-full max-w-[500px] lg:max-w-[500px] h-auto hidden lg:block"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Frontend Developer
        </h1>
        <h2 className="text-base md:text-lg">
          I build clean, scalable, and user-centric digital experiences and I
          love what I do.
        </h2>
      </div>
    </section>
  );
}
