require('./photoModel');


const user = require('./usersController');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/'});
const passport = require('passport');
const fs = require('fs');
const Photo = require('mongoose').model("Photo");
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

require('../local');



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
			  let image = new Photo({"username":req.session.username , "photo":result.url});
			  image.save(function(err){
			  	if(err){
			  		console.log(err);
			  		res.redirect('/edit');
			  	}
			  	else{
			  		console.log(image);
			  		res.redirect('/');
			  	}

			  })
			}); 
		}
	});

	/*app.post('/download',(req,res) =>{

		download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
		  console.log('done');
		});
	})*/

	app.get('/signin',user.renderSignIn);
	
	app.post('/signin', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/signin',
                                   failureFlash: true })
	);
};