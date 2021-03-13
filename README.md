# CS97 Project- *CourseMe* 
**Description:**
For the project we decided on a website application where users can discover 
computer science courses that are applicable to the field they want to learn more about. 
Users who create an account can save, add, and rate courses, as well as leave reviews.

## Demo
**Login and Sign Up**

* ![](https://i.imgur.com/cBH4hlu.gif)

**Course Search and Course View**

* ![](https://i.imgur.com/0I0JrV2.gif)

**Adding Reviews and Saving Courses**

* ![](https://i.imgur.com/BvTwm1z.gif)

**Profile View and Removing Courses**

* ![](https://i.imgur.com/v8rogjZ.gif)

## Tech/Framework
* **Node.js**
* **React**

Package | Usage  
js-search - https://github.com/bvaughn/js-search  
- for the search bar implementation  
  
axios - https://github.com/axios/axios  
- for getting/posting data to the server  
  
firebase-admin - https://github.com/firebase/firebase-admin-node  
- for authentication to database  
  
react-dom-router - https://github.com/ReactTraining/react-router  
- for routing components  
  
react - https://github.com/facebook/react  
- should be self explanatory  

js-sha256 - https://github.com/emn178/js-sha256  
- for creating the sha hash for passwords  

react-star-ratings - https://github.com/ekeric13/react-star-ratings  
- for displaying stars  

create-react-app - https://github.com/facebook/create-react-app  
- boiler plate

gh-pages - https://github.com/tschaub/gh-pages  
- for building the static cite

## Object Models

Course: {  
- id: int  
- title: string  
- author: string  
- tags: array of strings  
- price: int  
- course\_rating: int  
- reviews: object of objects  
- link: string  
}

Review: {  
- id: int  
- title: string  
- author: string  
- course\_id: int  
- body: string  
- rating: int  
- date: string  
- course\_name  
}

User: {  
- id: int  
- username: string  
- password: sha256 hash  
- date\_joined: string  
- reviews: object of reviews  
- saved\_courses: object of course names and ids  
}

## Features
* [x] Display dynamic data to the user: display courses 
* [x] Upload data from the client to the back-end: username and password
* [x] Meaningfully search through server-side data: search for courses 
* [x] Rate courses 
* [x] saving courses to profile
* [x] Password strength indicator
* [x] saving reviews left to your profile

## How to use?
**Clone the git repository**

**run the following shell command in the local repository directory**
```javascript
npm install
```
**run the following shell command in the server subdirectory of the local repository directory to start the server**
```javascript
node server.js
```
**run the shell command in the local repository directory to start the client**
```javascript
npm start
```
**A browser will open to view the local instance of the application**

**NOTE: you need to add the secret.json in the server subdirectory which is obtainable by the repository owner**

## Contributors  
Harshil Bhullar,  
Dorian Jimenez,  
Luis Frias,  
Avery Biskup,  
Ping-Yang Gao  
