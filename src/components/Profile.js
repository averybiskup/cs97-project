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
        console.log(userInfo)
        return (
            <div>Loading Reviews</div>
        )
    }

    return (
        <div>
            <div>
            <button type='button' className='a' onClick={() => signout()}>Sign out</button>
                <div>
                    <h1>{userInfo.username}</h1>
                    <h4>Joined: {userInfo.joined}</h4>
                </div>
                <div className='review-cards'>
                    <UserRenderReviews reviews={userInfo.reviews} />
                </div>
            </div>
        </div>
    )
}

export default Profile
