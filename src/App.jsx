import React from 'react';
import Header from './components/Header';
import './App.css';
import PaymentForm from './components/Form';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <PaymentForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
