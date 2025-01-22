import React, { useState, useEffect } from 'react';
import BackgroundVideo from '../images/desenvolvendo.webm';
import SobreporVideo from '../images/dots-movie.png';
import Logo from '../images/logo400x100-white.webp'; // Certifique-se de que o caminho para o logo está correto

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="header" className=" relative w-full h-screen overflow-hidden">
      {/* Menu fixo no topo */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#000b1b] opacity-100 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-12 py-4">
          {/* Logo */}
          <img src={Logo} alt="Logo Commit Dev" className="w-48 h-auto max-w-full sm:w-40 md:w-48 lg:w-64 xl:w-80" />

          {/* Navegação */}
          <nav className="hidden sm:flex space-x-6">
            <button
              className="text-white hover:text-gray-300"
              onClick={() => handleButtonClick('home')}
            >
              Home
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={() => handleButtonClick('modelos')}
            >
              Modelos
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={() => handleButtonClick('cases')}
            >
              Cases de Sucesso
            </button>
            <button
              className="text-white hover:text-gray-300"
              onClick={() => handleButtonClick('contato')}
            >
              Contato
            </button>
          </nav>

          {/* Botão de menu para dispositivos móveis */}
          <button
            className="sm:hidden text-white focus:outline-none "
            aria-label="Abrir menu"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Menu para dispositivos móveis */}
        {isMenuOpen && (
          <nav className="fixed top-16 left-0 w-full bg-[#000b1b] bg-opacity-75 text-white z-50">
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => handleButtonClick('home')}
            >
              Home
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => handleButtonClick('modelos')}
            >
              Modelos
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => handleButtonClick('cases')}
            >
              Cases de Sucesso
            </button>
            <button
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => handleButtonClick('contato')}
            >
              Contato
            </button>
          </nav>
        )}
      </div>

      {/* Conteúdo Principal */}
      <div className="relative w-full h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={BackgroundVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>

        {/* Overlay Image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <img
          className="absolute inset-0 w-screen h-screen object-cover opacity-20 z-10 pointer-events-none"
          src={SobreporVideo}
          alt="Background Overlay"
        />
        </div>
      

        {/* Conteúdo sobre o vídeo */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4 sm:px-12 py-10">
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-michroma mb-4 animate-breathing break-words text-responsive max-w-full"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Sombra preta sutil
            }}>
              Contrate a Commit.dev para criar seu site!
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 font-roboto text-left"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Sombra preta sutil
            }}>
              Sua empresa será visível por seus clientes com seu site rápido e seguro.
            </h2>
            <p className="text-base sm:text-lg mb-6 font-roboto text-left"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', // Sombra preta sutil
            }}>
              Criamos soluções web e aplicativos de alto desempenho.
              <br />
              Sites, sistemas web e aplicativos.
            </p>
            <div className="w-full flex justify-center sm:justify-end">
            <a
              href="https://wa.me/5515996012951?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20[insira%20o%20serviço%20desejado,%20como%20criação%20de%20site%20ou%20SEO].%20Poderíamos%20conversar?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 w-60 text-white bg-blue-800 rounded-lg border border-blue-700 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-black"
            >
              Solicite seu orçamento
            </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;