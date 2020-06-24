import React, { Component } from 'react';


class Lottery extends Component {

   renderButton() {
       if( this.props.remainingTickets > 0 ){
           return <button>КУПИ БИЛЕТ</button>
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
