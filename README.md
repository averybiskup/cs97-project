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
js-search  
- for the search bar implementation  
  
axios  
- for getting/posting data to the server  
  
firebase-admin  
- for authentication to database  
  
react-dom-router  
- for routing components  
  
react  
- should be self explanatory  

js-sha256  
- for creating the sha hash for passwords  

react-star-ratings  
- for displaying stars  


## Code style
Object models:  
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
