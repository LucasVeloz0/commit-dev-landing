import React from 'react';
import Header from './components/Header';
import Home from './components/Home'
import Contato from './components/Contato'
import Footer from './components/Footer';
import Modelos from './components/Modelos';
import CaseDeSucesso from './components/CaseDeSucesso';

function App() {
  return (
    <div className="App, bg-custom-background">
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
