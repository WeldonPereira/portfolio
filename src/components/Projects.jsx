import cineSearch from "../assets/cineSearch.png";
import indianaJonesGame from "../assets/indianaJonesGame.png";
import dataStructure from "../assets/dataStructure.png";
import medicApp from "../assets/medicApp.jpg";
import painelIndicadoresIFPE from "../assets/painelIndicadoresIFPE.png";
import dashboard from "../assets/dashboard.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
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
      </div>
    </section>
  );
};

export default Projects;
