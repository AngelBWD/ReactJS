import React, { Component } from 'react'
import UsernameInput from './username-input'

class CheckoutForm extends Component {
    

    render() {
        const { 
            username,
            address, 
            city, 
            iban, 
            error, 
            terms,
            handleSubmit,
            changeAddress,
            changeUsername,
            changeCity,
            changeGender,
            changeIban,
            changeTerm
        } = this.props

        return (
            <form onSubmit={handleSubmit} >
                <UsernameInput username={username} changeUsername={changeUsername}/>
                <div>
                    <label htmlFor='address'>Address:</label>
                    <input type='text' onChange={changeAddress} value={address} id='address'></input>
                </div>
                <div>
                    <label htmlFor='city'>City:</label>
                    <select onChange={changeCity} value={city}>
                        <option value=''>Choose...</option>
                        <option value='Sofia'>Sofia</option>
                        <option value='Plovdiv'>Plovdiv</option>
                        <option value='Sliven'>Sliven</option>
                        <option value='Smolqn'>Smolqn</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='iban'>IBAN:</label>
                    <input onChange={changeIban} type='text' value={iban} id='iban'></input>
                </div>
                <div>
                    <label htmlFor='terms'>Terms & Conditions:</label>
                    <input type='checkbox' onChange={changeTerm} selected={terms}/>
                </div>
                <div>
                    <label htmlFor='gender'>Gender: </label>
                    Male:<input onChange={changeGender} name='gender' type='radio' value='male'/>
                    Woman:<input onChange={changeGender} name='gender' type='radio' value='woman'/>
                    Other:<input onChange={changeGender} name='gender' type='radio' value='other'/>
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