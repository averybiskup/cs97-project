
import axios from 'axios'
import updateCourse from './updateCourse.js'

const fetchReviews = async (course_id) => {

    // We can use /api/test because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const data = await axios.get('/api/fetchreviews/' + course_id)
        .then(res => {
            const courses = JSON.parse(window.localStorage.getItem('courses'))
            courses[course_id] = res.data
            console.log('Updating reviews')
            
            let new_rating = 0

            Object.keys(res.data).map((key) => {
               new_rating += Number(res.data[key].rating)
            })


            updateCourse(course_id, new_rating/5)

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
