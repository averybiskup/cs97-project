import '../style/ReviewCard.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'

let UserReviewCard = (props) => {
    // props.review.rating is already a number
    // test with typeof
    // console.log("rating type: ",typeof props.review.rating);

    // TODO: change course_id to course_name when old users are fixed/removed
    let firstLet = props.review.course_id
    return (
        <div className='review'>
            <div className='review-left'>
                <div className='review-author'></div>
                <Link to={'/cs97-project/course/' + props.review.course_id} style={{ textDecoration: 'none' }} className='user-review-logo'>{firstLet}</Link>
            </div>
            <div className='right'>
                <div className='review-title'>{props.review.title}</div>
                <div className='review-course_descrition'>{props.review.course_description}</div>
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

export default UserReviewCard;
