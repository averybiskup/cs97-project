// Component for the input section of the reviews page


import './App.css'
import { useState } from 'react'
import postReview from './postReview.js'
import fetchCourses from './fetchCourses.js'
import fetchReviews from './fetchReviews.js'
import ReviewCard from './ReviewCard.js'

// Function for handling the submit button on the form
// Returns true if form was valid
const handleSubmit = (e, course_id, title, body, rating, setMessage) => {
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
        
        if (!author) {
            alert('You are not signed in')
            window.location.replace('/cs97-project/login')
        } else {

            // Posting review
            postReview(course_id, body, author, title, rating)

            // Rerendering parent component
            setMessage('Preparing review...')

            // Fetching courses and updating localStorage
            //fetchCourses()
            fetchReviews(course_id)

            // Timeout so we have data before rerendering parent component
            setTimeout(() => {
                
                setMessage('Review added!')
            }, 5000)
            fetchReviews(course_id)
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

    return (
        <div className='create-review'>
            <form id='createreview' onSubmit={(e) => { 
                if (handleSubmit(e, course_id, title, body, rating, props.updateMessage)) {
                    // Resetting form inputs
                    setTitle('')
                    setBody('')
                    setRating(0)
                }
            }}>
                
                <input type='text' name='title' placeholder='title (required)' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type='text' name='body' placeholder='review (required)' value={body} onChange={(e) => setBody(e.target.value)} />
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default CreateReview;
