import React from 'react';

const Catalog = () => {
  return (
    <section id="catalog" className="catalog py-12 px-6 bg-white relative z-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Modelos de Sites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Modelo 1 */}
        <div className="site-card border rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/landing-page.webp"
            alt="Modelo de Site 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Modelo de Site 1</h3>
            <p className="text-gray-700">
              Um site moderno e minimalista, ideal para pequenas empresas.
            </p>
          </div>
        </div>

        {/* Modelo 2 */}
        <div className="site-card border rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/portifolio-freelancer.webp"
            alt="Modelo de Site 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Modelo de Site 2</h3>
            <p className="text-gray-700">
              Perfeito para portfólios de criativos e freelancers.
            </p>
          </div>
        </div>

        {/* Modelo 3 */}
        <div className="site-card border rounded-lg overflow-hidden shadow-lg">
          <img
            src="/images/ecommerce-seo.webp"
            alt="Modelo de Site 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Modelo de Site 3</h3>
            <p className="text-gray-700">
              Design focado em e-commerce com otimização para SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;