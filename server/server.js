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

app.get('/', (req, res) => {
    console.log('User connected')
    res.send('hello world')
})

app.get('/api/:key', (req, res) => {
    console.log('User connected to API')
    res.send(courses)
})

console.log('Listening on: localhost:' + PORT)
app.listen(PORT)
