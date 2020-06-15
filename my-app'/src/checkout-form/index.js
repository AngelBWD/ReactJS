import React, { Component } from 'react'
import UsernameInput from './username-input'
import { Form, Field } from 'react-final-form'

class CheckoutForm extends Component {

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
    

    render() {
        const { 
            username,
            address, 
            city, 
            iban, 
            error, 
            terms
        } = this.state

        return (
            <form onSubmit={this.handleSubmit} >
                <UsernameInput username={username} changeUsername={this.changeUsername}/>
                <div>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' onChange={this.changeAddress} value={address} id='address'></input>
                </div>
                <div>
                    <label htmlFor='city'>City:</label>
                    <select onChange={this.changeCity} value={city}>
                        <option value=''>Choose...</option>
                        <option value='Sofia'>Sofia</option>
                        <option value='Plovdiv'>Plovdiv</option>
                        <option value='Sliven'>Sliven</option>
                        <option value='Smolqn'>Smolqn</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='iban'>IBAN:</label>
                    <input onChange={this.changeIban} type='text' value={iban} id='iban'></input>
                </div>
                <div>
                    <label htmlFor='terms'>Terms & Conditions:</label>
                    <input type='checkbox' onChange={this.changeTerm} selected={terms}/>
                </div>
                <div>
                    <label htmlFor='gender'>Gender: </label>
                    Male:<input onChange={this.changeGender} name='gender' type='radio' value='male'/>
                    Woman:<input onChange={this.changeGender} name='gender' type='radio' value='woman'/>
                    Other:<input onChange={this.changeGender} name='gender' type='radio' value='other'/>
                </div>

                <button type='submit'>Submit</button>
                {error ? 
                    (
                            <div>
                                {error}
                            </div>
                    ) : null
                }
            </form>
        )
    }
}

export default CheckoutForm