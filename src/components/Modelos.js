import React from 'react';
import './Modelos.css'; // Import the CSS file for custom animations
import projeto1 from '../images/projeto1.png';
import projeto2 from '../images/projeto2.png';
import projeto3 from '../images/projeto3.png';
import projeto4 from '../images/projeto4.png';
import projeto5 from '../images/projeto5.png';
import projeto6 from '../images/projeto6.png';
import projeto7 from '../images/projeto7.png';
import projeto8 from '../images/projeto8.png';

const Modelos = () => {
  return (
    <section className="case-de-sucesso">
      <section className="w-11/12 mx-auto my-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:auto"> 
            <h2 className="text-3xl font-michroma text-white text-center pb-11">Modelos de Sites.</h2>        
              <div className="bg-custom-background h-96 flex items-center justify-center overflow-hidden rounded-lg">
                <span className="relative w-full h-full flex space-x-4">
                  <img src={projeto1} alt="Projeto 1" className="w-1/4 h-full object-cover animate-slide-fade rounded-2xl " />
                  <img src={projeto2} alt="Projeto 2" className="w-1/4 h-full object-cover animate-slide-fade delay-2s rounded-2xl" />
                  <img src={projeto3} alt="Projeto 3" className="w-1/4 h-full object-cover animate-slide-fade delay-4s rounded-2xl" />
                  <img src={projeto4} alt="Projeto 4" className="w-1/4 h-full object-cover animate-slide-fade delay-6s rounded-2xl" />
                  <img src={projeto5} alt="Projeto 5" className="w-1/4 h-full object-cover animate-slide-fade delay-8s rounded-2xl" />
                  <img src={projeto6} alt="Projeto 6" className="w-1/4 h-full object-cover animate-slide-fade delay-10s rounded-2xl" />
                  <img src={projeto7} alt="Projeto 7" className="w-1/4 h-full object-cover animate-slide-fade delay-12s rounded-2xl" />
                  <img src={projeto8} alt="Projeto 8" className="w-1/4 h-full object-cover animate-slide-fade delay-14s rounded-2xl" />
                </span>
              </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Modelos;