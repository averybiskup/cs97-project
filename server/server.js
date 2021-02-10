let admin = require('firebase-admin');
let express = require('express')
let app = express()

app.use(express.json())

const PORT = 8000


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

let addReview = (course_id, body, author, title, rating) => {
    var course = dataRef.child("courses")
    var id = Date.now();
    let d = new Date();
    let cDay = d.getDate();
    let cMonth = d.getMonth() + 1;
    let cYear = d.getFullYear();
    let date = cDay + "-" + cMonth + "-" + cYear

    let newReview = {
        'id': id,
        'course_id': course_id,
        'body': body,
        'author': author,
        'title': title,
        'rating': rating,
        'date': date
    }

    course.child(course_id).child('reviews').child(id).set(newReview)
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
    addCourse('test', 'test', ['test', 'test'], 50, 95, {}, 'https://www.course.com')
    res.send('Course Added')
})

app.post('/api/postreview', (req, res) => {
    console.log('Attempting to add review')
    addReview(req.body.course_id, req.body.body, req.body.author, req.body.title, req.body.rating)
    res.send('Fail')
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
