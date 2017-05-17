const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


module.exports = () => {

	let app = express();

	if(process.env.NODE_ENV === "development"){
		app.use(morgan('dev'));
	}

	else if(process.env.NODE_ENV === "production"){
		app.use(compress());
	}

	app.locals.title = "Photo Editor";

	app.use(bodyParser.urlencoded({extended: true}));  
	app.use(bodyParser.json());  
	
	app.use(methodOverride());

	app.use(express.static('./public'));
    
    app.use(session({
	  secret: "Winter is Coming",

	  resave: false,

	  saveUninitialized: true
	}));

	app.use(passport.initialize());

	app.use(passport.session());

    app.use(flash());

	app.set('views', './app/views');  
    app.set('view engine', 'ejs');


 

	require('../app/routes/indexRoutes')(app);
	require('../app/routes/userRoutes')(app);

	return app;

}

