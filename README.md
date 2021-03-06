
###Photo-Editor


This repository contains a simple web photo editor built with NodeJS.

### Development
This application was developed using [ExpressJS](http://expressjs.com/). MongoDB was used for persisting data with [Mongoose](https://mongoosejs.com/) as [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) and jquery for client side

### Installation
* Start up your terminal (or Command Prompt on Windows OS).
* Ensure that you've `node` installed on your PC.
* Clone the repository by entering the command `git clone https://github.com/mikey2020/photo-editor/new/master` in the terminal.
* Navigate to the project folder using `cd photo-editor` on your terminal (or command prompt)
* After cloning, install the application's dependencies with the command `npm install`.
* Create a `.env` file in your root directory as described in `.env.sample` file. Variables such as DB_URL (which must be a mongoDB URL) and PORT are defined in the .env file and it is essential you create this file before running the application.
```
PORT=3000
DB_URL='mongodb://john:doe@localhost:27017/databaseName'
```
* After this, you can then start the server with the command: `npm start`.

### API Documentation
Users can sign up and if they already have one they can sign in to their account

You can use the application by going to https://bc-22-photo-editor.herokuapp.com/



### Author
**Michael Eboagu**
