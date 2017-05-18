require('../models/userModel');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
<<<<<<< HEAD
const path = require('path');
=======

const getErrorMessage = function(err) {  
  let message = '';
  if (err.code) {    
    switch (err.code) {      
      case 11000:      
      case 11001:        
      message = 'Username already exists';        
      break;      
      default:       
      message = 'Something went wrong';    
    }  
  } 
  else {    
    for (var errName in err.errors) {      
      if (err.errors[errName].message) 
        message = err.errors[errName]. message;    
    }  
  }
  return message; 
};

>>>>>>> development

exports.renderSignUp = (req,res) => {
	res.render('signup',{
	});
}

exports.signUp = (req,res) => {
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
			res.redirect('/login');
		}
	})
}

exports.renderEdit = (req,res) => {
<<<<<<< HEAD
	res.render('edit',{
		image: ""
	});
}


=======

exports.upload = (req,res) => {
 
}
>>>>>>> development

exports.renderSignIn = (req,res) => {
	if(!req.user){
		res.render('signin',{
			messages: req.flash('error') 
		});
	}

	else{
		res.redirect('/');
	}

	
}


