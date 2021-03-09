import { Link } from 'react-router-dom'

let RenderSavedCourses = (props) => {

    // Turning object with reviews, into list of reviews
    Object.entries(props.courses).map((arr) => {
        console.log(arr[0], arr[1])
    })

    return (
        <div className='saved-course-list'>
            Saved Courses:
            {Object.entries(props.courses).map((arr) => {
                return <div  key={arr[0]}>
                    <Link className='single-saved-course' to={'/cs97-project/' + arr[0]}>{arr[1]}</Link>                    
                </div>
                
            })} 
        </div>
    )
}

export default RenderSavedCourses
