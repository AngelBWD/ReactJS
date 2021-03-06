import { getRandomNumber, getRandomColor } from './utils';


export function registerTickets() {
    const newTicket = {
        number  : getRandomNumber(),
        color   : getRandomColor()
    }
    

    this.setState( (prevState) => {
        prevState.tickets.push( newTicket );
        
           
        return {
            tickets          : prevState.tickets,
            remainingTickets : prevState.remainingTickets - 1
        }
        

    });
}