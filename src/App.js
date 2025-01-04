import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CaseDeSucesso from './components/CaseDeSucesso';
import Modelos from './components/Modelos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-custom-background w-full mx-auto min-w-[430px]">
      <Header />
      <main>
        <Home />
        <Modelos />
        <CaseDeSucesso />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
