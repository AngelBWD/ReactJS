import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Aside from '../Aside/Aside'
import Posts from '../Posts/Posts'
import Main from './Main/Main'

function App() {
  return (
    
    <div className="App">
      <Navigation/>
      <div className='Container'>
        <Aside />
        <Main title='Hello!'>
          <Posts />
        </Main>
      </div>
    </div>
  );
}

export default App;


