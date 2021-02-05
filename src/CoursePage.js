// Component for each course
// Will also have components:
// StarRating
// Reviews

import { useLocation, Link } from "react-router-dom";
import './App.css'
import getCourses from './getCourses.js'

let CoursePage = () => {
    // This gets whaetever is being the last / in the current url
    const location = useLocation()
    const URLparam = location.pathname.split('/')[location.pathname.split('/').length - 1]

    // Getting the course related to the url
    let course_id = ''
    getCourses().forEach((course) => {
        if (course.id == URLparam) {
            course_id = course.title
        }
    })

    return (
        <div className="course-page">
                <Link className="home-button" to='/cs97-project/'>Home</Link>
                <div>
                    This is course: {course_id}
                </div>
        </div>
    );
}

export default CoursePage;
