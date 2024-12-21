import React from 'react';

const CaseDeSucesso = () => {
    return (
        <section className="w-11/12 mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4 text-center ">Cases de Sucesso</h2>
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <span>Imagem do Projeto 1</span>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <span>Imagem do Projeto 2</span>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <span>Imagem do Projeto 3</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseDeSucesso;