import axios from 'axios'

const checkUser = async (username) => {

    const data = {
        'username': username
    }

    const json = JSON.stringify(data)

    const p = await axios.post('/api/checkuser', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
            return res
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
    return p
}

export default checkUser
