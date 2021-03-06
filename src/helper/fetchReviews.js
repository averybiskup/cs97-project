// Function for fetching a singular course
// used when a new review is added in order to update the render
// with the newly added review.
// This also takes less power than grabbing all the courses,
// so using this when you can is more efficient
//
// This also updates the localStorage

import axios from 'axios'
import updateCourse from './updateCourse.js'

const fetchReviews = async (course_id) => {

    // We can use /api/fetchreviews because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const data = await axios.get('https://courseme97.herokuapp.com/api/fetchreviews/' + course_id)
        .then(res => {
            const courses = JSON.parse(window.localStorage.getItem('courses'))
            courses[course_id] = res.data
            const reviews = res.data.reviews
            console.log('Updating reviews')
            window.localStorage.removeItem('courses')
            window.localStorage.setItem('courses', JSON.stringify(courses))
            
            let new_rating = 0
            let count = 0
            Object.keys(reviews).map((key) => {
               new_rating += Number(reviews[key].rating)
               count++
            })
            
            // divide by number of reviews represented by count
            new_rating = new_rating/count
            new_rating = new_rating.toFixed(2)
            updateCourse(course_id, new_rating) 

            return res.data
        })
        .catch(err => {
            console.log(err)
            window.alert('Error fetching reviews') 
        })
    return data

}

export default fetchReviews
