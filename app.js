var createError = require('http-errors');
var express = require('express');
require('dotenv').config;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var handlebars  = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session = require('express-session');
var flash = require('express-flash-notification');
var passport = require("passport");

var app = express();


//for bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//app.use(session({secret: 'camila y sandro', resave:true, saveUninitialized:true}));
//app.use(passport.initialize());
//app.use(passport.session());


// vistas
app.engine('handlebars', handlebars ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(session({
    secret: 'PROYECTO-IV-4A',
    resave: true,
    saveUninitializated: true
}));
app.use(flash(app));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);




var model = require('./model');
model.sequelize.sync().then( ()=> {
    console.log('Se ha conectado a la db');
}).catch(err => {console.log(err, "Hubo un error");});


//agregado

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



module.exports = app;
