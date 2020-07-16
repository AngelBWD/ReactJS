import React from 'react';
import '../shared/styles/LoginAndRegister.css';
import withForm from '../shared/hocs/withForm';

class Register extends React.Component {

    usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
    passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
    rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');

    submitHandler = () => {
        const { username, password, rePassword } = this.props.getFormState();
        console.log(username, password, rePassword);
    }
    render() {
        const { username, password, rePassword } = this.props.getFormState();
        return (
            <form className='Register'>
            <div className='form-control'>
                <label>Username</label>
                <input type="text" onChange={this.usernameOnChangeHandler} value={username}/>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type="password" onChange={this.passwordOnChangeHandler} value={password}/>
            </div>
            <div className='form-control'>
                <label>Re-Password</label>
                <input type="password" onChange={this.rePasswordOnChangeHandler} value={rePassword}/>
            </div>
            <div className='form-control'>
                <button type='button' onClick={this.submitHandler}>Register</button>
            </div>
        </form>
        )
    }
}

const initialFormState = {
    username: '',
    password: '',
    rePassword: ''    
}

export default withForm(Register, initialFormState)
