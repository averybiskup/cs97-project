import axios from 'axios'

const unsaveCourse = async (username, course_id) => {

    const send = {
        'user_name': username,
        'course_id': course_id
    }
    
    const json = JSON.stringify(send)

    const p = await axios.post('/unsavecourse', json, { headers: { 'Content-Type': 'application/json' }}) 
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('Server error')
        })
}

export default unsaveCourse
