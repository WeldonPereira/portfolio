import CIn from "../assets/CIn.png";
import Udemy from "../assets/Udemy.png";
import {
  FaUniversity,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMedal,
} from "react-icons/fa";

const About = () => {
  const formacoes = [
    {
      id: 1,
      image: CIn,
      title: "Bacharelado em Sistemas de Informação",
      institution: "Centro de Informática - UFPE",
      period: "2023 - atualmente",
      link: "https://portal.cin.ufpe.br/graduacao/sistemas-de-informacao/",
    },
    {
      id: 2,
      image: Udemy,
      title: "Curso de Inglês do Básico ao Avançado",
      institution: "Udemy",
      period: "atualmente",
      link: "https://www.udemy.com/course/curso-ingles-completo-para-quem-quer-ser-fluente-rapido/",
    },
    {
      id: 3,
      image: Udemy,
      title: "Programação em Python 3: Do Básico ao Avançado",
      institution: "Udemy",
      period: "atualmente",
      link: "https://www.udemy.com/course/python-3-do-zero-ao-avancado/",
    },
    {
      id: 4,
      image: Udemy,
      title: "React: Do Zero à Maestria",
      institution: "Udemy",
      period: "2024 - 2025",
      link: "https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/",
      certificado:
        "https://www.udemy.com/certificate/UC-9e43d264-daa9-4e2f-a6f4-22435dc36588/",
    },
    {
      id: 5,
      image: Udemy,
      title: "Desenvolvimento Web Front-end: Fundamentos",
      institution: "Udemy",
      period: "2024 - 2025",
      link: "https://www.udemy.com/course/curso-web-design-fundamentos-aprenda-html-css-e-javascript/",
      certificado:
        "https://www.udemy.com/certificate/UC-9a0be9ea-d43d-4520-bf45-d53cdf802778/",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center relative mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sobre <span className="text-blue-500">Mim</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto border-l-8 border-blue-500">
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed text-left">
              <p>
                Sou <strong>Weldon Pereira Barros</strong>, 20 anos, estudante
                do 6º período de <strong>Sistemas de Informação</strong> no
                Centro de Informática da <strong>UFPE</strong>.
              </p>
              <p>
                Tenho experiência no desenvolvimento de aplicações web modernas,
                utilizando <strong>React, JavaScript, TypeScript</strong> e{" "}
                <strong>Tailwind CSS</strong>. Participei de projetos acadêmicos
                e pessoais que envolveram desde a concepção da ideia até a
                entrega final.
              </p>
              <p>
                Busco criar interfaces <strong>modernas, responsivas</strong> e
                de alto desempenho, sempre com foco na experiência do usuário e
                em soluções que gerem valor real para empresas e pessoas.
              </p>
            </div>
          </div>
        </header>

        <section data-aos="fade-up" data-aos-delay="500">
          <h3 className="relative text-2xl md:text-3xl font-bold text-gray-800 mb-12 after:content-[''] after:block after:w-36 after:h-[2px] after:bg-blue-500 after:mt-2">
            Formação Acadêmica
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-500 -translate-x-1/2"></div>

            <div className="space-y-12">
              {formacoes.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  } relative items-center`}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-5/12 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-contain rounded-lg border border-gray-200 shadow-sm"
                      />
                      <div>
                        <h4 className="font-bold text-xl text-blue-600">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 flex items-center gap-2">
                          <FaUniversity className="text-blue-500" />
                          {item.institution}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                          <FaCalendarAlt className="text-blue-500" />
                          {item.period}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                      >
                        Visitar <FaExternalLinkAlt />
                      </a>
                      {item.certificado && (
                        <a
                          href={item.certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg"
                        >
                          Certificado <FaMedal />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
