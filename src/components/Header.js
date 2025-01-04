import React, { useState, useEffect } from 'react';
import BackgroundVideo from '../images/digitando-codigos.mp4';
import SobreporVideo from '../images/dots-movie.png';
import Logo from '../images/logo-400x100-white.png'; // Certifique-se de que o caminho para o logo está correto

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
    <header id="header" className="relative text-white">
      {/* Menu fixo no topo */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#000b1b] opacity-100 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-12 py-4">
          {/* Logo */}
          <img src={Logo} alt="Logo Commit Dev" className="h-8 sm:h-10" />

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
            className="sm:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* Menu para dispositivos móveis */}
        {isMenuOpen && (
          <nav className="sm:hidden bg-[#000b1b] text-white">
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
              onClick={() => handleButtonClick('cases-de-sucesso')}
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
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={BackgroundVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>

        {/* Overlay Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-10 pointer-events-none"
          src={SobreporVideo}
          alt="Background Overlay"
        />

        {/* Conteúdo sobre o vídeo */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4 sm:px-12 py-10">
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-michroma mb-4 animate-breathing">
              Contrate a Commit.dev para criar seu site!
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 font-roboto text-left">
              Seu negócio será visível por seus clientes com seu site rápido e seguro.
            </h2>
            <p className="text-sm sm:text-lg mb-6 font-roboto text-left">
              Criamos soluções web e aplicativos de alto desempenho.
              <br />
              Sites, sistemas web e aplicativos.
            </p>
            <div className="w-full flex justify-center sm:justify-end">
              <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;