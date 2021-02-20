import './App.css'
import { useState, useEffect } from 'react'

const Login = () => {
    
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
        
    return (
        <div className="App">
          <header className="App-header">
            <div>Login Page</div>
          </header>
        </div>
    );
}

export default Login;
