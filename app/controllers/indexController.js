exports.render = (req,res) => {
	if(req.user){
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