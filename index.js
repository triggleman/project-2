require('dotenv').config()

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const userController = require('./controller/user');
// // const showController = require('./controller/show');

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

const auth = require('./services/auth.js');
app.use(auth.passportInstance);
app.use(auth.passportSession);

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/user', require('./controller/user'));
app.use('/app', auth.restrict, require('./controller/gyms'));


app.get('/', (req, res) => {
	console.log('THE HOME PAGE IS WORKING');
    res.render('home/index');
});

app.listen(PORT, () => console.log('Server listening on port', PORT));
