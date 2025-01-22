import React from 'react';
import logo from '../images/logo400x100-white.webp';
import instagramIcon from '../images/instagram.svg';
import whatsappIcon from '../images/whatsapp.svg';
import emailIcon from '../images/email.svg';

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white font-roboto">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
          {/* Esquerda: Logo e Contato */}
          <div className="flex flex-col items-center w-full md:w-1/2 md:pb-0">
            <img src={logo} alt="Logo" className="w-64 h-auto mb-4" />
            <div className="flex space-x-6 mb-4">
              <a
                href="https://www.instagram.com/commit.dev.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-100 hover:text-pink-600 transition duration-300"
              >
                <img src={instagramIcon} alt="Fale conosco pelo Instagram" className="w-8 h-8 mb-2" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://wa.me/5515996012951?text=Olá!%20Estava%20navegando%20no%20site%20da%20Commit%20Dev%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20que%20vocês%20oferecem.%20Podemos%20conversar?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-100 hover:text-[#25a35b] transition duration-300"
              >
                <img src={whatsappIcon} alt="Fale conosco pelo WhatsApp" className="w-8 h-8 mb-2" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <a
                href="mailto:contato@commit.dev.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-100 hover:text-blue-500 transition duration-300"
              >
                <img src={emailIcon} alt="Contato via E-mail" className="w-8 h-8 mb-2" />
                <span className="text-sm">E-mail</span>
              </a>
            </div>
          </div>

          {/* Direita: Google Maps */}
          <div className="flex-grow mx-0 w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.2487582355084!2d-47.451423124347585!3d-23.48754787885065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf6002777853c5%3A0x7252d8ca882a697d!2sR.%20Porphyrio%20Loureiro%2C%20666%20-%20Jardim%20Santa%20Ros%C3%A1lia%2C%20Sorocaba%20-%20SP%2C%2018090-060!5e0!3m2!1spt-BR!2sbr!4v1736364964537!5m2!1spt-BR!2sbr&output=embed"
              title='Google Maps'
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
            <p className="text-sm text-center mt-2">R. Porphyrio Loureiro, 666 - Jardim Santa Rosália, Sorocaba - SP, 18090-060</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
