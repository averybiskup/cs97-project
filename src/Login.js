import './App.css'
import { useState, useEffect } from 'react'
import sha256 from 'js-sha256'
import loginPost from './loginPost.js'
import checkUser from './checkUser.js'

const handleSubmbit = (e, username, password) => {
    e.preventDefault()

    if (username.length <= 0) {
        alert('No username')
    } else if (password.length <= 0) {
        alert('No password')
    } else {

        console.log(checkUser(username))

        //loginPost(username, sha256(password))
    }
}

const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="App">
            <form id='login' onSubmit={(e) => {

            }}>
                <input type='text' name='author' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type='text' name='author' placeholder='password' value={'*'.repeat(password.length)} onChange={(e) => setPassword(e.target.value) }/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default Login;
