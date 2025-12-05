"use client";

import Heading from "@/components/Atoms/Heading";
import Carousel from "@/components/Organisms/Carousel";
import { portfolio } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Project() {
  const [ref, isVisible] = useScrollAnimation(0.2);

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

      <Carousel data={portfolio} />
    </section>
  );
}
