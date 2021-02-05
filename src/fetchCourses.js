// Fetching data from the server

import axios from 'axios'

const fetchCourses = async () => {
    const key = process.env.SERVER_KEY


    // We can use /api/test because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const data = await axios.get('/api/test')
        
        .then(res => {
            if (res.status == 200) {
                return res.data
            } else {
                return []
            }
        })

    return data

}

export default fetchCourses
