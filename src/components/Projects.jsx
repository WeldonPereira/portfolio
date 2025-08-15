import cineSearch from "../assets/cineSearch.png";
import indianaJonesGame from "../assets/indianaJonesGame.png";
import dataStructure from "../assets/dataStructure.png";
import medicApp from "../assets/medicApp.jpg";
import painelIndicadoresIFPE from "../assets/painelIndicadoresIFPE.png";
import dashboard from "../assets/dashboard.png";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiFastapi,
  SiNextdotjs,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "MedicApp",
      image: medicApp,
      link: "https://github.com/RicardoMorato/MedicApp",
      description:
        "Aplicativo que fornece informações rápidas e detalhadas sobre medicamentos e suas interações, promovendo uso seguro e consciente.",
      skills: [
        <SiTypescript key="ts" color="#3178C6" />,
        <FaReact key="react" color="#61DAFB" />,
        <SiPython key="python" color="#3776AB" />,
        <SiFastapi key="fastapi" color="#009688" />,
        <SiPostgresql key="postgres" color="#336791" />,
      ],
    },
    {
      id: 2,
      name: "Painel IFPE",
      image: painelIndicadoresIFPE,
      link: "https://github.com/joaoadsobral/Painel-de-Indicadores",
      description:
        "Sistema inteligente que transforma dados em ações estratégicas para otimizar recursos, melhorar a gestão e apoiar decisões no IFPE.",
      skills: [<SiFigma key="figma" color="#F24E1E" />],
    },
    {
      id: 3,
      name: "Dashboard",
      image: dashboard,
      link: "https://github.com/WeldonPereira/dashboard-contabil-magalu",
      description:
        "Ferramenta interativa com indicadores de liquidez, endividamento e desempenho da Magazine Luiza de 2022 a 2024, facilitando análise e decisões.",
      skills: [
        <SiTypescript key="ts3" color="#3178C6" />,
        <SiTailwindcss key="tailwind3" color="#38BDF8" />,
        <SiNextdotjs key="next3" color="#000000" />,
        <SiPython key="python3" color="#3776AB" />,
      ],
    },
    {
      id: 4,
      name: "CineSearch",
      image: cineSearch,
      link: "https://github.com/WeldonPereira/CineSearch",
      description:
        "Aplicação web para buscar e visualizar detalhes de filmes usando a API TMDB. Desenvolvida em React, React Router e Tailwind CSS, oferece interface responsiva e intuitiva para fãs de cinema.",
      skills: [
        <FaReact key="react4" color="#61DAFB" />,
        <SiTailwindcss key="tailwind4" color="#38BDF8" />,
        <SiJavascript key="js4" color="#F7DF1E" />,
      ],
    },
    {
      id: 5,
      name: "Indiana Runner",
      image: indianaJonesGame,
      link: "https://github.com/joaoadsobral/Projeto-P1",
      description:
        "Game estilo runner onde o jogador desvia de obstáculos, coleta moedas e avança no mapa. Inspirado no universo de Indiana Jones, combina elementos visuais e sonoros imersivos.",
      skills: [<SiPython key="python5" color="#3776AB" />],
    },
    {
      id: 6,
      name: "BD Pernambuco",
      image: dataStructure,
      link: "https://github.com/eduardomatos7/data-structures",
      description:
        "Banco de dados público com mais de 90 locais e 100 conexões do estado, incluindo distâncias reais, útil para estudos de transporte, rotas e conectividade.",
      skills: [<SiPython key="python6" color="#3776AB" />],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center relative mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Conheça meus <span className="text-blue-600">Projetos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Aqui estão alguns dos projetos que desenvolvi para demonstrar minhas
            habilidades e experiência.
          </p>
        </header>
        <ul
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project) => (
            <li key={project.id} className="group relative">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <figure className="relative h-50 overflow-hidden">
                  <img
                    src={project.image}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  ></span>
                </figure>
                <div className="p-6 relative -mt-10">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-md p-6">
                    <header className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-blue-600">
                        {project.name}
                      </h3>
                      <ul className="flex gap-2 ml-2">
                        {project.skills.map((skill, index) => (
                          <li key={index} className="text-2xl">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </header>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-800 rounded-md"
                    >
                      GitHub
                      <FaGithub className="ml-2 text-lg" />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <aside
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
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
                href="https://github.com/WeldonPereira"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                aria-label="Conheça mais no GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-lg" />
                Conheça mais
              </a>
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

export default Projects;
