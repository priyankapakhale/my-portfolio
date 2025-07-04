const Header = () => {
  return (
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
          <a href="#projects" className="text-gray-700 hover:text-purple-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
