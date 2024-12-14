import React from 'react';
import ImageSeo from '../images/seo.png';
import ImageSistemas from '../images/sistemas-web.png';
import ImageMobile from '../images/mobile.png';

const Home = () => {
  return (
    <section id="home" className="bg-black py-16 px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-right w-full">
        {/* Div do Título (h2) */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#f54a0f] mb-4 font-roboto ">
            Por que ter um site profissional
            <br />
            é essencial para o seu negócio?
          </h2>
        </div>

        {/* Parágrafo (p) */}
        <div className="flex-1 px-5 ">
          <p className="text-lg text-gray-100 font-roboto max-w-2xl">
            Ter um site profissional não é apenas um diferencial, é uma necessidade. Seu site será a porta de entrada para clientes conhecerem sua
            empresa, seus serviços e produtos. Ele é uma vitrine aberta 24 horas por dia, oferecendo informações relevantes e mostrando que sua marca
            está preparada para atender às demandas.
          </p>
        </div>
      </div>

      {/* Novo Título (h2) */}
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <h2 className="text-3xl font-bold text-[#f54a0f] mb-4 font-roboto">
          Somos especialistas em criar sites sob medida, focados em resultados.
        </h2>
        <p className="text-lg text-gray-100 font-roboto">
          Cada projeto é desenvolvido com um design exclusivo, pensado para valorizar sua marca e conquistar novos clientes.
        </p>
      </div>

      {/* Novas Divs: Esquerda com Parágrafo e Botão, Direita com Lista */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 mt-16">
        {/* Div Esquerda - Parágrafo e Botão */}
        <div className="flex-1 text-center md:text-right">
          <p className="text-lg text-[#f54a0f] font-roboto mb-4">Vamos transformar sua ideia!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Clique Aqui</button>
        </div>

        {/* Div Direita - Lista */}
        <div className="flex-1 text-left">
          <ul className="list-disc text-lg text-gray-100 pl-6">
            <li>Criação de sites otimizados para SEO</li>
            <li>Desenvolvimento de e-commerce eficaz</li>
            <li>Design responsivo e amigável</li>
            <li>Estratégias de marketing digital personalizadas</li>
          </ul>
        </div>
      </div>

      {/* Novo Título e Conteúdo */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center font-roboto ">
          Apenas um site bonito não basta, ele precisa ser encontrado
        </h2>

        {/* Seção com imagem à esquerda e texto à direita */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-right">
            <img
              src={ImageSeo}
              alt="Exemplo de site"
              className="w-full max-w-[300px] max-h-[300px] rounded-lg mx-auto"
            />
          </div>
          <div className="flex-1 px ">
            <p className="text-lg text-gray-100 font-roboto max-w-2xl ">
              Por isso, desenvolvemos sites otimizados para SEO (Search Engine Optimization), garantindo que sua
              empresa apareça nas primeiras páginas do Google. Com técnicas avançadas, criamos conteúdo relevante,
              estruturação estratégica e velocidade aprimorada para destacar sua marca no ambiente digital,
              aumentando seu tráfego orgânico.
              <br />
              Seja visto. Seja encontrado. Cresça com SEO!
            </p>
          </div>
        </div>

        {/* Separador com Título */}
        <h2 className="text-3xl font-bold text-gray-100 my-8 text-center font-roboto">
          Mais do que apenas sites...
        </h2>

        {/* Imagem à esquerda com texto à direita superior e nova imagem abaixo */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-right">
            <img
              src={ImageSistemas}
              alt="Exemplo de design"
              className="w-full max-w-[300px] max-h-[300px] rounded-lg mx-auto"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-100 font-roboto text-center">
            ...criamos sistemas web completos, integrações de sistemas...
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="flex-1">
            <p className="text-lg text-gray-100 font-roboto text-center">
            ...aplicativos para gestão do seu negocio...            </p>
          </div>
          <div className="flex-1">
            <img
              src={ImageMobile}
              alt="Exemplo de performance"
              className="w-full max-w-[300px] max-h-[300px] rounded-lg mc-auto"
            />
          </div>          
        </div>
      </div>
    </section>
  );
};

export default Home;