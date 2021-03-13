// Component for rendering the cards on the main page.
// Also contains the code for the search bar
// Uses js-search which is for searching for matches in a list of objects

import {useState} from 'react'
import CourseCard from './CourseCard.js'
import * as JsSearch from 'js-search'
import { Link } from 'react-router-dom'
import signout from '../helper/signout.js'
import viewProfile from '../helper/viewProfile.js'
import '../style/CourseRenderer.css'

// Returns all objects in the courses list that match the query
//                     array  , string
const filterCourses = (courses, query) => {

    // Makes sure query isn't empty
    if (!query)
        return courses

    // Creating search
    var search = new JsSearch.Search('id')
    search.addIndex('title')
    search.addIndex('tags')
    search.addDocuments(courses)
    const result = search.search(query)

    // Returning courses that match the search
    return courses.filter((course) => {
        return result.includes(course) 
    })
}

// This is the component that renders the courses on the home page
const CourseRenderer = (props) => {
    const [query, setQuery] = useState('')
    const coursesObj = props.courses
    const courses = Object.keys(coursesObj).map((id) => {
       return coursesObj[id]
    })

    //If user searched for certain courses only, then store the filtered courses
    const filteredCourses = filterCourses(courses, query)

    //For the loginButton, check to see if the user is logged in or not
    let loginButton
    let isLoggedIn = false
    const loginRoute = '/cs97-project/profile/' + window.localStorage.getItem('user_id')
    
    //If user is logged in (isAuthenticated), display Sign Out button
    if (window.localStorage.getItem('isAuthenticated')) { 
        loginButton = <Link className='a' onClick={() => signout()}>Sign Out</Link>
        isLoggedIn = true
        
    //Otherwise diplay Login button
    } else {
        loginButton = <Link className='a' to='/cs97-project/login'>Login</Link>
        isLoggedIn = false
    }


    return (
        <div>
            {/*For the top bar, display the loginButton (which we assigned as Login or Sign Out above), the Course Title
               and the Profile button IF the user is logged in*/}
            <div className='top-bar'>
                <div className='user'>{window.localStorage.getItem('username')}</div>
                {loginButton}
                <Link to='/cs97-project' className='title'>CourseMe</Link>
                {isLoggedIn && <Link to={loginRoute}>Profile</Link>}
            </div>

            {/*For the middle of the page we have a Search Bar, which users can use to search for courses*/}
            <div className='middle-page'>
                <br></br>
                <input type='text'  className='middle-input' id='course-search' placeholder='Search for Course...' name='s' onChange={e => setQuery(e.target.value)}/>
            </div>
            
            {/*The rest of the page is dedicated to the CourseCards, which displays the course title, author, and rating*/}
            <div id='wrapper'>
                {filteredCourses.map(course => (
                     <CourseCard key={course.id} name={course.title} author={course.author} rating={course.course_rating} course_id={course.id} num_reviews={course.reviews} />
                     
                ))}
            </div>


        </div>
    )
}
export default CourseRenderer
