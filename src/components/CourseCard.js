// Cards that show up on main page.
// Should contain:
// Name of Course
// Author of Course (maybe)
// Course Image
// Link to the course page


import { useLocation, Link } from 'react-router-dom'
import '../style/CourseCard.css'
import StarRatings from 'react-star-ratings'



let CourseCard = (props) => {
    
    //Create a path for each course so we can direct the user to the correct course page later
    const path_to_course = '/cs97-project/course/' + props.course_id

    //Sets the number of reviews for each course
    let num_reviews
    if (props.num_reviews) {
        num_reviews = Object.keys(props.num_reviews).length
    } else {
        num_reviews = 0
    }

    return (
        //Inside each course card, display:
        <div className='course-card'>
            {/*The title, which is a clickable link which takes you to the course chosen*/}
            <Link className='course-title' to={path_to_course}>{props.name}</Link>

            {/*The course author*/}
            <div className='course-author'>{props.author}</div>

            {/*And the course rating, given through a 5 star interface, as well as the number of ratings for the course*/}
            <div className='course-rating'>

                {/*Star Rating*/}
                <StarRatings
                rating={Number(props.rating)}
                starRatedColor='#3B83EE'
                numberOfStars={5}
                name='rating'
                starDimension='20px'
                starSpacing='1px'
                />
                
                {/*Number Rating*/}
                <div className='num-reviews'>({num_reviews})</div>
            </div>
        </div>
    )
}

export default CourseCard
