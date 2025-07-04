const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen font-sans">
        <header className="sticky top-0 w-full bg-white shadow-md z-10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Priyanka Pakhale</div>
            <div className="space-x-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600">
                About
              </a>
              <a href="#skills" className="text-gray-700 hover:text-purple-600">
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-purple-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gray-100"
          >
            <h1 className="text-4xl font-bold">Home Section</h1>
          </section>

          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-white"
          >
            <h2 className="text-3xl font-semibold">About Me</h2>
          </section>

          <section
            id="skills"
            className="min-h-screen flex items-center justify-center bg-gray-100"
          >
            <h2 className="text-3xl font-semibold">Skills</h2>
          </section>

          <section
            id="projects"
            className="min-h-screen flex items-center justify-center bg-white"
          >
            <h2 className="text-3xl font-semibold">Projects</h2>
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-100"
          >
            <h2 className="text-3xl font-semibold">Contact</h2>
          </section>
        </main>

        <footer className="bg-white border-t py-6 text-center text-gray-500">
          © 2025 Priyanka Pakhale
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
