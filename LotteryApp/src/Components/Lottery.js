import React, { Component } from 'react';

import LotteryTicket from './LotteryTicket';


class Lottery extends Component {

   renderButton() {
       const { remainingTickets, actions } = this.props;

       if( remainingTickets > 0 ){
           return <button onClick={ actions.registerTickets }>КУПИ БИЛЕТ</button>
       }
   }

   renderTickets() {
       const lotteryTickets = this.props.tickets.map( (ticket, index) => {
        return (
            <LotteryTicket 
                color = { ticket.color }
                number = { ticket.number }
                index = { index }
                key = { index }
            />
        );
       });

       return lotteryTickets;
   }

   render() { 
      return (  
          <>
            <h2>ЛОТАРИЯ</h2>
            {this.renderButton()}
            <br/>
            <small>оставащи: {this.props.remainingTickets}</small>
            <br/>
            <hr />
            {this.renderTickets()}
          </>
      );
    }
}


export default Lottery;
