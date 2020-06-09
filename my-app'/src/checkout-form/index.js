import React, { Component } from 'react'

class CheckoutForm extends Component {
    constructor(props) {
        super(props)

        this.state={
            username: '',
            address: '',
            city: '',
            iban: '',
            gender: '',
            terms: false
        }
    }
    render() {
        return (
            <form>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username'></input>
                </div>
                <div>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' id='address'></input>
                </div>
                <div>
                    <label htmlFor='city'>City:</label>
                    <select>
                        <option value='Sofia'>Sofia</option>
                        <option value='Plovdiv'>Plovdiv</option>
                        <option value='Sliven'>Sliven</option>
                        <option value='Smolqn'>Smolqn</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='iban'>IBAN:</label>
                    <input type='text' id='iban'></input>
                </div>
                <div>
                    <label htmlFor='terms'>Terms & Conditions:</label>
                    <input type='checkbox' />
                </div>
                <div>
                    <label htmlFor='gender'>Gender: </label>
                    Male:<input name='gender' type='radio' value='male'/>
                    Woman:<input name='gender' type='radio' value='woman'/>
                    Other:<input name='gender' type='radio' value='other'/>
                </div>

                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default CheckoutForm