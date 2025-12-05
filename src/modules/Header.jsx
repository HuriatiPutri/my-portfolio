export default function Header() {
  return (
    <header className="bg-[#F8F7F1] fixed w-full z-10">
      <div className="px-6 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-italianno">My Portfolio</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#hero" className="text-gray-800 hover:text-blue-500">
              Service
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About Me
            </a>
            <a href="#experience" className="text-gray-800 hover:text-blue-500">
              Experience
            </a>
            <a href="#projects" className="text-gray-800 hover:text-blue-500">
              Project
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
