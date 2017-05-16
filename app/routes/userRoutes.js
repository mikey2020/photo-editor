const user = require('../controllers/usersController');
const multer = require('multer');
const uploads = multer({ dest: 'uploads/' });

module.exports = (app) => {
	app.get('/signup',user.renderSignUp);
	app.post('/signup',user.addUser);
	app.get('/edit',user.renderEdit);
	app.post('/upload',uploads.single("file"),user.upload);
};