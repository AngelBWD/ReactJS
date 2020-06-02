import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './product-list.css';
import ProductPrice from './product-price/ProductPrice'
import Product from './product/Product'

class ProductList extends Component  {
 state = {
      title: 'Hello Ecom',
      value: ''
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }
    render() {

    const {product} = this.props
    const { title, value} = this.state
    
    return (
      <div className="container">
         {title}
        <Product 
          product={product} 
          Price={ProductPrice} 
        />
        <Product 
          product={product} 
          Price={ProductPrice} 
        />
        <input onChange={this.handleChange} />
      </div>
    )
  }
}

ProductList.defaultProps = {
  counter: 0,
  product: {
    image: '',
    title: 'Dummy Title',
    price: 5,
    brands: ''
  }
}

ProductList.propTypes = {
  counter: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    brands: PropTypes.string,
    image: PropTypes.number
  })
}



export default ProductList