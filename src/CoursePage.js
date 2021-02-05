import { useLocation, Link } from "react-router-dom";
import './App.css'

let CoursePage = () => {
    const location = useLocation()
    const course_id = location.pathname.split('/')[location.pathname.split('/').length - 1]
    return (
        <div className="course-page">
                <Link className="home-button" to='/'>Home</Link>
                <div>
                    This is course: {course_id}
                </div>
        </div>
    );
}

export default CoursePage;
