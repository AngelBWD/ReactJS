import React from 'react';
import ProductPage from './product-page/index'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import ProductList from './product-list/index'


  const Navigation = () => {
      return (
          <Router>
              <Switch>
                <Route path ="/" exact component = {ProductList} />
                <Route path ="/product" component = {ProductPage} /> 
              </Switch>
            
          </Router>
      )
  }

  export default Navigation