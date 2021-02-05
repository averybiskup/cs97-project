import './App.css';
import CourseRenderer from './CourseRenderer'
import getCourses from './getCourses.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CourseRenderer courses={getCourses()} />
      </header>
    </div>
  );
}

export default App;
