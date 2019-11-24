import React, {Component} from 'react';
import Header from '../header';
import CheckoutForm from '../checkout-form'

class CheckoutPage extends Component  {
    // componentDidMount() {                    //Връзка с другите страници!
    //     setInterval(() => {
    //         this.props.history.push({
    //             pathname: '/',
    //             state: {
    //                 loggedIn: true,
    //                 username: 'Val'
    //             }
    //         })  
    //     }, 3000);
    // }
    render() {
        return(
            <div>
                <Header/>
                <CheckoutForm />
            </div> 
        )
    }
    
}

export default CheckoutPage