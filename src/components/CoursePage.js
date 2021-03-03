// Component for each course
// Will also have components:

import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../style/App.css'
import getCourses from '../helper/getCourses.js'
import postReview from '../helper/postReview.js'
import ReviewCard from './ReviewCard.js'
import CreateReview from './CreateReview.js'
import fetchCourses from '../helper/fetchCourses.js'
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
    console.log("courses",courses)
    let createReview
    //the login is not working, because the user name is not set. nothing in the data base for the user name
    const username = window.localStorage.getItem('username')
    //replace (username) with (true) for review testing
    if (username) {
        createReview = <CreateReview course={current_course} updateMessage={setMessage} />
    } else {
        createReview = 
        <div>
            <Link className="course-page-login" to='/cs97-project/login'>Login to leave a review</Link>
        </div>
    }


    return (

        <div className="course-page">
            {/*removed login option because it already appears on page*/}
            {/*<Link className="login" to='/cs97-project/login'>Login</Link>*/}
            <Link className="home-button" to='/cs97-project/'>Home</Link>
            <br/><br/>
            <div className="create-review">
                <div className = 'create-review-author'><b>Author:</b> {current_course['author']}</div>
                <div className = 'create-review-title'><b>Course:</b> {current_course['title']}</div>
                {/*<div className = 'rating'>Rating: {current_course['course_rating']}</div>*/}
                {createReview}
            </div>

            <div className='review-cards'>
                <RenderReviews loc={url_param} message={message} />
            </div>
        </div>
    );
}

export default CoursePage;
