const mongoose = require('mongoose');
const config = require('./config');

module.exports = function(){
	const db = config.db ;
	require('../app/models/userModel.js');
	return mongoose.connect(db);
};