import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Product from './product/Product'
import ProductPrice from './product-price/ProductPrice'

import './product-list.css'

class ProductList extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: props.counter || 0, 
      title: "Hello Ecom"
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }))
    }, 1000);
  }

  render(){
    const { product } = this.props;
    const { counter, title } = this.state;

    return (
      <div className="container">
        {title}
        <Product product = {product} Price = {ProductPrice}/>
        {counter}
      </div>
    )
  }
 
}

ProductList.defaultProps = {
  counter: 0,
  product: {
    image: '',
    title: "Dummy Title",
    price: 5
  }
}

ProductList.PropTypes = {
  counter: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number
  })
}

export default ProductList
