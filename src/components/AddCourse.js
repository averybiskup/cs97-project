// Button that appears on CoursePage that adds a static course to the db

import '../style/App.css'
import axios from 'axios'

let add = () => {
    axios.get('/api/addcourse')
}

const AddCourse = () => {
    return (
        <div>
            <button onClick={() => add()}>add course</button>
        </div>
    );
}

export default AddCourse;
