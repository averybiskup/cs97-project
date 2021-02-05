import {useState} from 'react';
import CourseCard from './CourseCard.js'
import * as JsSearch from 'js-search'

const filterCourses = (courses, query) => {

    // Makes sure query isn't empty
    if (!query)
        return courses

    // Creating search 
    var search = new JsSearch.Search('id')
    search.addIndex('title')
    search.addIndex('tags')
    search.addIndex('author')

    search.addDocuments(courses)
    const result = search.search(query)

    // Returning courses that match the search
    return courses.filter((course) => {
        return result.includes(course); 
    })
};



const CourseRenderer = (props) => {
    const [query, setQuery] = useState('');
    const courses = props.courses
    const filteredCourses = filterCourses(courses, query)

    return (
        <div>
            <input type="text" id="course-search" placeholder="search" name="s" onChange={e => setQuery(e.target.value)}/>
            
            {filteredCourses.map(course => (
                 <CourseCard key={course.id} name={course.title} course_id={course.id} />
            ))}

        </div>
    )
}
export default CourseRenderer
