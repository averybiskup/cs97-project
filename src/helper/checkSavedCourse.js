// Function for getting which courses the user has saved

import axios from 'axios'

const checkSavedCourse = async (user_name, course_id) => {

    // Creating the review based on function arguments
    const save = {
        'course_id': course_id,
        'user_name': user_name,
    }

    // Turning review into a string to post it
    const json = JSON.stringify(save)

    // Posting to server
    const p = await axios.post('https://courseme97.herokuapp.com/checksavedcourse', json, { headers: { 'Content-Type': 'application/json' }}) 
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
