// Component for the home page of the app

import './App.css';
import CourseRenderer from './CourseRenderer'
import getCourses from './getCourses.js'
import fetchCourses from './fetchCourses.js'
import { useState, useEffect } from 'react'

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [courses, setCourses] = useState({});

    // Getting data from fetchCourse function
    useEffect(() => {
        fetchCourses()
        setCourses(JSON.parse(window.localStorage.getItem('courses')))

        setLoading(false)

    }, [])

    // Render a loading div to show before data has arrived 
    if (isLoading) {
        return <div>Loading Courses...</div>
    }

    // Render if no courses were recieved from fetchCourse(), and also 
    // set courses to the static courses object that getCourses() returns
    if (Object.keys(courses).length == 0) {
        setTimeout(() => {
            setCourses(getCourses())
        }, 5000)
        return <div>Server is likely down. Serving static data in 5 seconds...</div>

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
