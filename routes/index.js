let basepage = require('./basepage');

module.exports.set = (app) => {
	basepage.set(app);

	console.log("Router endpoints registered.")
}
