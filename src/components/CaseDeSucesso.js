import React from 'react';

const CaseDeSucesso = () => {
  return (
    <section className="case-de-sucesso">
      <section className="w-11/12 mx-auto my-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-4">
            <a href="https://link-para-projeto-1.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span>
                  <img src="/assets/projeto1.jpg" alt="Projeto 1" className="h-full w-full object-cover" />
                </span>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <a href="https://link-para-projeto-2.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span>
                  <img src="/assets/projeto2.jpg" alt="Projeto 2" className="h-full w-full object-cover" />
                </span>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <a href="https://link-para-projeto-3.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span>
                  <img src="/assets/projeto3.jpg" alt="Projeto 3" className="h-full w-full object-cover" />
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