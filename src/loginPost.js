import axios from 'axios'

const loginPost = async (username, password) => {

    const data = {
        'username': username,
        'hash': password
    }

    const json = JSON.stringify(data)

    const p = await axios.post('/login', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
            if (res.status == 200) {
                window.localStorage.setItem('isAuthenticated', true)
                window.localStorage.setItem('username', username)
                window.location.replace('/cs97-project')
            }
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Incorrect username or password.')
        })
}

export default loginPost
