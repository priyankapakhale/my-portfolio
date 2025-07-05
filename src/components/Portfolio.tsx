import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen font-sans">
        <Header />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
