const fs = require('fs');
const mongoose = require('mongoose');
const schema = mongoose.Schema ;
const path = require('path');
const Grid = require('gridfs-stream');

mongoose.connect('mongodb://localhost:27017/photo-editor');
const conn = mongoose.connection;
const imagePath = path.join(__dirname, '../public/images/image.jpg');


Grid.mongo = mongoose.mongo;

conn.once('open',function(){
	console.log('connection open');
	let gfs = Grid(conn.db);

	let writestream = gfs.createWriteStream({
		filename: "big-sean.jpg"
	});

	writestream.on('close',function(file){
		console.log(file.filename + "Written to DB");
	})
})
