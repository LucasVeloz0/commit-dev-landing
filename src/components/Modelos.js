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
        swipeToSlide: true
    };

    const modelosCategoria1 = [
        { id: 1, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, texto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    const modelosCategoria2 = [
        { id: 1, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, texto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    const modelosCategoria3 = [
        { id: 1, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, texto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    const modelosCategoria4 = [
        { id: 1, texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, texto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
    ];

    const handleScroll = (e, sliderRef) => {
        if (e.deltaY > 0) {
            sliderRef.current.slickNext();
        } else {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <section className="h-3/4 flex flex-wrap">
            <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef1)}>
                <h3 className="text-xl font-bold">Categoria 1</h3>
                <Slider ref={sliderRef1} {...settings}>
                    {modelosCategoria1.map(modelo => (
                        <div key={modelo.id}>
                            <p>{modelo.texto}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef2)}>
                <h3 className="text-xl font-bold">Categoria 2</h3>
                <Slider ref={sliderRef2} {...settings}>
                    {modelosCategoria2.map(modelo => (
                        <div key={modelo.id}>
                            <p>{modelo.texto}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className=" md:w-1/4 p-4 flex-shrink-0" onWheel={(e) => handleScroll(e, sliderRef3)}>
                <h3 className="text-xl font-bold">Categoria 3</h3>
                <Slider ref={sliderRef3} {...settings}>
                    {modelosCategoria3.map(modelo => (
                        <div key={modelo.id}>
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
                            <p>{modelo.texto}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Modelos;