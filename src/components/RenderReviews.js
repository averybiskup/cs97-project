// Component to render each review

import ReviewCard from './ReviewCard.js'

let RenderReviews = (props) => {

    // Getting courses object from localStorage
    const courses = JSON.parse(window.localStorage.getItem('courses'))
    const reviews = courses[props.loc]['reviews']

    // Making sure that a course has at least 1 review, otherwise
    // displays this message
    if (!reviews) {
        return (
            <div>
                Course has no reviews.
            </div>
        )
    }

    // Turning object with reviews, into list of reviews
    const reviewsList = Object.keys(reviews).map((id) => {
       return reviews[id]
    })
    
    return (
        <div className='reviews'>
            <div className='status-message'>{props.message}</div>
            {reviewsList.map((review) => {
                return <ReviewCard key={review.id} review={review} />
            })}
        </div>
    )
}

export default RenderReviews
