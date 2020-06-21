import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() { 
    return (
      <div className='App'>
        <Header title='React'/>
        <Content color='red'>Това е this.props.children</Content>
        <Content color='blue'>Аз съм син</Content>
        <Content color='green'>Аз съм зелен</Content>
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() { 
  return <h1>Курс по {this.props.title}</h1>;
  }
}

class Content extends Component {
  render() { 
    return (
      <div style={ {color: this.props.color} }>
        <br />
        <i>{this.props.children}</i>
        <br />
        <small>Публикувано на { new Date().toLocaleTimeString() }</small>
      </div>
    );
  }
}

class Footer extends Component {
  render() { 
  return ( 
      <>
          <br />
          <hr />
          <small>Всички права запазени</small>;
      </>
    )
  }
}

export default App;
