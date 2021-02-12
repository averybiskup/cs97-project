// Component for each course
// Will also have components:
// StarRating
// Reviews

import { useLocation, Link } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import getCourses from './getCourses.js'
import postReview from './postReview.js'
import ReviewCard from './ReviewCard.js'
import CreateReview from './CreateReview.js'
import fetchCourses from './fetchCourses.js'

let RenderReviews = (props) => {

    const courses = JSON.parse(window.localStorage.getItem('courses'))
    const reviews = courses[props.loc]['reviews']

    if (!reviews) {
        return (
            <div>
                Course has no reviews.
            </div>
        )
    }

    const reviewsList = Object.keys(reviews).map((id) => {
       return reviews[id]
    })
    
    return (
        <div className="reviews">
            <div>{props.message}</div>
            <h1>Reviews:</h1>
            {reviewsList.map((review) => {
                return <ReviewCard key={review.id} review={review} />
            })}
        </div>
    )
}

let CoursePage = (props) => {

    const [reload, setReload] = useState(false)
    const [message, setMessage] = useState('')

    const location = useLocation()
    const url_param = location.pathname.split('/')[location.pathname.split('/').length - 1]

    if (window.localStorage.getItem('courses') === null) {
        return (<div>Something went wrong</div>)
    } 

    const courses = JSON.parse(window.localStorage.getItem('courses'))
    const current_course = courses[url_param]

    return (
        <div className="course-page">
            <Link className="home-button" to='/cs97-project/'>Home</Link>
            <div>Title: {current_course['title']}</div>
            <div>Author: {current_course['author']}</div>
            <div>Rating: {current_course['rating']}</div>
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
