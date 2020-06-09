import React, { Component } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CheckoutLinks = styled(Link)`
color: white;
float: right; 
line-height: 60px;
`

const HomeLink = styled(Link)`
color: white;
line-height: 60px;
`

class Header extends Component {
  state = {
    searchValue: ""
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  render() {
    const { searchValue } = this.state
    return (
      <div className="header-container">
        <HomeLink to="/">SoftUni React.js course</HomeLink>
        <CheckoutLinks to="/checkout">Checkout</CheckoutLinks>
        <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
      </div>
    )
  }

}

export default Header 