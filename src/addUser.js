import axios from 'axios'

const addUser = async (username, password) => {

    const data = {
        'username': username,
        'hash': password
    }

    const json = JSON.stringify(data)

    const p = await axios.post('/signup', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
            if (res.status == 200) {
                window.location.replace('/cs97-project/login')
            }
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
}

export default addUser
