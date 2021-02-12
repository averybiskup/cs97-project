// Fetching data from the server

import axios from 'axios'
import getCourses from './getCourses.js'

const fetchCourses = async () => {

    // We can use /api/test because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const data = await axios.get('/api/getcourses')
        .then(res => {
            console.log('Got data')
            window.localStorage.clear()
            window.localStorage.setItem('courses', JSON.stringify(res.data))
            return res.data
        })
        .catch(err => {
            console.log('Server error')
            window.localStorage.clear()
            window.localStorage.setItem('courses', JSON.stringify(getCourses()))
            return getCourses()
            
        })
    return data

}

export default fetchCourses
