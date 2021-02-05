// Function for getting courses, later this will fetch from server
let getCourses = () => {

    const courses = [
        { 
        'id': 0,
        'title': 'React Native',
        'author': 'Joe',
        'tags': ['React', 'React Native']
        }, {
        'id': 1,
        'title': 'Python',
        'author': 'Spud',
        'tags': ['Python']
        }, {
        'id': 2,
        'title': 'Node.js',
        'author': 'Natalie',
        'tags': ['Node', 'Node.js', 'Javascript']
        }
    ]
    return courses
}
export default getCourses;
