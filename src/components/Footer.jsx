import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const contactInfo = [
    {
      icon: (
        <FaEnvelope className="text-red-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a
          href="mailto:weldonbarros179@gmail.com"
          className="text-gray-400 hover:text-red-500 transition"
        >
          weldonbarros179@gmail.com
        </a>
      ),
    },
    {
      icon: (
        <FaWhatsapp className="text-green-500 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a
          href="https://wa.me/5581993114845"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition"
        >
          +55 (81) 99311-4845
        </a>
      ),
    },
    {
      icon: (
        <FaLinkedin className="text-blue-600 text-xl mt-1 mr-4 flex-shrink-0" />
      ),
      content: (
        <a
          href="https://www.linkedin.com/in/weldon-pereira-barros/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          LinkedIn
        </a>
      ),
    },
    {
      icon: <FaGithub className="text-white text-xl mt-1 mr-4 flex-shrink-0" />,
      content: (
        <a
          href="https://github.com/WeldonPereira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          GitHub
        </a>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Serviços que Ofereço</h2>
            <p className="text-gray-400">
              Atuo com{" "}
              <span className="text-blue-400">Desenvolvimento Web</span> e
              também colaboro em projetos de{" "}
              <span className="text-blue-400">UI/UX</span>, criando soluções
              digitais modernas e eficientes.
            </p>
          </section>

          <address>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
              Contato
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center">
                  {info.icon}
                  {info.content}
                </li>
              ))}
            </ul>
          </address>

          <section>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Weldon Pereira. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
