// Button that appears on CoursePage that adds a static course to the db

import '../style/App.css'
import axios from 'axios'

let add = () => {
    axios.get('/api/addcourse')
}

// This was an internal function that we used to add a course
// Users won't use this, but eventually we want to allow them to add their own
// courses
const AddCourse = () => {
    return (
        <div>
            <button onClick={() => add()}>add course</button>
        </div>
    )
}

export default AddCourse
