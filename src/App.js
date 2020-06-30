import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import Header from './compnemts/Header';
import Hero from './compnemts/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
