import axios from 'axios'

const postReview = async () => {
    const key = process.env.SERVER_KEY

    const review = {
        'course_id': 1612943659636,
        'body': 'random text',
        'author': 'random name',
        'title': 'random text',
        'rating': 85,
    }
    const json = JSON.stringify(review)
    console.log(json)
    const p = await axios.post('/api/postreview', json, { headers: { 'Content-Type': 'application/json' }}) 
    console.log(p)

}

export default postReview
