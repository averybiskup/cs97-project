import './App.css'
import { useState, useEffect } from 'react'
import sha256 from 'js-sha256'
import checkUser from './checkUser.js'
import addUser from './addUser.js'

const handleSubmit = (e, username, password) => {
    e.preventDefault()

    if (username.length <= 0) {
        alert('No username')
    } else if (password.length <= 0) {
        alert('No password')
    } else {

        const grabCourses = async (username) => {
            const data = await checkUser(username);

            if (!data.data) {
                addUser(username, sha256(password))
            } else {
                alert('User already exists')
            }
        }
        grabCourses(username)

        //loginPost(username, sha256(password))
    }
}

const Signup = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="App">
            <form id='signup' onSubmit={(e) => {
                handleSubmit(e, username, password)
                setPassword('')
            }}>
                Signup: 
                <input type='text' name='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type='text' name='password' placeholder='password' value={'*'.repeat(password.length)} onChange={(e) => setPassword(e.target.value) }/>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default Signup



