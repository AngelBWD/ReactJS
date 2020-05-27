import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './Product-Card';


function Img() {
return (
  <img src={logo} className="App-logo" alt="logo"/>
  )
}
function App() {
  const firstNumber = 1;
  const secondNumber = 3;
  return (
    <div className="App">
      <header className="App-header">
        <Img/>
        <ProductCard/>
      </header>
    </div>
  );
}

export default App;
