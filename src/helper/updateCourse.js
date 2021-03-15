// Function for updating a course's rating
// Currently this is only called when a new review is added
//
// This does not update the localStorage so may take time to
// be updated.


import axios from 'axios'

const updateCourse = async (course_id, new_rating) => {

    // We can use /api/updatecourse because we have a proxy in package.json which
    // points to the server address (localhost:8000)
    const info = {
        'course_id': course_id,
        'new_rating': new_rating
    }

    const json = JSON.stringify(info)

    console.log('Updating course')
    const data = await axios.post('https://courseme97.herokuapp.com/api/updatecourse', json, { headers: { 'Content-Type': 'application/json' }})
        .then(res => {
            console.log('Course updated')
            return res.data
        })
        .catch(err => {
            console.log(err)
            window.alert('Error updating rating') 
        })
    return data

}

export default updateCourse
