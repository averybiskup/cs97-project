import './App.css'
import { useState } from 'react'

let handleSubmit = (author, title, body, rating) => {
    alert(author + title + body + rating)
}

const CreateReview = (props) => {
    const [author, setAuthor] = useState('Anon')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [rating, setRating] = useState(0)

    return (
        <div className='create-review'>
            <form id='createreview' onSubmit={() => handleSubmit(author, title, body, rating)}>
                <input type='text' name='author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <input type='text' name='title' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type='text' name='body' placeholder='review' value={body} onChange={(e) => setBody(e.target.value)} />
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
