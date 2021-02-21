import React from 'react'

import loginPost from './loginPost.js'

const loggedInUser = localStorage.getItem('username');

const Profile = () => {
    return (
        <div>
            <div>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    src="https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    />
                </div>
                <div>
                    <h4>{loggedInUser}</h4>
                </div>
                <div>
                    <h4>Reviews: </h4>
                </div>
            </div>
        </div>
    )
}

export default Profile