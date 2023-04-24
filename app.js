var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let doctorsRouter = require('./routes/doctors');
let patientsRouter = require('./routes/patients');
let testRouter = require('./routes/test')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/doctors',doctorsRouter);
app.use('/patients', patientsRouter);
app.use('/test', testRouter);

module.exports = app;

