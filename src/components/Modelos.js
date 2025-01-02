import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Loading from './Loading';

const Modelos = () => {
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const sliderRef3 = useRef(null);
    const sliderRef4 = useRef(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula um carregamento de dados
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Ajuste o tempo conforme necessário

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    const modelosCategoria1 = [
        { id: 1, texto: "Projeto 1", link: "/assets/landing-page1/index.html" },
        { id: 2, texto: "Projeto 2", link: "/assets/landing-page2/index.html" }
    ];

    const modelosCategoria2 = [
        { id: 1, texto: "Projeto 1", link: "/assets/institucional1/index.html" },
        { id: 2, texto: "Projeto 2", link: "/assets/institucional2/index.html" }
    ];

    const modelosCategoria3 = [
        { id: 1, texto: "Projeto 1", link: "/assets/portfolio1/index.html" },
        { id: 2, texto: "Projeto 2", link: "/assets/portfolio2/index.html" }
    ];

    const modelosCategoria4 = [
        { id: 1, texto: "Projeto 1", link: "/assets/ecommerce1/index.html" },
        { id: 2, texto: "Projeto 2", link: "/assets/ecommerce2/index.html" }
    ];

    const handleScroll = (e, sliderRef) => {
        if (e.deltaY > 0) {
            sliderRef.current.slickNext();
        } else {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <section className="modelos">
            <section className="h-4/5 flex flex-wrap">
                <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef1)}>
                    <h3 className="text-xl font-bold">Landing-Pages</h3>
                    <Slider ref={sliderRef1} {...settings}>
                        {modelosCategoria1.map(modelo => (
                            <div key={modelo.id}>
                                <iframe 
                                    src={modelo.link} 
                                    width="100%" 
                                    height="500px" 
                                    title={`Projeto ${modelo.id}`} 
                                    frameBorder="0"
                                />
                                <p>{modelo.texto}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef2)}>
                    <h3 className="text-xl font-bold">Institucional</h3>
                    <Slider ref={sliderRef2} {...settings}>
                        {modelosCategoria2.map(modelo => (
                            <div key={modelo.id}>
                                <iframe 
                                    src={modelo.link} 
                                    width="100%" 
                                    height="500px" 
                                    title={`Projeto ${modelo.id}`} 
                                    frameBorder="0"
                                />
                                <p>{modelo.texto}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef3)}>
                    <h3 className="text-xl font-bold">Portfolio</h3>
                    <Slider ref={sliderRef3} {...settings}>
                        {modelosCategoria3.map(modelo => (
                            <div key={modelo.id}>
                                <iframe 
                                    src={modelo.link} 
                                    width="100%" 
                                    height="500px" 
                                    title={`Projeto ${modelo.id}`} 
                                    frameBorder="0"
                                />
                                <p>{modelo.texto}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef4)}>
                    <h3 className="text-xl font-bold">Categoria 4</h3>
                    <Slider ref={sliderRef4} {...settings}>
                        {modelosCategoria4.map(modelo => (
                            <div key={modelo.id}>
                                <iframe 
                                    src={modelo.link} 
                                    width="100%" 
                                    height="500px" 
                                    title={`Projeto ${modelo.id}`} 
                                    frameBorder="0"
                                />
                                <p>{modelo.texto}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </section>
    );
};

export default Modelos;