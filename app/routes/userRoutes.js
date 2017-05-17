require('../models/photoModel');
const user = require('../controllers/usersController');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/'});
const passport = require('passport');
const fs = require('fs');
const Image = require('mongoose').model("Image");
const crypto = require('crypto');
const path = require('path');
const cloudinary = require('cloudinary');
const request = require('request');
cloudinary.config({ 
  cloud_name: 'photo-editor', 
  api_key: '169757236964799', 
  api_secret: 'KYDwlwNwlzCc7fcqeCtz0BqEbcQ' 
});

/*cloudinary.uploader.upload("images/image.jpg", function(result) { 
  console.log(result);
});*/


var download = function(uri, filename, callback){
	request.head(uri, function(err, res, body){
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};



require('../../config/strategies/local');

module.exports = (app) => {
	app.get('/signup',user.renderSignUp);
	app.post('/signup',user.signUp);
	app.get('/edit',user.renderEdit);

	app.post('/upload',uploads.single('image'),(req,res) =>{
		if(req.file && req.session.username){
			console.log(req.file.filename);
			fs.renameSync("uploads/"+req.file.filename ,"uploads/"+req.file.originalname);
			cloudinary.uploader.upload("uploads/"+req.file.originalname, function(result){ 
			  console.log(result);
			  let image = new Image(req.session.username,JSON.stringify(result.url));
			  image.save(function(err){
			  	if(err){
			  		console.log(err);
			  	}
			  	else{
			  		res.json(image);
			  	}

			  })
			}); 
		}
	});

	app.post('/download',(req,res) =>{

		download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
		  console.log('done');
		});
	})

	app.get('/signin',user.renderSignIn);
	
	app.post('/signin', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/signin',
                                   failureFlash: true })
	);
};