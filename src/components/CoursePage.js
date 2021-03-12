// Component for each course
// This is where users can leave reviews, and save courses  

import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../style/App.css'
import getCourses from '../helper/getCourses.js'
import postReview from '../helper/postReview.js'
import ReviewCard from './ReviewCard.js'
import CreateReview from './CreateReview.js'
import fetchCourses from '../helper/fetchCourses.js'
import RenderReviews from './RenderReviews'
import StarRatings from 'react-star-ratings'
import saveCourse from '../helper/saveCourse.js'
import checkSavedCourse from '../helper/checkSavedCourse.js'

let CoursePage = (props) => {

    const location = useLocation()
    const url_param = location.pathname.split('/')[location.pathname.split('/').length - 1]
    const courses = JSON.parse(window.localStorage.getItem('courses'))
    const current_course = courses[url_param]

    // This allows us to rerender dom from child component
    const [message, setMessage] = useState('')
    const [saved, setSaved] = useState(false)
    const [courseMsg, setCourseMsg] = useState('Save Course')
    
    // Scrolls to top of page
    useEffect(() => {
        window.scrollTo(0, 0)
        
        const checkSaved = async () => {
            const data = await checkSavedCourse(window.localStorage.getItem('username'), current_course['id'])
            setSaved(data)
        }
        
        if (window.localStorage.getItem('username')) {
            checkSaved()
        }

    }, [])

    // Checking that the localStorage has courses
    if (window.localStorage.getItem('courses') === null) {
        return (<div>Something went wrong</div>)
    } 

    // Getting courses from local storage
    let createReview
    let saveCourseButton

    const username = window.localStorage.getItem('username')

    // Making sure the user is logged in
    // If they aren't, we don't allow them to create a review, so we don't
    // render that part of the page
    if (username) {

        createReview = <CreateReview course={current_course} updateMessage={setMessage} />

        // Checking if the user has already saved the course, and displaying
        // that they have
        if (!saved) {
            saveCourseButton = <button className='save-course' onClick={() => {
                saveCourse(window.localStorage.getItem('username'), current_course['id'], current_course['title'])
                setCourseMsg('Course Saved!')
            }}>{courseMsg}</button>
        
        } else {
            saveCourseButton = <div className='save-course'>Course Saved</div>
        }
    } else {
        createReview = 
        <div>
            <Link className='course-page-login' to='/cs97-project/login'>Login to leave a review</Link>
        </div>
        saveCourseButton = <div className='save-course'></div>
    }


    return (
        <div className='course-page'>
            {/*Link to Home page*/}
            <Link className='course-page-home-button home-button' to='/cs97-project/'>Home</Link>
            {saveCourseButton}

            {/*Display the Title and Author of the course*/}
            <div className='create-review'>
                <div className = 'create-review-title'> <b>{current_course['title']}</b></div>
                <div className = 'create-review-author'>Author: {current_course['author']}</div>
                <div className='course-page-stars'>
                    <StarRatings
                        rating={Number(current_course['course_rating'])}
                        starRatedColor='#3B83EE'
                        numberOfStars={5}
                        name='rating'
                        starDimension='20px'
                        starSpacing='1px'
                    />
                </div>
                <div className='course-link-container'><a className='course-link-review-page' href={current_course.url} target='_blank'>View Course</a></div>

                {/*If the user is logged in, this will display a section for the user to create a review and rate the course
                   If the user is not logged in, this will display the message 'Login to leave a review'*/}
                {createReview}
            </div>
            
            {/*The rest of the page is dedicated to showing the reviews of the course*/}
            <div className='review-cards'>
                <RenderReviews loc={url_param} message={message} />
            </div>
        </div>
    );
}

export default CoursePage;
