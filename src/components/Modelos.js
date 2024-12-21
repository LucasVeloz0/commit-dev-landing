import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Modelos = () => {
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const sliderRef3 = useRef(null);
    const sliderRef4 = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false // Desabilitar os botões de navegação padrão
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

    const renderSlider = (sliderRef, modelos) => (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {modelos.map(modelo => (
                    <div key={modelo.id}>
                        <iframe 
                            src={modelo.link} 
                            width="100%" 
                            height="500px" 
                            title={`Projeto ${modelo.id}`} 
                            frameBorder="0"
                        />
                        <p className="text-center">{modelo.texto}</p>
                    </div>
                ))}
            </Slider>
            <button 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                onClick={() => sliderRef.current.slickPrev()}
            >
                Prev
            </button>
            <button 
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
                onClick={() => sliderRef.current.slickNext()}
            >
                Next
            </button>
        </div>
    );

    return (
        <section className="h-4/5 flex flex-wrap">
            <div className="w-full md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef1)}>
                <h3 className="text-xl font-bold text-center">Landing-Pages</h3>
                {renderSlider(sliderRef1, modelosCategoria1)}
            </div>
            <div className="w-full md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef2)}>
                <h3 className="text-xl font-bold text-center">Institucional</h3>
                {renderSlider(sliderRef2, modelosCategoria2)}
            </div>
            <div className="w-full md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef3)}>
                <h3 className="text-xl font-bold text-center">Portfolio</h3>
                {renderSlider(sliderRef3, modelosCategoria3)}
            </div>
            <div className="w-full md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef4)}>
                <h3 className="text-xl font-bold text-center">E-commerce</h3>
                {renderSlider(sliderRef4, modelosCategoria4)}
            </div>
        </section>
    );
};

export default Modelos;
