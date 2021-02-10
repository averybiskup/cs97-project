// Function for getting courses, later this will fetch from server

const getCourses = () => {

    let courses = {
        '0': { 
        'id': 0,
        'title': 'React Native',
        'author': 'Joe',
        'tags': ['React', 'React Native'],
        'rating': 50,
        'reviews': {
            'course_id': 2,
            'body': 'This is a great course!',
            'author': 'Anon',
            'title': 'Awesome course!',
            'rating': 100
            }
        }, 
        '1': {
        'id': 1,
        'title': 'Python',
        'author': 'Spud',
        'tags': ['Python'],
        'rating': 78,
        'reviews': {
            'course_id': 2,
            'body': 'This is a great course!',
            'author': 'Anon',
            'title': 'Awesome course!',
            'rating': 100
            }
        }, 
        '2': {
        'id': 2,
        'title': 'Node.js',
        'author': 'Natalie',
        'tags': ['Node', 'Node.js', 'Javascript'],
        'rating': 86,
        'reviews': {
            'course_id': 2,
            'body': 'This is a great course!',
            'author': 'Anon',
            'title': 'Awesome course!',
            'rating': 100
            }
        }
    }
    console.log('test')
    return courses
}
export default getCourses
