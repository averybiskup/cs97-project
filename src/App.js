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
        const fetch = async () => {
            const data = await fetchCourses()
            setCourses(data)
        }
        fetch()
        setLoading(false)
    }, [])

    // Render a loading div to show before data has arrived 
    if (isLoading) {
        return <div>Loading Courses...</div>
    }
    if (Object.keys(courses).length == 0) {
        setCourses(getCourses())
        return <div>No Courses Loaded... Server is likely down.</div>
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
