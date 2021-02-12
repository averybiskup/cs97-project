
import axios from 'axios'

const fetchReviews = async (id) => {

    // We can use /api/test because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const data = await axios.get('/api/fetchreviews/' + id)
        .then(res => {
            const courses = JSON.parse(window.localStorage.getItem('courses'))
            courses[id].reviews = res.data
            console.log('Updating reviews')
            window.localStorage.clear()
            window.localStorage.setItem('courses', JSON.stringify(courses))

            return res.data
        })
        .catch(err => {
            console.log(err)
            window.alert('Error fetching reviews') 
        })
    return data

}

export default fetchReviews
