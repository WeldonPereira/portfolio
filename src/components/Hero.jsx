import heroImage from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      <article className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <hgroup data-aos="fade-up" data-aos-delay="500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Olá! Eu sou{" "}
              <mark className="text-blue-600 bg-transparent">
                Weldon Pereira,{" "}
              </mark>
              Desenvolvedor Web
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Como desenvolvedor web e estudante do Centro de Informática da
              UFPE, meu objetivo é criar soluções digitais eficientes que
              proporcionem experiências excelentes aos usuários.
            </p>
          </hgroup>
          <nav
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-center transition shadow-lg"
            >
              Fale Comigo
            </a>
            <a
              href="#projects"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-center transition"
              aria-label="Conheça meus projetos"
            >
              Meus Projetos
            </a>
          </nav>
        </div>
        <figure
          data-aos="fade-up"
          data-aos-delay="700"
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src={heroImage}
              alt="Foto profissional de Weldon Pereira"
              className="relative z-10 rounded-full shadow-2xl w-full h-full object-cover"
              width="500"
              height="500"
              loading="eager"
            />
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Hero;
