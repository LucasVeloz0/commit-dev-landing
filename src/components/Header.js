import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../images/logo-400x100-white.png';
import BackgroundVideo from '../images/digitando-codigos.mp4';
import SobreporVideo from '../images/dots-movie.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className="relative text-white">
      {/* Menu fixo no topo */}
      <div
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-[#000b1b] opacity-100 shadow-md' : 'bg-transparent'
  }`}
>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
          {/* Logo */}
          <img src={Logo} alt="Logo Commit Dev" className="h-8 sm:h-10" />

          {/* Navegação */}
          <nav className="hidden sm:flex space-x-6">
            <Link
              to="header"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline text-sm sm:text-base"
            >
              Home
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline text-sm sm:text-base"
            >
              Soluções
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline text-sm sm:text-base"
            >
              Contato
            </Link>
          </nav>

          {/* Menu para dispositivos móveis */}
          <button
            className="sm:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-michroma mb-4">
            Contrate a Commit.dev para criar seu site!
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold mb-4 font-roboto">
            Seu negócio será visível por seus clientes com seu site rápido e seguro.
          </h2>
          <p className="text-sm sm:text-lg mb-6 font-roboto">
            Criamos soluções web e aplicativos de alto desempenho.
            <br />
            Sites, sistemas web e aplicativos.
          </p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Saiba Mais
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;