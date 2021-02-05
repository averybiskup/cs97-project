import './App.css';
import CourseCard from './CourseCard.js'

const RenderCourses = () => {
    const courses = ['React Native', 'Python', 'Node.js']
    return (
        <div>
        {courses.map(course => (
             <CourseCard name={course} course_id={course} />
        ))}
        </div>
    )
}

let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RenderCourses />
      </header>
    </div>
  );
}

export default App;
