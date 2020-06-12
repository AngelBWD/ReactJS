import React, { Component } from 'react'
import Header from '../header'
import CheckoutForm from '../checkout-form'


class CheckoutPage extends Component {

    constructor(props) {
        super(props)

        this.state={
            username: '',
            address: '',
            city: '',
            iban: '',
            gender: '',
            terms: false,
            error: null
        }
    }


    changeUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    changeAddress = e => {
        this.setState({
            address: e.target.value
        })
    }

    changeIban = e => {
        this.setState({
            iban: e.target.value
        })
    }

    changeCity = e => {
        this.setState({
            city: e.target.value
        })
    }

    changeTerm = e => {
        this.setState({
            terms: e.target.checked
        })
    }

    changeGender = e => {
        this.setState({
            gender: e.target.value
        })
    }

    handleSubmit = e => {
       e.preventDefault()
       const { 
        username,
        address, 
        city, 
        iban, 
        gender, 
        terms 
    } = this.state

        if(username ==='') {
            this.setState({
                error: 'Username is mandatory, bro!'
            })
        } else {
            this.setState({
                error: null
            })     
            console.log(this.state);
            
        }
    }

    // componentDidMount() {
    //     setTimeout(()=> {
    //         this.props.history.push({
    //             pathname: '/',
    //             state: {
    //                 loggedIn: true,
    //                 username: 'Angel'
    //             }
    //         })

    //     },3000);
    // }
    render(){
        const { 
            username,
            address, 
            city, 
            iban, 
            error, 
            terms 
        } = this.state

        return (
            <div>
                <Header />
                <CheckoutForm 
                username={username} 
                address={address} 
                city={city}
                iban={iban}
                error={error}
                terms={terms}
                handleSubmit={this.handleSubmit}
                changeAddress={this.changeAddress}
                changeUsername={this.changeUsername}
                changeCity={this.changeCity}
                changeGender={this.changeGender}
                changeIban={this.changeIban}
                changeTerm={this.changeTerm}
                />
            </div>
        )

    }
}

export default CheckoutPage 