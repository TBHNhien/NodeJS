var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var PORT = 3000;

try {
    mongoose.connect('mongodb://localhost:27017/shopping');
    console.log('Connected to MongoDB Successfully !!');
} catch (error) {
    console.log('Failed to Connect to MongoDB !!');
}

// Sử dụng expressHbs.create() để tạo đối tượng Handlebars engine
var hbs = expressHbs.create({ defaultLayout: 'layout', extname: '.hbs' });
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

module.exports = app;
