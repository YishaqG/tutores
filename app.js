var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( cookieParser() );
app.use( require('express-session')({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: false
          }) );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( express.static(path.join(__dirname, 'public')) );

app.use('/', indexRouter);
app.use('/user', usersRouter);

// passport config
var User = require('./models/User');
passport.use( new LocalStrategy(User.authenticate()) );
passport.serializeUser( User.serializeUser() );
passport.deserializeUser( User.deserializeUser() );

// mongoDB config
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/tutores', { useNewUrlParser: true } );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// var seed = require("./seed");

module.exports = app;
