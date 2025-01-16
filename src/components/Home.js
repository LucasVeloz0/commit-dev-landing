import React, { useEffect } from "react";
import '../components/Home.css';
import ImageSeo from '../images/seo.png'; // Ajuste o caminho conforme necessário
import ImageSistemas from '../images/sistemas-web.png';
import ImageMobile from '../images/mobile.png';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const icons = document.querySelectorAll("#div-icon");
      icons.forEach((icon) => {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.1;
        icon.style.top = `${Math.min(offset, 220)}px`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="font-roboto" id="home">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="h2-home">Por que ter um site profissional é essencial para o seu negócio?</h2>
        <p className="text-base text-center">
          Ter um site profissional não é apenas um diferencial, é uma necessidade.
          Seu site será a porta de entrada para clientes conhecerem sua empresa,
          seus serviços e produtos. Ele é uma vitrine aberta 24 horas por dia,
          oferecendo informações relevantes e mostrando que sua marca está
          preparada para atender às demandas.
        </p>
        <h2 className="h2-home mt-8">Somos especialistas em criar sites sob medida, focados em resultados.</h2>
        <p className="text-base text-center">
          Cada projeto é desenvolvido com um design exclusivo, pensado para valorizar sua marca e conquistar novos
          clientes.
        </p>
      </div>

      <div className=" justify-center flex flex-wrap font-roboto">
        {[
          {
            img: ImageSeo,
            text: "Por isso, desenvolvemos sites otimizados para SEO , garantindo que sua empresa apareça nas primeiras páginas do Google. Criamos estruturas estratégicas e com velocidade aprimorada para destacar sua marca na internet.",
          },
          {
            img: ImageSistemas,
            text: "Mais do que apenas sites, criamos sistemas web completos, integrações com seu sistema ERP, gestão de ativos, frotas e ordens de serviços.",
          },
          {
            img: ImageMobile,
            text: "E tudo isso alinhado com aplicativos modernos e dinâmicos, para gestão do seu negócio estar sempre na palma de suas mãos.",
          },
        ].map(({ img, text }, index) => (
          <div className="flex-div sm:max-w-sm md:max-w-md lg:max-w-lg" key={index}>
            <div id="div-icon">
              <img src={img} alt="" className="icon sm:max-w-sm md:max-w-md lg:max-w-lg" />
            </div>
            <p className="text-base mt-2">{text}</p>
          </div>
        ))}
      </div>
      

      <Carousel
        items={[
          "Performance web elevada",
          "Desempenho otimizado",
          "Velocidade e eficiência",
          "Tecnologia",
          "Sites personalizados",
          "Soluções sob medida",
          "Ampliação da base de clientes",
          "Captação de novos negócios",
          "Atração de leads qualificados",
          "Novos clientes",
          "Conversão",
          "Personalizado",
          "Performance",
          "Resultados",
          "Estratégias digitais",
          "E-commerce",
          "Design responsivo e amigável",
          "Criação de sites otimizados para SEO",
        ]}
      />


<Carousel
        items={[
          "Performance web elevada",
          "Desempenho otimizado",
          "Velocidade e eficiência",
          "Tecnologia",
          "Sites personalizados",
          "Soluções sob medida",
          "Ampliação da base de clientes",
          "Captação de novos negócios",
          "Atração de leads qualificados",
          "Novos clientes",
          "Conversão",
          "Personalizado",
          "Performance",
          "Resultados",
          "Estratégias digitais",
          "E-commerce",
          "Design responsivo e amigável",
          "Criação de sites otimizados para SEO",
        ]}
        reverse={true}
      />

      <div className="chamada-acao1 flex-col">
        <h2 className="h2-home text-base sm:text-xl md:text-2xl mb-4 font-roboto">Vamos transformar sua ideia em uma presença digital que te traz resultados!</h2>
        <a
  href="https://wa.me/5515996012951?text=Olá!%20Estou%20interessado%20em%20soluções%20web%20e%20SEO.%20Poderíamos%20conversar%20sobre%20como%20a%20Commit%20Dev%20pode%20ajudar%20meu%20negócio?"
  target="_blank"
  rel="noopener noreferrer"
  className="btn mt-6 flex items-center justify-center gap-2 px-4 py-2 w-48 text-white bg-green-600 rounded-lg border border-gray-300 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
>
Fale Conosco
</a>
      </div>
      
    </section>
  );
};

const shuffleArray = (array) => {
  const shuffled = [...array]; // Cria uma cópia do array original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troca os elementos
  }
  return shuffled;
};

const Carousel = ({ items, reverse = false }) => {
  // Embaralha os itens antes de renderizá-los
  const randomizedItems = shuffleArray(items);

  return (
    <div className="carrossel-wrapper">
      <div className={reverse ? "carrossel-volta" : "carrossel"}>
        {randomizedItems.concat(randomizedItems).map((item, index) => (
          <div className="carrossel-item" key={index}>
            <div className="carrossel-text">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;