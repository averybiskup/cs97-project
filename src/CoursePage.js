// Component for each course
// Will also have components:
// StarRating
// Reviews

import { useLocation, Link } from "react-router-dom";
import './App.css'
import getCourses from './getCourses.js'
import postReview from './postReview.js'

let handleReview = (course_id) => {
    // This gets whaetever is behind the last / in the current url in this
    // case it's the id of the course
    
    //postReview(URLparam, data.body, data.author, data.title, data.rating)
    postReview(course_id, 'testing body', 'testing author', 'testing title', 53)
}


let CoursePage = () => {
    const location = useLocation()
    const url_param = location.pathname.split('/')[location.pathname.split('/').length - 1]

    if (window.localStorage.getItem('courses') === null) {
        return (<div>Something went wrong</div>)
    } 

    const courses = JSON.parse(window.localStorage.getItem('courses'))
    const current_course = courses[url_param]

    return (
        <div className="course-page">
            <button onClick={() => handleReview(url_param)}>add review</button> 
            <Link className="home-button" to='/cs97-project/'>Home</Link>
            <div>Title: {current_course['title']}</div>
            <div>Author: {current_course['author']}</div>
            <div>Rating: {current_course['rating']}</div>
        </div>
    );
}

export default CoursePage;
