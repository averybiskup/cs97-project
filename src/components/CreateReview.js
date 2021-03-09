// Component for the input section of the reviews page


import '../style/App.css'
import { useState } from 'react'
import postReview from '../helper/postReview.js'
import fetchCourses from '../helper/fetchCourses.js'
import fetchReviews from '../helper/fetchReviews.js'
import ReviewCard from './ReviewCard.js'
import StarRatings2 from 'react-star-ratings'

// Function for handling the submit button on the form
// Returns true if form was valid
const handleSubmit = (e, course_id, title, body, rating, setMessage, course_name) => {
    e.preventDefault()

    // Checking for valid form data
    if (title.length <= 0) { 
        alert('No title')
    } else if (body.length <= 0) {
        alert('No body')
    } else if (rating == 0) {
        alert('Rating can not be 0')
    } else {

        const author = window.localStorage.getItem('username')
        const user_id = Number(window.localStorage.getItem('user_id'))

        // change (!author) to (false) for review testing
        if (!author) {
            alert('You are not signed in');

            window.location.replace('/cs97-project/login')
        } else {

            // Posting review
            postReview(course_id, body, author, title, rating, user_id, course_name)

            // Rerendering parent component
            setMessage('Preparing review...')

            // Fetching courses and updating localStorage
            // Then rerendering via setMessage
            fetchReviews(course_id)
                .then(() => {
                    setMessage('Review added!')
                })

            return true
        }
    }
    return false
}



const CreateReview = (props) => {

    // State variables that are changed when form gets input
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState(0)
    const course_id = props.course.id
    const course_name = props.course.title

    return (
        <div className='create-review-input'>
            
            {/*Create an empty review form*/}
            <form id='create-review-form'
                onSubmit={(e) => {
                    if (handleSubmit(e, course_id, title, body, rating, props.updateMessage, course_name)) {
                        // Resetting form inputs
                        setTitle('')
                        setBody('')
                        setRating(0)
                    }
                }}
            >

            {/*The user must fill out 3 inputs: */}
            <div className='review-inputs'>
                {/*The title of their review*/}
                <input
                    type='text'
                    name='title'
                    placeholder='title (required)'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={"title-input"}
                />

                {/*The review itself*/}
                <textarea
                    type='text'
                    name='body'
                    placeholder='review (required)'
                    value={body} onChange={(e) => setBody(e.target.value)}
                    className={"body-input"}
                />

                {/*And the star rating*/}
                <div className='create-star-rating'>
                <StarRatings2
                    rating={rating}
                    starRatedColor="#3B83EE"
                    starHoverColor="#3B83EE"
                    isSelectable={true}
                    numberOfStars={5}
                    name='rating'
                    starDimension="32px"
                    starSpacing="5px"
                    changeRating={(rating)=>setRating(rating)}
                />
                </div>

                {/*A submit button to submit their review*/}
                <input type='submit' value='Submit' className={"submit-review"} />
                <br/>
            </div>

            </form>
        </div>
    );
}

export default CreateReview;
