export default function About() {
  return (
    <section id="about" className="bg-white h-min-screen">
      <div className="md:p-20 p-5 flex flex-col gap-3">
        <h2 className="text-3xl font-medium text-[#173b6c]">About Me</h2>
        <span
          style={{
            background: "#149ddd",
            width: "100px",
            height: "5px",
            borderRadius: "5px",
          }}
        />
        <h2 className="text-2xl font-medium text-[#173b6c]">
          Frontend Developer
        </h2>
        <div className="italic flex flex-col gap-3">
          <p>
          I am a <strong>Frontend Developer</strong> with experience in developing and maintaining enterprise web applications.
          </p>
          <p>
          Throughout my career, I have been involved in various projects, including the development and maintenance of features for the <strong>Subsidi Tepat LPG </strong> platform, used by LPG stations across Indonesia. Additionally, I contributed to the development and upkeep of SooltanKasir, a cashier application with over <strong>100,000 downloads</strong>.
          </p>
          <p>
          In each project, I am responsible for software development and maintenance, ensuring optimal performance and system scalability. I am also actively expanding my expertise in <strong>Backend Development</strong>, including <strong>Node.js, MySQL, Google Cloud Platform, Docker, and Redis</strong>, to enhance my technical skills.
          </p>
          <p>
          My <strong>hort-term goal</strong> is to continuously learn new technologies and refine my ability to build efficient and scalable applications. In the <strong>long term</strong>, I aspire to lead a software development team and contribute to the creation of innovative solutions.
          </p>
          <p>
            Do you want to know more about me? What are you waiting for...
            download my CV and analyze my skills.
          </p>
        </div>
      </div>
      <div className="md:p-20 p-5 bg-[#f5f8fd] flex flex-col gap-3 h-full">
        <h2 className="text-3xl font-medium text-[#173b6c]">Skills</h2>
        <span
          style={{
            background: "#149ddd",
            width: "100px",
            height: "5px",
            borderRadius: "5px",
          }}
        />
        <span>
          Next, you will find some of the technologies and programming
          languages​​that I handle, these technologies have a level of ability
          which I think I have.
        </span>
        <div>
          <h2 className="text-xl mt-10">Programing Languages</h2>
          <div className="flex flex-wrap gap-3">
            <span className="text-[#149ddd]">Javascript</span>
            <span className="text-[#149ddd]">Typescript</span>
            <span className="text-[#149ddd]">CSS</span>
            <span className="text-[#149ddd]">Kotlin</span>
            <span className="text-[#149ddd]">PHP</span>
            <span className="text-[#149ddd]">Java</span>
          </div>
          <h2 className="text-xl mt-10">Frameworks and Libraries</h2>
          <div className="flex flex-wrap gap-3">
            <span className="text-[#149ddd]">Next Js</span>
            <span className="text-[#149ddd]">React Js</span>
            <span className="text-[#149ddd]">React Native</span>
            <span className="text-[#149ddd]">Node Js</span>
          </div>
          <h2 className="text-xl mt-10">Databases</h2>
          <div className="flex flex-wrap gap-3">
          <span className="text-[#149ddd]">MySql</span>
          <span className="text-[#149ddd]">Oracle</span>
          <span className="text-[#149ddd]">Sql Server</span>
          </div>
          <h2 className="text-xl mt-10">Tools</h2>
          <div className="flex flex-wrap gap-3">
            <span className="text-[#149ddd]">Git</span>
            <span className="text-[#149ddd]">Postman</span>
            <span className="text-[#149ddd]">Eslint</span>
            <span className="text-[#149ddd]">Docker</span>
            <span className="text-[#149ddd]">GCP</span>
            <span className="text-[#149ddd]">Figma</span>
          </div>
          <h2 className="text-xl mt-10">Testing Tools</h2>
          <div className="flex gap-3">
            <span className="text-[#149ddd]">Jest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
