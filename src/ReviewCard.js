import './App.css';
import StarRatings from 'react-star-ratings';

let ReviewCard = (props) => {
    return (
        <div className='review'>
            <div className='review-title'>{props.review.title}</div>
            <div className='review-author'>{props.review.author}</div>
            <div className='star-container'>
                <StarRatings
                rating={Number(props.review.rating)}
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                starDimension="16px"
                starSpacing="1px"
                />
            </div>
            <div className='review-body'>{props.review.body}</div>
        </div>
    );
}

export default ReviewCard;
