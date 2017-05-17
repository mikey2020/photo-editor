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

cloudinary.config({ 
  cloud_name: 'photo-editor', 
  api_key: '169757236964799', 
  api_secret: 'KYDwlwNwlzCc7fcqeCtz0BqEbcQ' 
});

/*cloudinary.uploader.upload("images/image.jpg", function(result) { 
  console.log(result);
});*/


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
			  let image = new Image(JSON.stringify(result.url));
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

	app.get('/signin',user.renderSignIn);
	
	app.post('/signin', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/signin',
                                   failureFlash: true })
	);
};