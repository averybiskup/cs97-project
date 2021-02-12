// Component for the home page of the app

import './App.css';
import CourseRenderer from './CourseRenderer'
import fetchCourses from './fetchCourses.js'
import fetchReviews from './fetchReviews.js'
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
        return <div>Loading Courses...</div>
    }

    return (
        <div className="App">
          <header className="App-header">
            <CourseRenderer courses={courses} />
          </header>
        </div>
    );
}

export default App;
