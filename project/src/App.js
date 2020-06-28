import React, { Component } from 'react';
import Lottery from './Components/Lottery';
import { getRandomNumber } from './Helper/utils';
import { registerTickets } from './Helper/actions';
import './App.css';


class App extends Component {
  constructor( props ){
    super ( props );

    this.state = {
      winningNumber    : getRandomNumber(),
      tickets          : [],
      remainingTickets  : 5,
      finished         : false
    };

    this.registerTickets = registerTickets.bind( this );
  }

  renderApp() {
    const { tickets, remainingTickets } = this.state;
    const actions                      = {};

    actions.registerTickets = this.registerTickets;

    return (
      <Lottery
         actions          = { actions }
         tickets          = { tickets }
         remainingTickets  = { remainingTickets }
      />
    );
  }

  render() { 
     console.log(this.state.tickets);
     
     return ( 
       <div className='App'>
            {this.renderApp()}
        </div>
      ); 
    }    
}


export default App;
