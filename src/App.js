import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Modelos from './components/Modelos';
import CaseDeSucesso from './components/CaseDeSucesso';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-custom-background w-full mx-auto min-w-[430px]">
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="modelos">
          <Modelos />
        </section>
        <section id="cases-de-sucesso">
          <CaseDeSucesso />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
