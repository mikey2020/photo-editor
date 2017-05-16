const user = require('../controllers/usersController');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/' });
const passport = require('passport');
require('../../config/strategies/local');

module.exports = (app) => {
	app.get('/signup',user.renderSignUp);
	app.post('/signup',user.signUp);
	app.get('/edit',user.renderEdit);
	app.post('/upload',uploads.any(),function(req,res){
		if(req.files){
			res.render('edit',{
				image: 'uploads/' + req.files.filename
			})
		}
	});
	app.get('/signin',user.renderSignIn);
	
	app.post('/signin', 
		passport.authenticate('local',{ successRedirect: '/',
                                   failureRedirect: '/signin',
                                   failureFlash: true })
	);
};