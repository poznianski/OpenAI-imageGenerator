import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FormForImage } from './components/FormForImage/FormForImage';

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <main className="main">
        <FormForImage />
      </main>

      <Footer />
    </div>
  );
};

export default App;
