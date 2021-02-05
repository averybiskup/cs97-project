import { useLocation, Link } from "react-router-dom";
import './App.css'

let CourseCard = (props) => {
    const path_to_course = "/course/" + props.course_id
    return (
        <div className="course-card">
                <div>{props.name}</div>
                <div>COURSE IMAGE</div>
                <Link to={path_to_course} >Course Page</Link>
        </div>
    );
}

export default CourseCard;
