import './App.css'

let ReviewCard = (props) => {
    console.log(props)
    return (
        <div className='review'>
                <div>Title: {props.review.title}</div>
                <div>Author: {props.review.author}</div>
                <div>Body: {props.review.body}</div>
                <div>Rating: {props.review.rating}</div>
        </div>
    );
}

export default ReviewCard;
