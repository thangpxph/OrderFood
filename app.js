var createError = require('http-errors');
var hbs = require('express-handlebars')
var express = require('express');
var path = require('path');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

module.exports = app;
