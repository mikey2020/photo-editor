const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const PhotoSchema = new Schema({

	username: String,
	photo: String
});


module.exports = mongoose.model("Photo",PhotoSchema);


