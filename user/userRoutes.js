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
	app.get('/signup',(req,res) => {
		
		res.render('signup',{
		})

	});

	app.post('/signup', (req,res) => {
		let user = new User(req.body);

		user.save(function(err){
			if(err){
				var message = getErrorMessage(err);
				req.flash('error',message);
				res.redirect('/signup');
			}
			else{
				console.log(user);
				var prompt = "Please sign in  here";
				req.flash('info',prompt);
				res.redirect('/signin');
			}
		})

	});

	app.get('/edit',(req,res) => {

		res.render('edit',{
			image: ""
		});
	});


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

	app.get('/signin',(req,res) => {
		if(!req.user){
			res.render('signin',{
				messages: req.flash('error') 
			});
		}

		else{
			res.redirect('/');
		}
	});
	
	app.post('/signin', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/signin',
                                   failureFlash: true })
	);
};