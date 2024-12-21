import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Modelos from './components/Modelos';
import CaseDeSucesso from './components/CaseDeSucesso';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-custom-background max-w-screen-xl mx-auto min-w-[430px]">
      <Header />
      <Home />
      <Modelos />
      <CaseDeSucesso />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
