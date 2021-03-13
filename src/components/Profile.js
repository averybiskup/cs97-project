// Component for the profile page

import { Link, useLocation } from 'react-router-dom'
import signout from '../helper/signout.js'
import loginPost from '../helper/loginPost.js'
import getUserInfo from '../helper/getUserInfo.js'
import UserRenderReviews from './UserRenderReviews.js'
import UserReviewCard from './UserReviewCard.js'
import { useState, useEffect } from 'react'
import RenderSavedCourses from './RenderSavedCourses.js'
import '../style/Profile.css'


const loggedInUser = localStorage.getItem('username')

const Profile = () => {

    // Storing user data in state
    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // Getting the current user id
    const location = useLocation()
    const url_param = location.pathname.split('/')[location.pathname.split('/').length - 1]

    // Getting the user data
    useEffect(() => {
        const getInfo = async () => {
            const data = await getUserInfo(url_param)
            setUserInfo(data) 
            setIsLoading(false)
        }

        getInfo()
    }, [])

    // Make sure the reviews are loaded from database before trying to display them
    if (isLoading) {
        return (
            <div className='profile-loading'>Loading Reviews</div>
        )
    }

    // Making sure the user is signed in and matches the profile to display the signout button
    let signoutButton;
    let myProfile = false

    // If the profile is of the current logged in user, display the signout button
    if (window.localStorage.getItem('username') == userInfo.username) {
        signoutButton = <button className='profile-logout' type='button' onClick={() => signout()}>Sign out</button>
        myProfile = true
    } else {
        signoutButton = <div></div>
    }

    return (
        <div>
            <Link className='home-button-profile home-button' to='/cs97-project/'>Home</Link>
            <div>
                {/*Display the signout button, the username, date joined, saved courses, as well as the reviews the user has left*/}
                {signoutButton}
                <div className='profile-top'>
                    <div className='profile-name'>{userInfo.username}</div>
                    <div className='profile-date'>Joined: {userInfo.joined}</div>
                </div>
                <div className='saved-courses'>
                    <RenderSavedCourses courses={userInfo.saved_courses} myProfile={myProfile}/>
                </div>
                <div className='review-cards'>
                    <UserRenderReviews reviews={userInfo.reviews} />
                </div>
                
            </div>
        </div>
    )
}

export default Profile
