import React from 'react';
import ImageSeo from '../images/seo.png'; // Ajuste o caminho conforme necessário
import ImageSistemas from '../images/sistemas-web.png';
import ImageMobile from '../images/mobile.png';
import Giro from '../images/giro.png'; // Ajuste o caminho conforme necessário

const Home = () => {
  return (
    <section className="home">      
      <section id="home" className="py-16 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-right w-full">
            {/* Div do Título (h2) */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#25a35b] mb-4 font-roboto">
                Por que ter um site profissional
                <br />
                é essencial para o seu negócio?
              </h2>
            </div>

            {/* Parágrafo Para alterar (p) */}
            <div className="flex-1 px-5">
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-100 font-roboto">
                  Ter um site profissional não é apenas um diferencial, é uma necessidade. Seu site será a porta de entrada para clientes conhecerem sua
                  empresa, seus serviços e produtos. Ele é uma vitrine aberta 24 horas por dia, oferecendo informações relevantes e mostrando que sua marca
                  está preparada para atender às demandas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Novo Título (h2) */}
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <h2 className="text-3xl font-bold text-[#25a35b] mb-4 font-roboto">
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
            <p className="text-lg text-[#25a35b] font-roboto mb-4">Vamos transformar sua ideia!</p>
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
          <div className="flex-1 relative">
          <div className="w-full max-w-[300px] max-h-[300px] mx-auto relative">
      <img
        src={ImageSeo}
        alt="Exemplo de site"
        className="w-full h-full rounded-lg"
      />
      <img
        src={Giro}
        alt="Giro"
        className="absolute inset-0 w-full h-full rounded-lg animate-rotate"
      />
    </div>
  </div>
            <div className="flex-1 px">
              <p className="text-lg text-gray-100 font-roboto max-w-2xl">
                Apenas um site bonito não basta, ele precisa ser encontrado.
              </p>
            </div>
          </div>

          {/* Separador com Título */}
          <h2 className="text-3xl font-bold text-gray-100 my-8 text-center font-roboto">
            Mais do que apenas sites...
          </h2>

          {/* Imagem à esquerda com texto à direita superior e nova imagem abaixo */}
          <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 relative">
          <div className="w-full max-w-[300px] max-h-[300px] mx-auto relative">
            <img
              src={ImageSistemas}
              alt="Exemplo de site"
              className="w-full h-full rounded-lg"
            />
            <img
              src={Giro}
              alt="Giro"
              className="absolute inset-0 w-full h-full rounded-lg animate-rotate"
            />
          </div>
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
        ...aplicativos para gestão do seu negócio...
      </p>
    </div>
          <div className="flex-1 relative">
            <div className="w-full max-w-[300px] max-h-[300px] mx-auto relative">
              <img
                src={ImageMobile}
                alt="Exemplo de performance"
                className="w-full h-full rounded-lg"
              />
              <img
                src={Giro}
                alt="Giro"
                className="absolute inset-0 w-full h-full rounded-lg animate-rotate"
              />
            </div>
          </div>
        </div>
        </div>
      </section>
    </section>
  );
};

export default Home;