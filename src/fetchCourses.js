import axios from 'axios'

const fetchCourses = async () => {
    const key = process.env.SERVER_KEY
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
