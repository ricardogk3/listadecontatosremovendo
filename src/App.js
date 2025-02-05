import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sauda from './componentesdeteste/comp1';
import Stateseventos from './componentesdeteste/Stateseventos'
import Listadecontatos from './componentesdeteste/Listadecontatos';

function App() {
  const elemento = <h1> Teste react</h1>
  const elemento2 = React.createElement("h1", null, "Olá, Mundo!");
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* {elemento} */}
        {/* {elemento2} */}
        {/* <Sauda  fulaninho = {"euclides"} n= '10'/> */}
        {/* <Sauda  fulaninho = {"miguel"} n= '12'/> */}
        {/* <Sauda  fulaninho = {"estela"} n= '15'/> */}
        {/* <Sauda  fulaninho = {"vivian"} n= '105'/> */}
        {/* <Stateseventos/> */}
        <Listadecontatos/>




      </header>
    </div>
  );
}

export default App;
