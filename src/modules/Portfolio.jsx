import { portfolio } from "@/data/portfolio";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-blue-50 md:p-20 p-5 flex flex-col h-min-screen gap-3"
    >
      <h2 className="text-3xl font-medium text-[#173b6c]">Portfolio</h2>
      <span
        style={{
          background: "#149ddd",
          width: "100px",
          height: "5px",
          borderRadius: "5px",
        }}
      />
      <span>
        In this section you will be able to find some projects that I have
        carried out throughout my career, it should be noted that you will be
        able to access the source code of the project and a web page with a
        brief description of it. Let's give it!
      </span>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolio.map((project) => (
          <div className="flex flex-col gap-3 bg-white p-5 rounded-lg">
            <a href={project.link} className="text-xl font-bold hover:text-blue-400">{project.title}</a>
            <Image src={project.image} alt="tomago" width={500} height={300} />
            <p>
              {project.description}
            </p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
