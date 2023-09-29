// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import { default as express } from 'express';
import { default as hbs } from 'hbs';
import * as path from 'path';
// import * as favicon from 'serve-favicon';
import { default as  logger } from 'morgan';
import { default as cookieParser } from 'cookie-parser';
import { default as bodyParser } from 'body-parser';
import * as http from 'http';
import { approotdir } from './approotdir.mjs';
import { appendFile } from 'fs';
const __dirname = approotdir;
import {
  normalizePort, onError, onListening, handle404, basicErrorHandler
} from './appsupport.mjs'

import { router as indexRouter } from './routes/index.mjs';
// import { router as notesRouter } from './routes/notes.mjs';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

export const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router functions lists
app.use('/', indexRouter);

// error handlers
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
