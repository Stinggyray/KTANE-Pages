console.log('Loading libraries...');

let express = require('express');
let app = express();

let routes = require('./routes');
let hbs = require('hbs');

hbs.registerHelper('loadcss', function () {
	if(process.env.NODE_ENV === 'production') {
		return 'style.min.css';
	}
	else {
		return 'style.css';
	}
});

hbs.registerHelper('grouped_each', function(every, context, options) {
	let out = "";
	let subcontext = [];
	let i;

	if (context && context.length > 0) {
		for (i = 0; i < context.length; i++) {
			if (i > 0 && i % every === 0) {
				out += options.fn(subcontext);
				subcontext = [];
			}
			subcontext.push(context[i]);
		}
		out += options.fn(subcontext);
	}
	return out;
});

app.set('port', process.env.PORT || 8080);
app.set('trust proxy', true);

console.log('Setting /static/ directory as static file root...');
app.use(express.static('static'));

console.log('Registering router endpoints...');
routes.set(app);

app.set('views', './views');
app.set('view engine', 'hbs');

let listener = app.listen(app.get('port'), function () {
	console.log('Express server started.');
	console.log('--------------------------');
	console.log('Website is now live at http://localhost:' + listener.address().port);
});
