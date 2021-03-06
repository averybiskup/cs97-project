import '../style/ReviewCard.css';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom'

let ReviewCard = (props) => {
    // props.review.rating is already a number
    // test with typeof
    // console.log("rating type: ",typeof props.review.rating);

    // get first letter of string of Author
    let firstLet = props.review.author.charAt(0);
    return (
        <div className='review'>
            <div className='review-left'>
                <Link to={'/cs97-project/profile/' + props.review.user_id} style={{ textDecoration: 'none' }} className='review-logo'>{firstLet}</Link>
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


                    <span>&nbsp; {Number(props.review.rating)}</span>
                    <span>&nbsp; stars</span>
                    </div>
                <div className='review-body'>{props.review.body}</div>
                {/*
                    add data for props.review.likes and place where number is
                    Then add a function to increase likes
                */}
                <div className='star-container'>
                {/*
                    add on click event on button that adds one to props.review.likes
                    function addLike(){props.review.likes + 1} < not exact code, just something
                    that will add to props.review.likes.
                    It is like props.review.rating, someone needs to create props.review.likes.
                */}
                    <button>&#128077;</button>
                    <span>&nbsp; 14</span>
                    <span>&nbsp; likes</span>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
