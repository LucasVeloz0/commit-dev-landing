import React from 'react';
import case1 from '../images/case1.png';
import case2 from '../images/case2.png';
import case3 from '../images/case3.png';
import backgroundImage from '../images/background-cases.png';

const CaseDeSucesso = () => {
  return (
    <section className="case-de-sucesso my-8"
             style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2 className="text-3xl font-roboto text-white text-center pt-11 pb-4">Cases de Sucesso.</h2>
      <section className="w-11/12 mx-auto my-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a href="https://neurofeedbacksorocabasp.com.br" target="_blank" rel="noopener noreferrer">
              <div className="h-fit flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <span className="block w-full h-full overflow-hidden">
                  <img src={case1} alt="Projeto 1" className="h-full w-full object-cover rounded-2xl" />
                </span>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a href="https://gabiestrela.com" target="_blank" rel="noopener noreferrer">
              <div className="h-fit flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <span className="block w-full h-full overflow-hidden">
                  <img src={case2} alt="Projeto 2" className="h-full w-full object-cover rounded-2xl" />
                </span>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a href="https://play.google.com/store/apps/details?id=com.felipe.tarot&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <div className="h-fit flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <span className="block w-full h-full overflow-hidden">
                  <img src={case3} alt="Projeto 3" className="h-full w-full object-cover rounded-2xl" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CaseDeSucesso;