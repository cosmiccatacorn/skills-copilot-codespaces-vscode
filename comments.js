//Create web server
const express = require('express');
const app = express();
//Importing body-parser
const bodyParser = require('body-parser');
//Importing mongoose
const mongoose = require('mongoose');
//Importing models
const Comment = require('./models/comment');
const Campground = require('./models/campground');
const User = require('./models/user');
//Importing passport
const passport = require('passport');
const LocalStrategy = require('passport-local');
//Importing passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
//Importing express-session
const expressSession = require('express-session');
//Importing method-override
const methodOverride = require('method-override');
//Importing connect-flash
const flash = require('connect-flash');
//Importing moment
const moment = require('moment');
//Importing seedDB
const seedDB = require('./seedDB');
//Importing moment
const moment = require('moment');

//Importing routes
const commentRoutes = require('./routes/comments');
const campgroundRoutes = require('./routes/campgrounds');
const indexRoutes = require('./routes/index');

//Creating connection to the database
mongoose.connect('mongodb://localhost/yelp_camp', { useNewUrlParser: true, useUnifiedTopology: true });
//Using body-parser
app.use(bodyParser.urlencoded({extended: true}));
//Using method-override
app.use(methodOverride('_method'));
//Using connect-flash
app.use(flash());
//Using moment
app.locals.moment = moment;
//Using express-session
app.use(expressSession({
    secret: 'This is a secret',
    resave: false,
    saveUninitialized: false
}));
//Using passport
app.use(passport.initialize());
app.use(passport.session());
//Using passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Using seedDB
//seedDB(