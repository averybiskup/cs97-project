let admin = require('firebase-admin');
let express = require('express')
let app = express()

app.use(express.json())

// Hosting on localhost:8000
const PORT = 8000

// Getting authentication from secret
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

const checkUser = (username, callback) => {
    dataRef.child('users').child(username).once('value', callback, (error) => {
        console.log('Error checking user')
    })
}

const login = (username, hash, callback) => {
    dataRef.child('users').child(username).once('value', callback, (error) => {
        console.log('Error logging in')
    })
}

const getUserId = (username, callback) => {
    dataRef.child('users').child(username).once('value', callback, (error) => {
        console.log("Error getting username")
    })
}

const addUser = (username, hash, callback) => {
    const id = Date.now()
    let d = new Date();
    let cDay = d.getDate();
    let cMonth = d.getMonth() + 1;
    let cYear = d.getFullYear();
    let date = cDay + "-" + cMonth + "-" + cYear

    let newUser = {
        'username': username,
        'hash': hash,
        'id': id,
        'joined': date
    }

    dataRef.child('users').child(username).set(newUser, (error) => {
        if (error) {
            console.log('User sign up error')
        } else {
            callback()
            console.log('User sign up succesful')
        }
    })
}

// Function for adding courses
// Will likely be deprecated in the future as support for
// this functionality is still being decided
const addCourse = (title, author, tags, price, course_rating,course_description, reviews, url) => {
    var id = Date.now();

    let newCourse = {
        'id': id,
        'title': titlecourse_id,
        'author': author,
        'tags': tags,
        'price': price,
        'course_rating': course_rating,
        'course_description': course_description,
        'reviews': reviews,
        'url': url
    }

    try {
        courses.child(id).set(newCourse, error => {
            if (error) {
                console.log('Post error')
            } else {
                console.log(id + ' added to db\n')
            }
        })
    } catch(err) {
        console.log(err)
    }
}

// Function for adding review
// Uses the course_id to know which course it's for
const addReview = (course_id, body, author, title, rating, user_id, course_name, callback) => {
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
        'date': date,
        'user_id': user_id,
        'course_name': course_name
    }

    dataRef.child('users').child(author).child('reviews').child(id).set(newReview, (error) => {
        console.log('Added review to user');
    });

    courses.child(course_id).child('reviews').child(id).set(newReview, callback)
}

const getReview = (course_id, callback) => {
    courses.child(course_id).once('value', callback, (error) => {
        console.log('Error fetching reviews\n')
    })
}

const getCourses = (callback) => {
    courses.once('value', callback, (error) => {
        console.log('Error fetching courses\n')
    })
}

const getUserInfo = (user_id, callback) => {
    console.log('Searching...', user_id)
    dataRef.child('users').orderByChild("id").equalTo(Number(user_id)).once("value", callback, (error) => {
        console.log(error)
    });
}

const updateCourse = (course_id, new_rating) => {
    courses.child(course_id).child('course_rating').set(new_rating, (error) => {
        if (error) {
            console.log('Error updating course')
        } else {
            console.log('Updated course\n')
        }
    })
}

const saveCourse = (user_name, course_id, course_title, callback) => {
    dataRef.child('users').child(user_name).child('saved_courses').child(course_id).set(course_title, callback);
}

const checkSavedCourse = (user_name, course_id, callback) => {
    dataRef.child('users').child(user_name).child('saved_courses').child(course_id).once('value', callback, error => {
        console.log(error)
    })
}

// Root domain, this won't be used because this is an api
app.get('/', (req, res) => {
    console.log('User connected')
    res.send('hello world')
})

// Recieving requests to add a course, currently adds
// with static data
app.get('/api/addcourse', (req, res) => {
    console.log('Attempting to add course')
    addCourse('test', 'test', ['test', 'test'], 50, 95, {}, 'https://www.course.com')
    res.send('Course Added')
})

// Recieving requests to post a new review
app.post('/api/postreview', (req, res) => {
    console.log('Attempting to add review')
    addReview(req.body.course_id, req.body.body, req.body.author, req.body.title, req.body.rating, req.body.user_id, req.body.course_name, (error) => {
        if (error) {
            console.log('Post error')
        } else {
            console.log('Post Succesful!')
            res.sendStatus(200)
        }
    })
})

// Recieving request to update course's data
app.post('/api/updatecourse', (req, res) => {
    console.log('Attempting to update course')
    updateCourse(req.body.course_id, req.body.new_rating)
    res.sendStatus(200)
})

// Recieving request for fetching a singular course's reviews
app.get('/api/fetchreviews/:id', (req, res) => {
    const course_id = req.params.id
    getReview(course_id, (snapshot) => {
        res.send(snapshot.val())
    })
})

// Recieving request for fetching all courses
app.get('/api/getcourses', (req, res) => {
    console.log('Attempting to get courses')
    getCourses((snapshot) => {
        console.log('Fetched courses')
        res.send(snapshot.val())
        return snapshot.val()
    })
})

app.get('/checkuser/:username', (req, res) => {
    console.log('Checking for username')
    checkUser(req.params.username, (snapshot) => {
        if (snapshot.exists()) {
            console.log('User exists')
            res.status(200).send(true)
        } else {
            console.log('User does not exist')
            res.status(200).send(false)
        }
    })
})

app.post('/signup', (req, res) => {
    addUser(req.body.username, req.body.hash, (snapshot) => {
        console.log('Added user: ' + req.body.username)
        res.sendStatus(200)
    })
})

app.post('/login', (req, res) => {
    console.log('User: ' + req.body.username + ' attempting to login')
    login(req.body.username, req.body.hash, (snapshot) => {
        if (snapshot.exists()) {
            if (req.body.hash === snapshot.val().hash) {
                console.log('Login succesful...')
                res.status(200).json({'id': snapshot.val().id, 'username': snapshot.val().username})
            } else {
                console.log('Bad login')
                res.status(500).send('Bad login')
            }
        }
        else {
            console.log('User doesn\'t exist')
            res.status(500).send('User doesn\'t exist')
        }
    })
})

app.get('/getuserinfo/:user_id', (req, res) => {
    console.log('Getting user info')
    getUserInfo(req.params.user_id, (snapshot) => {
        if (snapshot.exists()) {
            console.log('Success')
            const data = snapshot.val()
            const key = Object.keys(data)[0]
            res.status(200).json(data[key]);
        } else {
            console.log('User: ' + req.params.user_id + ' does not exist')
            res.status(500).send('User does not exist')
        }
    })
})

app.post('/savecourse', (req, res) => {
    console.log('Adding course to user')
    console.log(req.body.user_name, req.body.course_id, req.body.course_name)
    saveCourse(req.body.user_name, req.body.course_id, req.body.course_name, error => {
        if (error) {
            console.log(error)
        } else {
            console.log('Success')
        }
    });
})

app.post('/checksavedcourse', (req, res) => {
    console.log('Checking saved courses')
    console.log(req.body.user_name, req.body.course_id)
    checkSavedCourse(req.body.user_name, req.body.course_id, (snapshot) => {
        if (snapshot.exists()) {
            console.log('Course Saved')
            res.status(200).send(true)
        } else {
            res.status(200).send(false)
        }
    })
})

console.log('Listening on: localhost:' + PORT)
app.listen(PORT)







