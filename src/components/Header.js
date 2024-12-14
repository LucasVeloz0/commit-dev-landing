
import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../images/logo-400x100-white.png';

const Header = () => {
  return (
    <header id="header" className="bg-black text-white px-4 sm:px-8 lg:px-16 py-8">
      {/* Contêiner Principal para Consistência de Padding */}
      <div className="max-w-7xl mx-auto">
        {/* Menu no Topo */}
        <div className="flex flex-wrap justify-between items-center py-4">
          {/* Logo à Esquerda */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo Commit Dev" className="h-8 sm:h-10 mr-4" />
          </div>
          {/* Links de Navegação */}
          <nav className="space-x-4 sm:space-x-8 mt-4 sm:mt-0">
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
        </div>

        {/* Conteúdo Central */}
        <div className="bg-gradient-to-tr from-white via-gray-100 to-gray-400 text-[#203359] text-center px-6 sm:px-12 md:px-16 py-10 sm:py-16 rounded-lg shadow-lg mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-regular mb-4 font-michroma">
            Contrate a Commit.dev para criar seu site!
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 font-roboto">
            Seu negócio será visível por seus clientes com seu site rápido e seguro.
          </h2>
          <p className="text-base sm:text-lg mb-6 font-roboto">
            Criamos soluções web e aplicativos de alto desempenho.
            <br />
            Sites, sistemas web e aplicativos.
          </p>
          <div className="flex justify-center sm:justify-end">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;