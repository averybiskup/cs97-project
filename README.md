Project for CS97  
=====================  
Team Members:  
Harshil Bhullar,  
Dorian Jimenez,  
Luis Frias,  
Avery Biskup,  
Ping-Yang Gao  
====================  
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

====================  
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
}
