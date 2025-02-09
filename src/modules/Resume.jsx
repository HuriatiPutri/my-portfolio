import { education, experience } from "../data/resume";

export const Resume = () => {
  return (
    <section id="resume" className="bg-white md:p-20 p-5 flex flex-col h-min-screen gap-3">
      <h2 className="text-3xl font-medium text-[#173b6c]">Resume</h2>
      <span
        style={{
          background: "#149ddd",
          width: "100px",
          height: "5px",
          borderRadius: "5px",
        }}
      />
      <span>
        Next, I show you a little of my formal education and my work experience
        so that you ratify your confidence in me. Let's Go!
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="span-col-1">
          <h2 className="text-2xl font-medium">Professional Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="flex flex-col gap-2 border-l-4 border-[#149ddd] pl-3 mt-3">
              <h3 className="text-xl font-medium">{exp.title}</h3>
              <span className="text-gray-700 p-1 bg-blue-100">{exp.date}</span>
              <span className="text-gray-600 italic">{exp.company}</span>
              <p className="italic text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="span-col-1">
          <h2 className="text-2xl font-medium">Professional Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col gap-2 border-l-4 border-[#149ddd] pl-3 mt-3">
              <h3 className="text-xl font-medium">{edu.title}</h3>
              <span className="text-gray-600 p-1 bg-blue-100">{edu.date}</span>
              <span className="text-gray-600 italic">{edu.institution}</span>
              <p className="italic text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
