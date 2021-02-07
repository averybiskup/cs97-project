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

    return (
        <div className="course-page">
                <Link className="home-button" to='/cs97-project/'>Home</Link>
                <div>
                    This is course: {URLparam}
                </div>
        </div>
    );
}

export default CoursePage;
