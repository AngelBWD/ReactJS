import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from './Main/Main';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import CreatePost from '../publications/CreatePost/CreatePost';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
import {Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

function render(title, Cmp) {
  return function (props) {
    return <Main title={title} ><Cmp {...props}  /></Main>
  };
}

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Loader local={true} isLoading={false} />
            <Navigation />
            <div className="Container">
              <Aside />
                <Switch>
                  <Route path='/' exact>
                    <Main title="Posts"><Posts/></Main>
                  </Route>
                  <Route path='/create-posts'>
                    <Main title="Create Post"><CreatePost/></Main> 
                  </Route>
                  <Route path='/profil'>
                    <Main title="Profile"><Profile/></Main> 
                  </Route>
                  <Route path='/login'>
                    <Main title="Login"><Login/></Main> 
                  </Route>
                  <Route path='/register' render = {render('Register', Register)} />
                  <Route path='*'>
                    <Main title="Not Found"><NotFound/></Main> 
                  </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
   
  );
}

export default App;
