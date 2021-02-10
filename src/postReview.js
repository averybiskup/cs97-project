// Function for posting a review in the db

import axios from 'axios'

const postReview = async (course_id, body, author, title, rating) => {

    const review = {
        'course_id': course_id,
        'body': body,
        'author': author,
        'title': title,
        'rating': rating
    }
    const json = JSON.stringify(review)

    const p = await axios.post('/api/postreview', json, { headers: { 'Content-Type': 'application/json' }}) 
        .catch(err => {
            window.alert('Post failed. Server is probably down.')
        })
}

export default postReview
