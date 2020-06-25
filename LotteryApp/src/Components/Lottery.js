import React, { Component } from 'react';


class Lottery extends Component {

   renderButton() {
       const { remainingTickets, actions } = this.props;

       if( remainingTickets > 0 ){
           return <button onClick={ actions.registerTickets }>КУПИ БИЛЕТ</button>
       }
   }
   render() { 
      return (
          <>
            <h2>ЛОТАРИЯ</h2>
            {this.renderButton()}
            <br/>
            <small>оставащи: {this.props.remainingTickets}</small>
          </>
      );
    }
}


export default Lottery;
