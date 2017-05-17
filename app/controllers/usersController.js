require('../models/userModel');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

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
	//console.log(req.user.username);
	//if(req.user){
	if(req.session.username){
		res.render('edit',{
			image: ""
		});
	}
	
}

exports.upload = (req,res) => {
 
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
