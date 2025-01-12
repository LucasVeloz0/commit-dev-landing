import React, { useEffect, useRef } from 'react';
import '../index.css';
import projeto1 from '../images/projeto1.png';
import projeto2 from '../images/projeto2.png';
import projeto3 from '../images/projeto3.png';
import projeto4 from '../images/projeto4.png';
import projeto5 from '../images/projeto5.png';
import projeto6 from '../images/projeto6.png';
import projeto7 from '../images/projeto7.png';
import projeto8 from '../images/projeto8.png';

const Modelos = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let start = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const translateX = (progress / 10) % (slider.scrollWidth / 2);
      slider.style.transform = `translateX(-${translateX}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const projetos = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

  return (
    <section className="case-de-sucesso my-8 w-full">
      <section className="w-full mx-auto my-8">
        <div className="flex flex-wrap justify-between modelos">
          <div className="w-full">
            <h2 className="text-3xl font-roboto text-white text-center pb-3">Modelos de Sites</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4 px-4">
  {[
    {
      title: "Landing-page",
      description:
        "Capture a atenção do seu público e converta visitantes em clientes! Desenvolvemos landing pages estratégicas, com design impactante e foco em resultados, ideais para campanhas de marketing ou lançamento de produtos.",
    },
    {
      title: "Site Institucional",
      description:
        "Conte a história da sua empresa e fortaleça sua presença online! Desenvolvemos sites institucionais que comunicam seus valores, serviços e diferenciais com profissionalismo e um design alinhado à sua marca.",
    },
    {
      title: "E-commerce",
      description:
        "Transforme sua loja virtual em uma experiência única para seus clientes! Criamos e-commerces modernos, seguros e otimizados para aumentar suas vendas, garantindo facilidade de navegação e integração com os melhores sistemas de pagamento.",
    },
    {
      title: "Portfólio",
      description:
        "Destaque o seu trabalho com um portfólio que impressiona! Criamos sites exclusivos para profissionais e empresas, com layouts elegantes que valorizam seus projetos e ajudam a conquistar novos clientes.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-800 text-white p-4 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-4"
    >
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-base mt-2">{item.description}</p>
    </div>
  ))}
</div>

            {/* Slider */}
            <div className="bg-custom-background flex items-center justify-center rounded-xl relative overflow-hidden">
              <div
                ref={sliderRef}
                style={{
                  display: 'flex',
                  width: 'max-content',
                  gap: '10px',
                }}
              >
                {projetos.concat(projetos).map((projeto, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg"
                    style={{
                      marginRight: '10px',
                      flex: '0 0 calc(25% - 10px)',
                    }}
                  >
                    {/* Contêiner para garantir que a imagem siga o arredondamento */}
                    <div className="w-full h-full rounded-lg overflow-hidden" style={{
                        border: '5px solid',
                        borderImage: 'linear-gradient(to bottom right, #203359, #25a35b) 1',
                      }}>
                      <img
                        src={projeto}
                        alt={`Projeto ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Modelos;