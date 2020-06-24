import React, { Component } from 'react';
import Lottery from './Components/Lottery';
import { getRandomNumber } from './Helper/utils';
import { registerTickets } from './Helper/actions';
import './App.css';


class App extends Component {
  constructor( props ){
    super ( props )
    this.state = {
      winningnumber   : getRandomNumber(),
      tickets         : [],
      remainingTickets : 5,
      finished        : false
    };

    this.registerTickets = registerTickets.bind( this );
  }

  renderApp() {
    return (
      <Lottery
      remainingTickets = { this.state.remainingTickets }
      />
    );
  }

   render() { 
     console.log(this.state.tickets);
     
      return (
        <div className='App'>
            {this.renderApp()}
        </div>
      )
    }
}


export default App;
