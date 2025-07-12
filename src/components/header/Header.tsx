import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const portfolioSections = ["home", "about", "skills", "experience", "contact"];
const personalSections = ["blogs", "astrophotography"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activePersonalSection, setActivePersonalSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection) scrollToSection(activeSection);
  }, [activeSection]);

  const goToPortfolioSection = (sectionId: string) => {
    if (activePersonalSection) {
      navigate("/");
      setActivePersonalSection("");
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const goToPersonalSection = (sectionId: string) => {
    setActivePersonalSection(sectionId);
    setActiveSection("");
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const capitalize = (text: string) =>
    text[0].toUpperCase() + text.slice(1).toLowerCase();

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="text-xl font-bold">Priyanka Pakhale</div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex space-x-2">
          {personalSections.map((section) => (
            <Link
              key={section}
              to={`/${section}`}
              onClick={() => goToPersonalSection(section)}
              className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden group ${
                activePersonalSection === section
                  ? "text-purple-600 font-semibold"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              <span className="relative z-10">{capitalize(section)}</span>
              <div className="absolute inset-0 bg-gradient-to-r rounded-lg from-purple-600/10 to-pink-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-3">
            {portfolioSections.map((section) => (
              <button
                key={section}
                onClick={() => goToPortfolioSection(section)}
                className={`capitalize text-left w-full transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden group ${
                  activeSection === section
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {section}
              </button>
            ))}
            {personalSections.map((section) => (
              <Link
                key={section}
                to={`/${section}`}
                onClick={() => goToPersonalSection(section)}
                className={`capitalize text-left w-full transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden group ${
                  activePersonalSection === section
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {capitalize(section)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
