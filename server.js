require('dotenv').config();

var app = require('./app');
var passport = require('./passport');
var pass = new passport();
var port = process.env.PORT;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});


/*const express = require('./config/express');
const mongoose = require('./config/mongoose');
const passport = require('./config/passport');

const app = express();
const db = mongoose();
const pass = passport();

app.set("port",process.env.PORT||3000);

module.exports = app;

console.log("Server listening at port " + 3000);*/
