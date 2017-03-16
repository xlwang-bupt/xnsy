var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');
var newsUpload = require('./routes/newsUpload');
var page1 = require('./routes/1');
var page2 = require('./routes/2');
var page3 = require('./routes/3');
var page4 = require('./routes/4');
var page5 = require('./routes/5');
var page6 = require('./routes/6');
var page7 = require('./routes/7');
var page8 = require('./routes/8');
var page9 = require('./routes/9');
var page10 = require('./routes/10');
var page11= require('./routes/11');
var newsList = require('./routes/newsList');
var news = require('./routes/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/upload', upload);
app.use('/newsUpload', newsUpload);
app.use('/1', page1);
app.use('/2', page2);
app.use('/3', page3);
app.use('/4', page4);
app.use('/5', page5);
app.use('/6', page6);
app.use('/7', page7);
app.use('/8', page8);
app.use('/9', page9);
app.use('/10', page10);
app.use('/11', page11);
app.use('/newsList', newsList);
app.use('/news', news);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
