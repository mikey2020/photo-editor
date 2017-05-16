process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//require('./config/express')(app);
const express = require('./config/express');
const mongoose = require('./config/mongoose');
const passport = require('./config/passport')

const app = express();
const db = mongoose();
const pass = passport();

let port = 3000;

app.listen(port);


module.exports = app;

console.log("Server listening at port " + port);
