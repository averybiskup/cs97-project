// Function for adding a new user

import axios from 'axios'

const addUser = async (username, password) => {

    // Data to post to server
    const data = {
        'username': username,
        'hash': password
    }

    // Putting data into a string to post
    const json = JSON.stringify(data)

    // Posting to the server
    const p = await axios.post('https://courseme97.herokuapp.com/signup', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then(res => {
            console.log(res.status)
            window.location.replace('/cs97-project/login')
        })

        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
}

export default addUser
