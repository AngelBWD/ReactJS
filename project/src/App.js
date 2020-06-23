import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

     this.state = {
       messages: [
         { author: 'Иво', content: 'Здравей!' },
         { author: 'Ангел', content: 'Здрасти! Какшо става!' },
         { author: 'Гошо', content: 'Пешо там ли е!' },
         { author: 'Димитър', content: 'Не.' },
         { author: 'Васил', content: 'Добре, до после!' }
       ]
     };
  }

  renderMessages() {
    const messageElements = this.state.messages.map( (messageObj, index) => {
     return <p key={ index }><b>{ messageObj.author }:</b>{ messageObj.content }</p>
    });

    return messageElements;
  }
   render() { 
      return (
        <div>
            { this.renderMessages() }
        </div>
      )
    }
}


export default App;
