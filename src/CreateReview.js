import './App.css'
import { useState } from 'react'
import postReview from './postReview.js'
import fetchCourses from './fetchCourses.js'
import ReviewCard from './ReviewCard.js'

let handleSubmit = (e, course_id, author, title, body, rating, setMessage) => {
    e.preventDefault()
    if (title.length <= 0) { 
        alert('No title')
    } else if (body.length <= 0) {
        alert('No body')
    } else if (rating == 0) {
        alert('Rating can not be 0')
    } else {
        if (author.length == 0) {
            author = 'Anon'
        }
        postReview(course_id, body, author, title, rating)
        setMessage('Preparing review...')
        fetchCourses()
        setTimeout(() => {

            setMessage('')
        }, 2000)

    }
}



const CreateReview = (props) => {
    const [author, setAuthor] = useState('Anon')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState(0)
    const course_id = props.course.id


    return (
        <div className='create-review'>
            <form id='createreview' onSubmit={(e) => { 
                handleSubmit(e, course_id, author, title, body, rating, props.updateMessage)
                setAuthor('Anon')
                setTitle('')
                setBody('')
                setRating(0)
            }}>
                
                <input type='text' name='author' placeholder='name' value={author} onChange={(e) => setAuthor(e.target.value)}/>
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CreateReview;
