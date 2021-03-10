# CS97 Project- *CourseMe* 
**Description:**
For the project we decided on a website application where users can discover 
computer science courses that are applicable to the fied they want to learn more about. 
Users who create an account can save, add, and rate courses.  

## Demo
## Tech/Framework
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
* [x] Add courses  
* [x] saving courses
* [x] Password strength indicator
## Installation
## API Reference
## How to use?
## Contributors  
Harshil Bhullar,  
Dorian Jimenez,  
Luis Frias,  
Avery Biskup,  
Ping-Yang Gao  
