// Fetching data from the server

import axios from 'axios'
import getCourses from './getCourses.js'

const fetchCourses = async () => {
    const key = process.env.SERVER_KEY


    // We can use /api/test because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const data = await axios.get('/api/getcourses')
        
        .then(res => {
            if (res.status == 200) {
                return res.data
            } else {
                return getCourses()
            }
        })
    console.log('test')
    return getCourses()

}

export default fetchCourses
