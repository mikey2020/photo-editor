//process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//require('./config/express')(app);
const express = require('./config/express');
const mongoose = require('./config/mongoose');
const passport = require('./config/passport');

const app = express();
const db = mongoose();
const pass = passport();

app.set("port",process.env.PORT||3000);

module.exports = app;

console.log("Server listening at port " + 3000);
