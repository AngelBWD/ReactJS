import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
      <Aside />
      </div>
    </div>
  );
}

export default App;
