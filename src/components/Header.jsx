import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#projects", label: "Projetos" },
    { href: "#about", label: "Sobre Mim" },
    { href: "#skills", label: "Habilidades" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-50 to-indigo-100 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            WPB
          </h1>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="hidden lg:flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-blue-600 focus:rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        <nav className="hidden lg:block" aria-label="Contact button">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >
            Fale Comigo
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <aside
          id="mobile-menu"
          className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4"
          aria-label="Mobile menu"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-blue-600 focus:rounded"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
