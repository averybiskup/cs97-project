// Function for checking if a user alraedy exists in the system
// We use this when the user tries to create an account so we make
// sure not to have duplicate users

import axios from 'axios'

const checkUser = async (username) => {

    const data = {
        'username': username
    }

    const json = JSON.stringify(data)

    // Getting data from server
    const p = await axios.get('/checkuser/' + username) 
        .then((res) => {
            return res
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
    return p
}

export default checkUser
