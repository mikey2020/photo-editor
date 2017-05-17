const Photo = require('mongoose').model("Photo");

exports.render = (req,res) => {
	if(req.user){
		Photo.find({"username":req.user.username},"photo",function(err,docs){
			if(err){
				console.log(err);
			}
			else{
				console.log(docs);
			}
		})
	    if(req.session.lastVisit){
	    	console.log(req.session.lastVisit);
	    }
	    req.session.lastVisit = new Date();
	    
		req.session.username = req.user.username;
		console.log(req.session.username);
	
		res.render('index',{
			name: req.user.fullname
		});
	}
	else{
		res.redirect('/signin');
	}
	
};