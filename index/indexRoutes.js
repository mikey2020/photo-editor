const index = require('./indexController');

module.exports = (app) => {
	app.get('/',index.render);
}