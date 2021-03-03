// Cards that show up on main page.
// Should contain:
// Name of Course
// Author of Course (maybe)
// Course Image
// Link to the course page


import { useLocation, Link } from "react-router-dom";
import '../style/CourseCard.css'
import StarRatings from 'react-star-ratings';



let CourseCard = (props) => {
    const path_to_course = "/cs97-project/course/" + props.course_id
    return (
        <div className="course-card">
                {/*<div><img className="image_id" src={'https://media.geeksforgeeks.org/wp-content/cdn-uploads/titleShadow-1024x341.png'} alt="test image"/></div>*/}
                <div className="course_title">{props.name}</div>
                <div className="course_author">{props.author}</div>
                <div className="course_rating">
                    <StarRatings
                    rating={Number(props.rating)}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name='rating'
                    starDimension="16px"
                    starSpacing="1px"
                    />
                </div>
                <Link className="course_link" to={path_to_course} >Course Page</Link>
        </div>
    );
}

export default CourseCard;
