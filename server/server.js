let admin = require('firebase-admin');
let express = require('express')
let app = express()

const PORT = 8000

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
        }]

// Authenticating firebase api key
admin.initializeApp({
    credentials: admin.credential.applicationDefault(),
    databaseURL: "https://cs-97-project-default-rtdb.firebaseio.com"
});

const db = admin.database()

const dataRef = db.ref('data')

let addCourse = (title, author, tags, price, course_rating, reviews, url) => {
    var course = dataRef.child("courses")
    var id = Date.now();

    let newCourse = {
        'id': id,
        'title': title,
        'author': author,
        'tags': tags,
        'price': price,
        'course_rating': course_rating,
        'reviews': reviews,
        'url': url
    }

    course.child(id).set(newCourse)
}

let getCourses = (callback) => {
    dataRef.child('courses').orderByChild('author').once('value', callback)
}


app.get('/', (req, res) => {
    console.log('User connected')
    res.send('hello world')
})

app.get('/api/addcourse', (req, res) => {
    console.log('Attempting to add course')
    addCourse('test', 'test', ['test', 'test'], 50, 95, [], 'https://www.course.com')
    res.send('Course Added')
})

app.get('/api/getcourses', (req, res) => {
    console.log('Attempting to get courses')
    getCourses((snapshot) => {
        res.send(snapshot.val())
        return snapshot.val()
    })
})

console.log('Listening on: localhost:' + PORT)
app.listen(PORT)
