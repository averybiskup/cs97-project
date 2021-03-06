// Component for each review

import '../style/ReviewCard.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'

let ReviewCard = (props) => {

    // get first letter of string of Author
    let firstLet = props.review.author.charAt(0);
    return (
        <div className='review'>
            <div className='right'>
                <Link className='review-author' to={'/cs97-project/profile/' + props.review.user_id}>{props.review.author}</Link>
                <div className='review-title'>{props.review.title}</div>
                <div className='star-container'>
                    <StarRatings
                    rating={Number(props.review.rating)}
                    starRatedColor='#3B83EE'
                    numberOfStars={5}
                    name='rating'
                    starDimension='16px'
                    starSpacing='1px'
                    />


                    </div>
                <div className='review-body'>{props.review.body}</div>
                {/*
                    add data for props.review.likes and place where number is
                    Then add a function to increase likes
                */}
                <div className='review-date'>{props.review.date}</div>
            </div>
        </div>
    );
}

export default ReviewCard;
