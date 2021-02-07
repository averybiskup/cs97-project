// Function for getting courses, later this will fetch from server

const getCourses = () => {

    let courses = {
        '0': { 
        'id': 0,
        'title': 'React Native',
        'author': 'Joe',
        'tags': ['React', 'React Native']
        }, 
        '1': {
        'id': 1,
        'title': 'Python',
        'author': 'Spud',
        'tags': ['Python']
        }, 
        '2': {
        'id': 2,
        'title': 'Node.js',
        'author': 'Natalie',
        'tags': ['Node', 'Node.js', 'Javascript']
        }
    }
    console.log('test')
    return courses
}
export default getCourses
