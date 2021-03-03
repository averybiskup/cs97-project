import { Link, useLocation } from 'react-router-dom'
import signout from '../helper/signout.js'
import loginPost from '../helper/loginPost.js'
import getUserInfo from '../helper/getUserInfo.js'
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
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    />
                </div>
                <div>
                    <h4>{userInfo.username}</h4>
                    <h4>Joined: {userInfo.joined}</h4>
                </div>
                <div>
                    <h4>Reviews: </h4>
                </div>
            </div>
        </div>
    )
}

export default Profile
