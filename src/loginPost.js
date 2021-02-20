import axios from 'axios'

const loginPost = async (username, password) => {

    const json = JSON.stringify()

    const p = await axios.post('/api/login', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
}

export default loginPost
