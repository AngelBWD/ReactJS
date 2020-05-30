import React from 'react'

const ProductPrice = ({price}) => (
    <p className="product-price">
     Price:
        <span>
            {price}$
        </span>
    </p>
)

export default ProductPrice
