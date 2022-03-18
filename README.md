

# PerScholas / Project 2
* This is project 2, a fullstack Express app, as a student in the PerScholas Program w/ WCC
  
[https://sscoins.herokuapp.com/products](https://sscoins.herokuapp.com/products)
--------------------------------------------

## Application Function:

A virtual store using Express.

This example helps show:
* Interaction between webpages
* Interaction between DB and webpages

This application allows a user to simulate the purchase of an item from a shop that is connected to a database. Not only can the user purchase an item, they can add/edit/or remove items as well.

You can see my **Express Coin Shop** in action here:


<a href="https://youtu.be/QwouF7IhfYE" target="_blank">
    <img src="https://i.imgur.com/Pc3yG9c.png" 
        alt="Video of Express Shop" width="1080" height="720"/>
</a>

Here are a few screenshots of my shop:
1. Main page, a list of goals
![index page](https://i.gyazo.com/e3ed5c7cc7fa4d08317c9dc2d25b022a.png)

1. Creating a goal
![show item page](https://i.gyazo.com/2dfac9112a75ab6f597386d0b453c7f7.png)

1. Viewing one goal and it's habits
![edit page](https://i.gyazo.com/b09009b19c388f66b3a22526929810c9.png)

1. Viewing one goal and it's habits
![new page](https://i.gyazo.com/b49f750ca8d0964986d881075cabb802.png)
--------------------------------------------
## How to Install Sample Express Shop locally:

1. Fork and clone this repository to your machine
2. Change into the new directory
3. Run npm install:
```
npm install
```
4. Create a .env file and setup your DB
  * Example of code below:
```
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@DB_NAME.demfm.mongodb.net/CLUSER_NAME?retryWrites=true&w=majority
PORT=3000
```
5. Open a Terminal and seed the database:
```
node .\seed.js
```
6. Run nodemon
```
nodemon
```
7. Finally, open a browser window, and navigate to [http://localhost:3000/products](http://localhost:3000/products)

You're all set to run this sample shop on your machine.

## Technologies Used for this project:

* HTML5
* CSS3
* Javascript
* Express.js
* Mongoose and MongoDB
* Heroku
