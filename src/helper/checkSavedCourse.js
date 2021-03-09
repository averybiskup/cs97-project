import axios from 'axios'

const checkSavedCourse = async (user_name, course_id) => {

    // Creating the review based on function arguments
    const save = {
        'course_id': course_id,
        'user_name': user_name,
    }

    // Turning review into a string to post iit
    const json = JSON.stringify(save)

    console.log('Posting review')
    const p = await axios.post('/checksavedcourse', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            return res.data
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })

    return p
}

export default checkSavedCourse