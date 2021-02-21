import './App.css'
import './login.css'
import { useState, useEffect } from 'react'
import sha256 from 'js-sha256'
import checkUser from './checkUser.js'
import addUser from './addUser.js'
import { Link } from 'react-router-dom'

const handleSubmit = (e, username, password) => {
    e.preventDefault()

    if (username.length <= 0) {
        alert('No username')
    } else if (password.length <= 0) {
        alert('No password')
    } else {

        const check = async (username) => {
            const data = await checkUser(username);

            if (!data.data) {
                addUser(username, sha256(password))
            } else {
                alert('User already exists')
            }
        }
        check(username)
    }
}

const Signup = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    let test = (password.length).toString() + (password.length).toString()
    let color = '#11' + test + '11'

    if (password.length > 0 && password.length < 10) {
        document.getElementById('lower-bg').style.backgroundColor = color
        document.getElementById('password').style.borderColor = color
    }

    return (
        <div className="signup-page">
            <form id='signup' onSubmit={(e) => {
                handleSubmit(e, username, password)
                setPassword('')
            }}>
            <div className='login-inputs'>
                <input id='username' className='username' type='text' name='username' placeholder='new username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input id='password' className='password' ype='text' name='password' placeholder='new password' value={'*'.repeat(password.length)} onChange={(e) => setPassword(e.target.value) }/>
            </div>
            <div id='lower-bg' className='login-button-wrapper'>
                <div className='hello'>Welcome, <span className='hello-name'>{username}</span></div>
                <input className='login-button' type='submit' value='sign up' />
                <div className='login-extra-buttons'>
                    <Link className="login" to='/cs97-project/login'>or login</Link>
                    <Link className="home-button" to='/cs97-project/'>Home</Link>
                </div>
            </div>
            </form>
        </div>
    );
}

export default Signup



