const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const db = require('./db');


let app = express();



//app.use(logger('dev'));


app.use(morgan('dev'));

//app.use(compress());

app.locals.title = "Photo Editor";

app.use(bodyParser.urlencoded({extended: true}));  

//app.use(cookieParser());

app.use(bodyParser.json());  
	
app.use(methodOverride());

app.use(express.static('./public'));
    
app.use(session({
	secret: "WinterisComing",

	resave: false,

	saveUninitialized: true

}));

app.use(passport.initialize());

app.use(passport.session());

app.use(flash());


app.set('views', './views');  
app.set('view engine', 'ejs');

require('./user/userRoutes.js')(app);
require('./index/indexRoutes.js')(app);
 
 
	
module.exports = app ;



