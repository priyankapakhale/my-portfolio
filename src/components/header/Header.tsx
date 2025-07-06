import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const portfolioSections = ["home", "about", "skills", "projects", "contact"];
const personalSections = ["blog", "photography"];

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activePersonalSection, setActivePersonalSection] =
    useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection) {
      scrollToSection(activeSection);
    }
  }, [activeSection]);

  const goToPortfolioSection = (sectionId: string) => {
    if (activePersonalSection) {
      navigate("/");
      setActivePersonalSection("");
    }
    setActiveSection(sectionId);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPersonalSection = (sectionId: string) => {
    setActivePersonalSection(sectionId);
    setActiveSection("");
  };

  const capitalize = (text: string) => {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Priyanka Pakhale</div>
        <div className="hidden md:flex space-x-8">
          {portfolioSections.map((section) => (
            <button
              key={section}
              onClick={() => goToPortfolioSection(section)}
              className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden group ${
                activeSection === section
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <span className="relative z-10">{section}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          ))}
        </div>
        <div className="flex space-x-2">
          {personalSections.map((section) => (
            <Link
              to={`/${section}`}
              onClick={() => goToPersonalSection(section)}
              className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden group ${
                activePersonalSection === section
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <span className="relative z-10">{capitalize(section)}</span>
              <div className="absolute inset-0 bg-gradient-to-r rounded-lg from-purple-600/10 to-pink-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
