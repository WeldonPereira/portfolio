import {
  FaLaptopCode,
  FaDatabase,
  FaProjectDiagram,
  FaUsers,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaTrello,
  FaJira,
  FaChartLine,
  FaLightbulb,
  FaComments,
  FaBrain,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: "Desenvolvimento Web & Mobile",
      items: [
        {
          icon: <FaReact className="text-cyan-500" />,
          name: "React / React Native",
        },
        {
          icon: <FaJsSquare className="text-yellow-500" />,
          name: "JavaScript / TypeScript",
        },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        {
          icon: <FaCss3Alt className="text-blue-500" />,
          name: "CSS3 / Tailwind CSS",
        },
        { icon: <FaLaptopCode className="text-indigo-600" />, name: "Next.js" },
      ],
      link: "#contact",
    },
    {
      icon: <FaDatabase className="text-4xl text-green-600" />,
      title: "Banco de Dados & Análise de Dados",
      items: [
        { icon: <FaDatabase className="text-green-600" />, name: "SQL" },
        { icon: <FaPython className="text-yellow-600" />, name: "Python" },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "Pandas & Matplotlib",
        },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "APIs REST",
        },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "Data Visualization",
        },
      ],
      link: "#contact",
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-yellow-600" />,
      title: "Gestão de Projetos & Processos",
      items: [
        {
          icon: <FaChartLine className="text-green-600" />,
          name: "Metodologias Ágeis (Scrum, Kanban)",
        },
        {
          icon: <FaTrello className="text-blue-500" />,
          name: "Trello / Notion",
        },
        { icon: <FaJira className="text-indigo-600" />, name: "Jira Software" },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "OKRs e KPIs",
        },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "Gestão de Stakeholders",
        },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "ERP & Automação de Processos",
        },
      ],
      link: "#contact",
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" />,
      title: "Competências Profissionais & UX",
      items: [
        {
          icon: <FaUsers className="text-purple-600" />,
          name: "User Experience & UI Research",
        },
        {
          icon: <FaComments className="text-blue-600" />,
          name: "Comunicação Assertiva",
        },
        {
          icon: <FaLightbulb className="text-yellow-500" />,
          name: "Liderança Colaborativa",
        },
        {
          icon: <FaBrain className="text-pink-500" />,
          name: "Pensamento Crítico & Resolução de Problemas",
        },
        {
          icon: <FaUsers className="text-purple-600" />,
          name: "Trabalho em Equipe & Gestão de Conflitos",
        },
        {
          icon: <FaLaptopCode className="text-indigo-600" />,
          name: "Adaptação Tecnológica (IA Generativa)",
        },
        {
          icon: <FaUsers className="text-purple-600" />,
          name: "Inglês Técnico Profissional",
        },
      ],
      link: "#contact",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Minhas <span className="text-blue-600">Habilidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aqui apresento minhas principais competências técnicas e
            profissionais, alinhadas com as demandas do mercado de trabalho.
          </p>
        </header>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          {skills.map((skill, index) => (
            <li key={index}>
              <article className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                <figure className="mb-6">{skill.icon}</figure>
                <h1 className="text-xl font-bold text-gray-800 mb-3">
                  {skill.title}
                </h1>

                {/* LISTA DE HABILIDADES EM TABELA */}
                <table className="w-full text-left text-gray-700 text-sm mb-6">
                  <tbody>
                    {skill.items.map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-2 pr-3 w-8">{item.icon}</td>
                        <td className="py-2">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <a
                  href={skill.link}
                  className="text-blue-600 font-medium hover:text-blue-700 transition flex items-center mt-auto"
                >
                  Saiba mais
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
