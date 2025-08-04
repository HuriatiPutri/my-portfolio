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
          <p>Hello! I'm Putri Huriati, a Software Engineer specializing in frontend development with over 5 years of experience building scalable and user-friendly web and mobile apps.</p>
          <p>My career journey includes working on national-scale projects at Telkom Indonesia, as well as freelance work delivering real solutions for clients in legal, education, retail, and travel sectors.</p>
          <p>I believe software is not just about code — it’s about creating solutions that truly improve how people work and live.</p>
          <p>On this site, you’ll find highlights of my work: from notary office systems, English course management tools, to real-time hotel & flight booking platforms.</p>
          <p>I'm currently open to remote opportunities, freelance collaborations, and meaningful projects.</p>
          <p>🚀 Let’s build something impactful together!</p>
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
            <span className="text-[#149ddd]">Laravel</span>
            <span className="text-[#149ddd]">Yii2</span>
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
