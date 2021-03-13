// Component for the login page

import '../style/App.css'
import '../style/login.css'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import sha256 from 'js-sha256'
import loginPost from '../helper/loginPost.js'
import signout from '../helper/signout.js'

const handleSubmit = (e, username, password, browserHistory) => {
    e.preventDefault()

    //Check that the username and password are longer than 0. 
    //If valid username and password, attempt to login the user
    if (username.length <= 0) {
        alert('No username')
    } else if (password.length <= 0) {
        alert('No password')
    } else {
        loginPost(username, sha256(password), browserHistory)
    }
}

const Login = () => {
    
    // Storing user input in the state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    let browserHistory = useHistory()

    // Scrolls to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // If the user is logged in, we shouldn't show a login page
    if (window.localStorage.getItem('isAuthenticated')) {
        return (
            <div>
                <div>You are already signed in.</div>
                <Link className='home-button' to='/cs97-project/'>Home</Link>
                <button className='sign-out' onClick={() => signout()}>Sign out</button>
            </div>
        )
    }
            

    return (
        //For the login page,
        <div className='login-page'>
            {/*Display a Home page link*/}
            <Link className='home-button home-button-signup' to='/cs97-project/'>Home</Link>

            <form id='login' onSubmit={(e) => {
                handleSubmit(e, username, password, browserHistory)
                setPassword('')
            }}>
                {/*Have the user input their username and password*/}
                <div className='login-inputs'>
                    <input className='username' type='text' name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input id='password' className='password' type='password' name='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value) }/>

                    {/*Small button that allows user to view their password or hide their password while typing it out*/}
                    <button className='password-button' type='button' onClick={() => {
                    setShowPassword(!showPassword)}}>{showPassword ? 'hide password' : 'show password' }</button>
                </div>

                
                <div className='login-button-wrapper'>
                    {/*Display a Welcome back message, a login button, and a sign up button*/}
                    <div className='hello'>Welcome back, <span className='hello-name'>{username}</span></div>
                    <input className='login-button' type='submit' value='login' />
                    <div className='login-extra-buttons'>
                        <Link className='signup' to='/cs97-project/signup'>or sign up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
