require('../models/userModel');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');


const validExtensions = ['jpg','png'];
exports.renderSignUp = (req,res) => {
	res.render('signup',{
	});
}

exports.signUp = (req,res) => {
	let user = new User(req.body);

	user.save(function(err){
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
		}
	})
}

exports.renderEdit = (req,res) => {
	res.render('edit',{});
}

exports.upload = (req,res) => {
  console.log(req.file);

  if(req.file){
  	console.log("File Uploaded");
  }
}

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
