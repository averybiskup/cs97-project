import './App.css';
import StarRatings from 'react-star-ratings';

let ReviewCard = (props) => {
    // props.review.rating is already a number
    // test with typeof
    // console.log("rating type: ",typeof props.review.rating);

    // get first letter of string of Author
    let firstLet = props.review.author.charAt(0);
    return (
        <div className='review'>
            <div className='review-left'>
                <div className='review-logo'>{firstLet}</div>
                <div className='review-author'>- {props.review.author}</div>
            </div>
            <div className='right'>
                <div className='review-title'>{props.review.title}</div>
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
        </div>
    );
}

export default ReviewCard;