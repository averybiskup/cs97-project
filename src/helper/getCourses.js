// Function for getting courses, later this will fetch from server
// This was the test data we were using at the beginning before we had the
// server up

const testpara = "This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!This is a great course!"

const getCourses = () => {

    let courses = {
        '0': { 
        'id': 0,
        'title': 'React Native',
        'author': 'Joe',
        'tags': ['React', 'React Native'],
        'rating': 50,
        'reviews': {
            0: {
                'id': 0,
                'course_id': 0,
                'body': `${testpara}`,
                'author': 'Anon',
                'title': 'Awesome course!',
                'rating': 4
                },
            1: {
                'id': 1,
                'course_id': 0,
                'body': 'This is a great course!',
                'author': 'LoveLordAgain',
                'title': 'Awesome course!',
                'rating': 3
                }
            } 
        },
        '1': {
        'id': 1,
        'title': 'Python',
        'author': 'Spud',
        'tags': ['Python'],
        'rating': 78,
        'reviews': {
            1: {
                'id': 1,
                'course_id': 1,
                'body': 'This is a great course!',
                'author': 'Anon',
                'title': 'Awesome course!',
                'rating': 100
                }
            } 
        },
        '2': {
        'id': 2,
        'title': 'Node.js',
        'author': 'Natalie',
        'tags': ['Node', 'Node.js', 'Javascript'],
        'rating': 86,
        'reviews': {
            2: {
                'id': 2,
                'course_id': 2,
                'body': 'This is a great course!',
                'author': 'Anon',
                'title': 'Awesome course!',
                'rating': 100
                }
            }
        }
    }
    return courses
}
export default getCourses
