import React, { useState, useEffect } from 'react';
import './BotaoFlutuante.css';
import BotaoIcon from '../images/whatsicon.png';

const BotaoFlutuante = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowMessage(prev => !prev);
        }, 10000); // Alterna a visibilidade a cada 10 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const contatoSection = document.getElementById('contato');
            if (contatoSection) {
                const rect = contatoSection.getBoundingClientRect();
                setShowBackToTop(rect.top <= window.innerHeight && rect.bottom >= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-center font-roboto">
            <div
                className={`mb-2 p-2 bg-white text-black rounded shadow-lg transition-opacity duration-500 ${
                    showMessage ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {showBackToTop ? 'Voltar ao topo' : 'Olá, posso ajudar?'}
            </div>
            {showBackToTop ? (
                <button
                    onClick={handleBackToTop}
                    className="botao-flutuante bg-blue-500 rounded-full p-4 shadow-lg hover:bg-blue-600 transition duration-300 relative"
                >
                    <span className="botao-flutuante::after"></span>
                </button>
            ) : (
                <a
                    href="https://wa.me/5515996012951"
                    className=" rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={BotaoIcon}
                        alt="WhatsApp"
                        className="w-12 h-12"
                    />
                </a>
            )}
        </div>
    );
};

export default BotaoFlutuante;