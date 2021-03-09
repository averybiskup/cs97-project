import { Link, useLocation } from 'react-router-dom'
import signout from '../helper/signout.js'
import loginPost from '../helper/loginPost.js'
import getUserInfo from '../helper/getUserInfo.js'
import UserRenderReviews from './UserRenderReviews.js'
import UserReviewCard from './UserReviewCard.js'
import { useState, useEffect } from 'react'


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

    if (isLoading) {
        return (
            <div className='profile-loading'>Loading Reviews</div>
        )
    }

    return (
        <div>
            <Link className='home-button-signup' to='/cs97-project/'>Home</Link>
            <div>
            <button className='profile-logout' type='button' onClick={() => signout()}>Sign out</button>
            <div className='profile-top'>
                    <div className='profile-name'>{userInfo.username}</div>
                    <div className='profile-date'>Joined: {userInfo.joined}</div>
            </div>
            <div className='review-cards'>
                <UserRenderReviews reviews={userInfo.reviews} />
            </div>
            </div>
        </div>
    )
}

export default Profile
