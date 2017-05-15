const express = require('express');

const app = new express();

const port = 3000;

app.use('/',function(req,res){
	res.send("hello am using express");
});


app.listen(port);
console.log("Server listening at port " + port);

module.exports = app;