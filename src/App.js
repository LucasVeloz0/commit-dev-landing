import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CaseDeSucesso from './components/CaseDeSucesso';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-custom-background w-full mx-auto min-w-[430px]">
      <Header />
      <main>
        <Home />
        <CaseDeSucesso />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
