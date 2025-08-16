import {
  FaLaptopCode,
  FaDatabase,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: (
        <FaLaptopCode className="text-4xl text-blue-600" aria-hidden="true" />
      ),
      title: "Desenvolvimento Web & Mobile",
      desc: "Habilidades em React, Next.js, React Native, HTML, CSS, JavaScript, TypeScript e Tailwind CSS, criando interfaces responsivas e modernas.",
      link: "#web-mobile",
    },
    {
      icon: (
        <FaDatabase className="text-4xl text-green-600" aria-hidden="true" />
      ),
      title: "Banco de Dados & Análise de Dados",
      desc: "Competências em modelagem de dados, SQL, Python, Pandas, Matplotlib e APIs para manipulação, análise e visualização de dados.",
      link: "#data-analysis",
    },
    {
      icon: (
        <FaProjectDiagram
          className="text-4xl text-yellow-600"
          aria-hidden="true"
        />
      ),
      title: "Gestão de Projetos & Processos",
      desc: "Experiência em BPM, Scrumban, ERP, gestão de tempo e projetos, indicadores de desempenho (KPI) e desenvolvimento de painéis de controle.",
      link: "#project-management",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" aria-hidden="true" />,
      title: "Competências Profissionais & UX",
      desc: "Foco em User Experience, trabalho em equipe, resolução de conflitos, raciocínio lógico, escrita técnica e inglês técnico aplicado à computação.",
      link: "#professional-skills",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4">
        <header
          className="text-center mb-16"
          data-aos-delay="500"
          data-aos="fade-up"
        >
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Minhas <span className="text-blue-600">Habilidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aqui apresento minhas principais competências técnicas e
            profissionais, alinhadas com as demandas do mercado de trabalho
            atual.
          </p>
        </header>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos-delay="500"
          data-aos="fade-up"
        >
          {skills.map((skill, index) => (
            <li key={index}>
              <article className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                <figure className="mb-6">{skill.icon}</figure>
                <h1 className="text-xl font-bold text-gray-800 mb-3">
                  {skill.title}
                </h1>
                <p className="text-gray-600 m-6 flex-grow">{skill.desc}</p>
                <a
                  href={skill.link}
                  className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center mt-auto"
                  aria-label={`Saiba mais sobre ${skill.title}`}
                >
                  Saiba mais
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>
        <aside
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden mt-20"
        >
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Pronto para realizar seu serviço ou projeto?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como posso ajudar a transformar sua
              ideia em realidade de forma prática e eficiente.
            </p>
            <nav className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
              >
                Fale Comigo
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Skills;
