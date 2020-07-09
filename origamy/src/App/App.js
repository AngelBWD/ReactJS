import React, { Profiler } from 'react';
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
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function render(title, Cmp) {
    return <Main title={title}><Cmp /></Main>
  };


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Loader local={true} isLoading={false} />
          <Navigation/>
          <div className='Container'>
            <Aside />
              <Switch>
                <Route path='/' exact >
                    <Main title='Posts'><Posts /></Main>
                </Route>
                <Route path='/create-post'>
                    <Main title='Create Post'><CreatePost /></Main>
                </Route>
                <Route path='/profile'>
                   <Main title='Profile'><Profile /></Main>
                </Route>
                <Route path='/login'>
                    <Main title='Login'><Login /></Main>
                </Route>
                <Route path='/register'>
                    <Main title='Register'><Register /></Main>
                </Route>
                <Route path='*'>
                    <Main title='Not Found'><NotFound /></Main>
                </Route>
              </Switch>
            
          </div>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;


