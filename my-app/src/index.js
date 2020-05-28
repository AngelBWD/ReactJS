import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductList from './ProductList';
import data from './data'


ReactDOM.render(<ProductList product={data[1]} />,document.getElementById('root'));


