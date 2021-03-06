// This is the review card that is displayed on the users profile page
// It doesn't need to show the same data as the other review card
// so we had to make another one

import '../style/ReviewCard.css'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

let UserReviewCard = (props) => {
    return (
        <div className='review'>
            <div className='review-author'></div>
            <div className='right'>
                <Link to={'/cs97-project/course/' + props.review.course_id} className='review-course-link'>{props.review.course_name}</Link>
                <div className='review-title'>{props.review.title}</div>
                <div className='review-course_descrition'>{props.review.course_description}</div>
                <div className='star-container'>
                    <StarRatings
                    rating={Number(props.review.rating)}
                    starRatedColor='orange'
                    numberOfStars={5}
                    name='rating'
                    starDimension='16px'
                    starSpacing='1px'
                    />
                </div>
                <div className='review-body'>{props.review.body}</div>
                <div className='review-date'>{props.review.date}</div>
            </div>
        </div>
    )
}

export default UserReviewCard
