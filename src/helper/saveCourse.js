
import axios from 'axios'

const saveCourse = async (user_name, course_id, course_name) => {

    // Creating the review based on function arguments
    const save = {
        'course_id': course_id,
        'user_name': user_name,
        'course_name': course_name
    }

    // Turning review into a string to post iit
    const json = JSON.stringify(save)

    const p = await axios.post('/savecourse', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then((res) => {
            console.log(res.status)
        })
        .catch(err => {
            console.log(err.response.data)
            window.alert('Post failed. Server is probably down. ' + err)
        })
}

export default saveCourse
