import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaLinkedin className="text-blue-600 text-2xl" />,
      title: "LinkedIn",
      content: (
        <a
          href="https://www.linkedin.com/in/weldon-pereira-barros/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 underline"
        >
          Conecte-se comigo
        </a>
      ),
    },
    {
      icon: <FaGithub className="text-black text-2xl" />,
      title: "GitHub",
      content: (
        <a
          href="https://github.com/WeldonPereira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black underline"
        >
          Veja meus projetos
        </a>
      ),
    },
    {
      icon: <FaEnvelope className="text-red-500 text-2xl" />,
      title: "E-mail",
      content: (
        <a
          href="mailto:weldonbarros179@gmail.com"
          className="text-gray-600 hover:text-red-500 underline"
        >
          Envie um e-mail
        </a>
      ),
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-2xl" />,
      title: "WhatsApp",
      content: (
        <a
          href="https://wa.me/5581993114845"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-500 underline"
        >
          Me chame no WhatsApp
        </a>
      ),
    },
  ];

  return (
    <article
      id="contact"
      className="py-20 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-100 opacity-30 z-10" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10">
            Vamos <span className="text-blue-600">Construir Juntos</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto relative z-10">
            Se você tem uma ideia, projeto ou oportunidade, vamos conversar!
            Estou aberto a colaborações, desenvolvimento de soluções digitais
            modernas e troca de experiências.
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-12">
          <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
            <section className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Minhas Redes & Contato
              </h2>
              <address className="flex flex-col gap-4">
                {contactItems.map((item, index) => (
                  <article
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <figure>{item.icon}</figure>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      {item.content}
                    </div>
                  </article>
                ))}
              </address>
            </section>
          </aside>

          <section data-aos="fade-up" data-aos-delay="600" className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Como podemos trabalhar juntos?
              </h2>
              <p className="text-gray-600 mb-6">
                Posso colaborar em desenvolvimento Frontend, Backend, Fullstack,
                UI/UX ou outros projetos digitais. Entre em contato por qualquer
                uma das redes ao lado e vamos discutir ideias, soluções e
                parcerias.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="mailto:weldonbarros179@gmail.com"
                  className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition text-center"
                >
                  Enviar E-mail
                </a>
                <a
                  href="https://wa.me/5581993114845"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
};

export default Contact;
