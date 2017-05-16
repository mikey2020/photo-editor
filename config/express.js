const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');


module.exports = () => {

	let app = express();

	if(process.env.NODE_ENV == "development"){
		app.use(morgan('dev'));
	}

	else if(process.env.NODE_ENV == "production"){
		app.use(compress());
	}

	app.locals.title = "Photo Editor";

	app.use(bodyParser.urlencoded({extended: true}));  
	app.use(bodyParser.json());  
	
	app.use(methodOverride());

	app.set('views', './app/views');  
    app.set('view engine', 'ejs');

    app.use(express.static('./public'));
 

	require('../app/routes/indexRoutes')(app);
	require('../app/routes/userRoutes')(app);

	return app;

}

