import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen font-sans">
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Portfolio;
