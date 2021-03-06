// Component for rendering reviews of the user on their profile page

import UserReviewCard from './UserReviewCard.js'
import getUserInfo from '../helper/getUserInfo.js'
import { useState, useEffect } from 'react'

let UserRenderReviews = (props) => {

    const reviews = props.reviews

    // Making sure that a course has at least 1 review, otherwise
    // displays this message
    if (!reviews) {
        return (
            <div className='profile-no-reviews'>
                User has no reviews.
            </div>
        )
    }

    // Turning object with reviews, into list of reviews
    const reviewsList = Object.keys(reviews).map((id) => {
       return reviews[id]
    })
    
    return (
        <div className='reviews'>
            {reviewsList.map((review) => {
                return <UserReviewCard key={review.id} review={review}/>
            })}
        </div>
    )
}


export default UserRenderReviews
