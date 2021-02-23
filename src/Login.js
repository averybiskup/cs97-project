import './App.css'
import './login.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sha256 from 'js-sha256'
import loginPost from './loginPost.js'

const handleSubmit = (e, username, password) => {
    e.preventDefault()

    if (username.length <= 0) {
        alert('No username')
    } else if (password.length <= 0) {
        alert('No password')
    } else {
        loginPost(username, sha256(password))
    }
}

const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    // Scrolls to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="login-page">
            <form id='login' onSubmit={(e) => {
                handleSubmit(e, username, password)
                setPassword('')
            }}>
                <div className='login-inputs'>
                    <input className='username' type='text' name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input id='password' className='password' type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value) }/>
                    <button className='password-button' type='button' onClick={() => {
                    setShowPassword(!showPassword)}}>{showPassword ? 'hide password' : 'show password' }</button>
                </div>
                <div className='login-button-wrapper'>
                    <div className='hello'>Welcome back, <span className='hello-name'>{username}</span></div>
                    <input className='login-button' type='submit' value='login' />
                    <div className='login-extra-buttons'>
                        <Link className="signup" to='/cs97-project/signup'>or sign up</Link>
                        <Link className="home-button" to='/cs97-project/'>Home</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
