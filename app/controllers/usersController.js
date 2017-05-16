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

exports.addUser = (req,res) => {
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

}
