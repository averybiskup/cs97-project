import './App.css'
import axios from 'axios'

let add = () => {
    axios.get('/api/addcourse')
}

const AddCourse = () => {
    
    return (
        <div className="course-page">
                <div>
                    <button onClick={() => add()}>add course</button>
                </div>
        </div>
    );
}

export default AddCourse;
