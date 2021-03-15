// Function for logging a user in

import axios from 'axios'

const loginPost = async (username, password, browserHistory) => {

    // Passing hash and username
    const data = {
        'username': username,
        'hash': password
    }

    const json = JSON.stringify(data)

    // Posting to server
    const p = await axios.post('https://courseme97.herokuapp.com/login', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
            if (res.status == 200) {
                
                // Setting local storage to user's info
                window.localStorage.setItem('isAuthenticated', true)
                window.localStorage.setItem('username', res.data.username)
                window.localStorage.setItem('user_id', res.data.id)
                browserHistory.goBack()
            }
        })
        .catch(err => {
            console.log(err)
            window.alert('Incorrect username or password.')
        })
}

export default loginPost
