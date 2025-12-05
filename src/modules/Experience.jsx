"use client";

import Heading from "@/components/Atoms/Heading";
import { experiences } from "@/data/resume";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#F8F7F1] min-h-screen px-6 py-20 md:px-12 lg:px-20"
    >
      <Heading level={1} className="text-center mb-20">
        My Work Experience
      </Heading>
      <div className="max-w-7xl mx-auto">
        {experiences.map((exp, index) => {
          const [ref, isVisible] = useScrollAnimation(0.2);
          return (
            <div
              key={exp.id}
              ref={ref}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Left Column - Company Info */}
              <div className="lg:col-span-4 space-y-2">
                <Heading
                  level={3}
                  className="text-xl md:text-2xl font-semibold text-[#2F3E3A]"
                >
                  {exp.company}
                </Heading>
                {exp.project && (
                  <p className="text-base md:text-lg text-[#2F3E3A]">
                    {exp.project}
                  </p>
                )}
                <p className="text-sm md:text-base text-[#2F3E3A] font-medium">
                  {exp.period}
                </p>
              </div>

              {/* Center Column - Timeline Dot */}
              <div className="hidden lg:flex lg:col-span-2 justify-center h-full">
                <div className="flex flex-col items-center h-full relative z-0">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center relative z-10"
                    style={{ borderColor: exp.color, borderStyle: "dashed" }}
                  >
                    <div
                      className="w-4 h-8 md:w-8 md:h-8 rounded-full mx-auto"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute top-12 w-0.5 h-full border-l-2 border-dashed border-black"></div>
                  )}
                </div>
              </div>

              {/* Right Column - Job Description */}
              <div className="lg:col-span-5 space-y-3">
                {exp.position && (
                  <Heading
                    level={4}
                    className="font-semibold text-[#2F3E3A] mb-4"
                  >
                    {exp.position}
                  </Heading>
                )}
                <div className="space-y-2 text-[#2F3E3A]">
                  {exp.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
