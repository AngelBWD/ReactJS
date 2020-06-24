import { getRandomNumber } from './utils';


export function registerTickets() {
    const newTicket = {
        number  : getRandomNumber(),
        color   : 'red'
    }

    this.setState( (prevState) => {
        prevState.tickets.push( newTicket );

        return {
            tickets          : prevState.tickets,
            remainingTickets : prevState.remainingTickets--
        }
    });
}