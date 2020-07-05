import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import Main from './Main/Main';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
import CreatePost from '../publications/CreatePost/CreatePosts';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Loader local={true} isLoading={false} />
          <Navigation/>
          <div className='Container'>
            <Aside />
            <Main title='Hello!'>
              <Switch>
                <Route path='/' exact component={Posts}/>
                <Route path='/create-post'  component={CreatePost}/>
                <Route path='/profile'  component={Profile}/>
                <Route path='/login'  component={Login}/>
                <Route path='/register'  component={Register}/>
              </Switch>
            </Main>
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;


