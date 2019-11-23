import React from 'react';
import ProductPage from './product-page/index'
import ErrorPage from './error-page';
import CheckoutPage from './checkout-page/index'
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
                <Route path ="/product/:id" component = {ProductPage} /> 
                <Route path ="/checkout" component = {CheckoutPage} /> 
                <Route  component = {ErrorPage} /> 
              </Switch>
            
          </Router>
      )
  }

  export default Navigation