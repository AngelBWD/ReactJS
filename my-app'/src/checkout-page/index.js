import React, { Component } from 'react'
import Header from '../header'
import CheckoutForm from '../checkout-form'
import LibraryForm from '../checkout-form/library-form'


const CheckoutPage = () => {

        return (
            <div>
                <Header />
                <CheckoutForm />
                <LibraryForm />
            </div>
        )
}


export default CheckoutPage 