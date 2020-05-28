import React from 'react';
import './product-list.css';

const ProductList = ({product}) => {
  return (
    <div className="container">
      <div className="product-title">
        <img className="product-image" src={product.image} alt={product.title} />
        <div>
          <span className="product-brand">{product.brand}</span>
          <span className="product-title">{product.title}</span>
          <p className="product-price">
            Price:
            <span>
              {product.price}$
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductList