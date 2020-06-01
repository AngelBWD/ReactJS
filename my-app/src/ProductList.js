import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './product-list.css';
import ProductPrice from './product-price/ProductPrice'
import Product from './product/Product'

class ProductList extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      counter: props.counter,
      title: 'Hello Ecom'
    }
  }
  
  handleClick = (event) => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
 
  render() {

    const {product} = this.props
    const {counter, title} = this.state
    return (
      <div className="container">
         {title}
        <Product product={product} Price={ProductPrice} />
        <button onClick={this.handleClick}>Click me: {counter}</button>
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