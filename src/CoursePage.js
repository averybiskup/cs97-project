// Component for each course
// Will also have components:

import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import getCourses from './getCourses.js'
import postReview from './postReview.js'
import ReviewCard from './ReviewCard.js'
import CreateReview from './CreateReview.js'
import fetchCourses from './fetchCourses.js'
import RenderReviews from './RenderReviews'

let CoursePage = (props) => {

    // Scrolls to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // This allows us to rerender dom from child component
    const [message, setMessage] = useState('')

    // Getting the course_id from url
    const location = useLocation()
    const url_param = location.pathname.split('/')[location.pathname.split('/').length - 1]

    // Checking that the localStorage has courses
    if (window.localStorage.getItem('courses') === null) {
        return (<div>Something went wrong</div>)
    } 

    // Getting courses from local storage
    const courses = JSON.parse(window.localStorage.getItem('courses'))
    const current_course = courses[url_param]

    return (
        <div className="course-page">
            <Link className="login" to='/cs97-project/login'>Login</Link>
            <Link className="home-button" to='/cs97-project/'>Home</Link>
            <div className = 'title'>Title: {current_course['title']}</div>
            <div className = 'author'>Author: {current_course['author']}</div>
            <div className = 'rating'>Rating: {current_course['course_rating']}</div>
            <div> Submit a review:
                <CreateReview course={current_course} updateMessage={setMessage} />
            </div>
            <div className='review-cards'>
                <RenderReviews loc={url_param} message={message} />
            </div>
        </div>
    );
}

export default CoursePage;
