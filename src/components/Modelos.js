import React, { useEffect, useRef } from 'react';
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
      const translateX = (progress / 10) % (slider.scrollWidth / 2); // Ajuste a velocidade da animação aqui
      slider.style.transform = `translateX(-${translateX}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const projetos = [projeto1, projeto2, projeto3, projeto4, projeto5, projeto6, projeto7, projeto8];

  return (
    <section className="case-de-sucesso my-8 w-full"> {/* Seção principal com margens verticais e largura total */}
      <section className="w-full mx-auto my-8"> {/* Seção interna com largura total, margem horizontal automática e margem vertical */}
        <div className="flex flex-wrap justify-between modelos"> {/* Contêiner flexível que envolve os elementos filhos */}
          <div className="w-full md:auto"> {/* Contêiner com largura total em telas pequenas e ajuste automático em telas médias */}
            <h2 className="text-3xl font-roboto text-white text-center pb-3">Modelos de Sites.</h2> {/* Título centralizado com espaçamento inferior */}
              <div className="bg-custom-background h-96 flex items-center justify-center rounded-lg relative overflow-hidden"> {/* Contêiner do slider com fundo personalizado, altura fixa, flexbox, bordas arredondadas e overflow oculto */}
                <div
                  ref={sliderRef}
                  style={{
                    display: 'flex', // Define o contêiner como flexível
                    width: 'calc(100% * 16)', // Define a largura do contêiner como 16 vezes a largura total para permitir o loop contínuo
                    gap: '10px', // Adiciona uma margem de 10px entre as imagens
                  }}
                >
                  {projetos.concat(projetos).map((projeto, index) => ( // Duplicamos a lista de projetos para criar um loop contínuo
                    <div
                      key={index}
                      style={{
                        position: 'relative',
                        borderRadius: '15px', // Bordas arredondadas
                        overflow: 'hidden', // Garante que o conteúdo dentro do contêiner não ultrapasse as bordas arredondadas
                        marginRight: '10px', // Adiciona uma margem de 10px à direita das imagens
                        flex: '0 0 calc(25% - 10px)', // Ajusta o tamanho das imagens para caberem no contêiner e subtrai a margem
                        ...(window.innerWidth < 768 && { // Ajustes para telas menores que 768px
                          flex: '0 0 calc(50% - 10px)', // Ajusta o tamanho das imagens para caberem no contêiner e subtrai a margem
                        }),
                        ...(window.innerWidth < 480 && { // Ajustes para telas menores que 480px
                          flex: '0 0 calc(70% - 10px)', // Ajusta o tamanho das imagens para caberem no contêiner e subtrai a margem
                        }),
                      }}
                    >
                      <img
                        src={projeto}
                        alt={`Projeto ${index + 1}`}
                        style={{
                          width: '100%', // Ajusta o tamanho das imagens para caberem no contêiner
                          height: '100%', // Define a altura das imagens como 100% do contêiner
                          objectFit: 'cover', // Garante que as imagens cubram todo o contêiner sem distorção
                          borderRadius: '15px', // Bordas arredondadas
                          position: 'relative', // Define a posição relativa para a imagem
                          zIndex: 0, // Define o z-index da imagem
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: '15px', // Bordas arredondadas
                          border: '5px solid',
                          borderImage: 'linear-gradient(to bottom right, #203359, #d9083c, #25a35b) 1', // Gradiente de três cores
                          zIndex: 10, // Define o z-index da borda para ficar na frente da imagem
                        }}
                      />
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