import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor ( props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {
   this.timer = setInterval( this.incrementCounter, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('I just updated');
    
    if(prevState.counter === 50){
      this.setState({ counter: 0});
    }
  }

  componentWillMount() {
    clearInterval( this.timer );
  }

  incrementCounter = () =>  {
    this.setState( () => {
      return { counter: this.state.counter++}
    });
  }

  render() { 
    return (
      <div className='App'>
       <h1>{ this.state.counter }</h1>
      </div>
    );
  }
}


export default App;
