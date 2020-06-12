import React from 'react'

const UsernameInput = ({username, changeUsername}) => {
    return (
        <div>
            <label htmlFor='username'>Username:</label>
            <input type='text' name='username' onChange={changeUsername} value={username} id='username'></input>
        </div>
    )
}

export default UsernameInput