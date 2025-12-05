"use client";

import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Carousel from "@/components/Organisms/Carousel";
import Heading from "@/components/Atoms/Heading";
import Head from "next/head";

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [ref, isVisible] = useScrollAnimation(0.2);

  // Update items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, portfolio.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const slidePercentage = 100 / itemsToShow;

  return (
    <section
      id="projects"
      ref={ref}
      className={`md:p-20 p-5 flex flex-col h-min-screen gap-3 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Heading level={1}>Built & Shipped Products</Heading>
      <Heading level={5}>
        Projects that highlight my experience in frontend and mobile
        development.
      </Heading>

      {/* Carousel Container */}
      <Carousel data={portfolio} />
    </section>
  );
}
