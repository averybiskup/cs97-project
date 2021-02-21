import './App.css';
import StarRatings from 'react-star-ratings';

let ReviewCard = (props) => {
    console.log('props: ',props.review);
    return (
        <div className='review'>
            <div className='title'>{props.review.title}</div>
            <div className='author'>{props.review.author}</div>
            <div className='rating'>
                <StarRatings
                rating={props.review.rating}
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                starDimension="16px"
                starSpacing="1px"
                />
            </div>
            <div className='body'>{props.review.body}</div>
        </div>
    );
}

export default ReviewCard;