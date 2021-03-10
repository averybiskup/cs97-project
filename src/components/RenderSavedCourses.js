import { Link } from 'react-router-dom'
import unsaveCourse from '../helper/unsaveCourse.js'
import { useState } from 'react'
import '../style/Profile.css'

let RenderSavedCourses = (props) => {

    if (!props.courses) {
        return (
            <div>No saved courses</div>
        )
    }

    return (
        <div className='saved-course-list'>
            Saved Courses:
            {Object.entries(props.courses).map((arr) => {
                if (arr[1] != null) {
                    return <div key={arr[0]} id='profile-course'>
                        <button type='button' className='remove-button' onClick={() => {
                            unsaveCourse(window.localStorage.getItem('username'), arr[0])
                                .then(() => {
                                    document.getElementById('profile-course').style.display = 'none';
                                })
                        }}>x</button>

                        <Link className='single-saved-course' to={'/cs97-project/course/' + arr[0]}>{arr[1]}</Link>
                    </div>
                }
                
            })} 
        </div>
    )
}

export default RenderSavedCourses
