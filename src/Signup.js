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

const analyzePassword = (password) => {

    if (password.length < 6) {
        return 0
    }

    let count = 8

    const alph = /[a-z]/
    const num = /[0-9]/
    if (alph.test(password)) {
        count -= 4
    }

    if (num.test(password)) {
        count -= 4
    }

    if (password.length > 8) {
        count += (password.length - count)
    }

    return count
}

const Signup = () => {
    

    // Scrolls to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    let test = (analyzePassword(password)).toString() + (analyzePassword(password)).toString()
    let color = '#11' + test + '11'

    if (password.length > 0 && password.length < 10) {
        document.getElementById('lower-bg').style.backgroundColor = color
        document.getElementById('password').style.borderColor = color
    }

    console.log(showPassword)

    return (
        <div className="signup-page">
            <form id='signup' onSubmit={(e) => {
                handleSubmit(e, username, password)
                setPassword('')
            }}>
            <div className='login-inputs'>
                <input id='username' className='username' type='text' name='username' placeholder='new username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input id='password' className='password' type={showPassword ? 'text' : 'password'} name='password' placeholder='new password' value={password} onChange={(e) => setPassword(e.target.value) } />
                <button className='password-button' type='button' onClick={() => {
                    setShowPassword(!showPassword)}}>{showPassword ? 'hide password' : 'show password' }</button>
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



