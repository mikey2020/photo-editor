require('../user/photoModel');
var Photo = require('mongoose').model("Photo");

exports.render = (req,res) => {
	if(req.user){
		Photo.find({"username":req.user.username},"photo",function(err,docs){
			if(err){
				console.log(err);
			}
			else{
				//data = JSON.parse(docs);
				console.log(docs[0].photo);
				if(req.session.lastVisit){
	    			console.log(req.session.lastVisit);
	    		}
			    req.session.lastVisit = new Date();
			    
				req.session.username = req.user.username;
				console.log(req.session.username);
			    
				res.render('index',{
					name: req.user.fullname,
					images: docs
				});
			}
		})
	    
	}
	else{
		res.redirect('/signin');
	}
	
};