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

    console.log('Posting review')
    const p = await axios.post('/api/postreview', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
}

export default postReview
