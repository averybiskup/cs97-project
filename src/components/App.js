// Component for the home page of the app

import '../style/App.css';
import CourseRenderer from './CourseRenderer'
import fetchCourses from '../helper/fetchCourses.js'
import fetchReviews from '../helper/fetchReviews.js'
import { useState, useEffect } from 'react'

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [courses, setCourses] = useState({});

    // Getting data from fetchCourse function
    useEffect(() => {

        // Getting course data asynchronously from fetchCourses
        const grabCourses = async () => {
            const data = await fetchCourses();
            setCourses(data);
            setLoading(false)
        }
        grabCourses()

    }, [])

    // Render a loading div to show before data has arrived 
    if (isLoading) {
        return <div body></div>
    }

    // Returning the CourseRenderer to render the courses on the page
    return (
        <div className='App'>
          <header className='App-header'>
            <CourseRenderer courses={courses} />
          </header>
        </div>
    );
}

export default App;
