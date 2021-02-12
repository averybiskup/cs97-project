let admin = require('firebase-admin');
let express = require('express')
let app = express()

app.use(express.json())

const PORT = 8000

let serviceAccount = require('./secret.json')

// Authenticating firebase api key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cs-97-project-default-rtdb.firebaseio.com"
});

// Getting reference to database's courses object
const db = admin.database()
const dataRef = db.ref('data')
const courses = dataRef.child('courses')

let addCourse = (title, author, tags, price, course_rating, reviews, url) => {
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

    try {
        courses.child(id).set(newCourse, error => {
            if (error) {
                console.log('Post error')
            } else {
                console.log(id + ' added to db')
            }
        })
    } catch(err) {
        console.log(err)
    }
}

let addReview = (course_id, body, author, title, rating, callback) => {
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

    courses.child(course_id).child('reviews').child(id).set(newReview, callback)
}

const getReview = (id, callback) => {
    courses.child(id).once('value', callback, (error) => {
        console.log('Error fetching reviews')
    })
}

const getCourses = (callback) => {
    courses.once('value', callback, (err) => {
        console.log('Error fetching courses')
    })
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
    addReview(req.body.course_id, req.body.body, req.body.author, req.body.title, req.body.rating, (error) => {
        if (error) {
            console.log('Post error')
        } else {
            console.log('Post Succesful!')
            res.sendStatus(200)
        }
    })

})

app.get('/api/fetchreviews/:id', (req, res) => {
    const course_id = req.params.id
    getReview(course_id, (snapshot) => {
        res.send(snapshot.val().reviews)
    })
})


app.get('/api/getcourses', (req, res) => {
    console.log('Attempting to get courses')
    getCourses((snapshot) => {
        console.log('Fetched courses')
        res.send(snapshot.val())
        return snapshot.val()
    })
})

console.log('Listening on: localhost:' + PORT)
app.listen(PORT)







