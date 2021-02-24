// Component for rendering the cards on the main page.
// Also contains the code for the search bar
// Uses js-search which is for searching for matches in a list of objects


import {useState} from 'react';
import CourseCard from './CourseCard.js'
import * as JsSearch from 'js-search'
import { Link } from 'react-router-dom'
import signout from './signout.js'

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
        return result.includes(course); 
    })
};



const CourseRenderer = (props) => {
    const [query, setQuery] = useState('');
    const coursesObj = props.courses
    const courses = Object.keys(coursesObj).map((id) => {
       return coursesObj[id]
    })

    const filteredCourses = filterCourses(courses, query)

    let loginButton
    if (window.localStorage.getItem('isAuthenticated')) {
        loginButton = <button type='button' class='a' onClick={() => signout()}>Sign out</button>
    } else {
        loginButton = <Link className='a' to='/cs97-project/login'>Login</Link>
    }
    
    return (
        <div>
            <div className="top_bar">
                {loginButton}
                <Link to='/cs97-project' class="title">WEBPAGE TITLE</Link>
                <Link to='/cs97-project/addcourse'>Add Course</Link>
            </div>
            <div className="middle-page">
                <br></br>
                <input type="text"  class="middle-input" id="course-search" placeholder="Search for Course..." name="s" onChange={e => setQuery(e.target.value)}/>
            </div>

            <div id="wrapper">
                {filteredCourses.map(course => (
                     <CourseCard key={course.id} name={course.title} course_id={course.id} />
                ))}
            </div>


        </div>
    )
}
export default CourseRenderer
