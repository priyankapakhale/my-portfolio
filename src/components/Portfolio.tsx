import About from "./about/About";
import Contact from "./contact/Contact";
import Experience from "./experience/WorkExperience";
import Home from "./home/Home";
import Skills from "./skills/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen font-sans">
        <main>
          <Home />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Portfolio;
