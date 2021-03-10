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

    const [userInfo, setUserInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation()
    const url_param = location.pathname.split('/')[location.pathname.split('/').length - 1]

    useEffect(() => {
        const getInfo = async () => {
            const data = await getUserInfo(url_param)
            setUserInfo(data) 
            setIsLoading(false)
        }

        getInfo()
    }, [])

    // Make sure the reviews are loaded from database before trying ti display them
    if (isLoading) {
        return (
            <div className='profile-loading'>Loading Reviews</div>
        )
    }

    // Making sure the user is signed in and matches the profile to display the signout button
    let signoutButton;
    if (window.localStorage.getItem('username') == userInfo.username) {
        signoutButton = <button className='profile-logout' type='button' onClick={() => signout()}>Sign out</button>
    } else {
        signoutButton = <div></div>
    }

    return (
        <div>
            <Link className='home-button-signup' to='/cs97-project/'>Home</Link>
            <div>
                {signoutButton}
                <div className='profile-top'>
                    <div className='profile-name'>{userInfo.username}</div>
                    <div className='profile-date'>Joined: {userInfo.joined}</div>
                </div>
                <div className='saved-courses'>
                    <RenderSavedCourses courses={userInfo.saved_courses}/>
                </div>
                <div className='review-cards'>
                    <UserRenderReviews reviews={userInfo.reviews} />
                </div>
                
            </div>
        </div>
    )
}

export default Profile
