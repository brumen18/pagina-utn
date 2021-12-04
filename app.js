var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
  var session=require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactanosRouter = require('./routes/contactanos'); // contactanos.js
var historiaRouter = require('./routes/historia'); // historia.js
var quienessomosRouter = require('./routes/quienessomos'); // quienessomos.js
var serviciosRouter = require('./routes/servicios'); // servicios.js
var temasinteresRouter = require('./routes/temasinteres'); // temasinteres.js
var tecnoambientalRouter = require('./routes/tecnoambiental'); // tecnoambiental.js
var tecnologiacontabilidadRouter = require('./routes/tecnologiacontabilidad'); // tecnologiacontabilidad.js
  var loginRouter=require('./routes/admin/login') // admin/login.js
  var tibRouter=require('./routes/admin/tib') // tib.js





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
      saveUninitialized: false,
  }));
  


  secured = async(req,res,next) =>{
        try{
          if (req.session.id_usuario){
            next();
          }else{
            res.redirect('/admin/login');
          }
        }catch(error){
          console.log(error);
        }
      }
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contactanos', secured, contactanosRouter);
app.use('/historia', historiaRouter);
app.use('/quienessomos', quienessomosRouter);
app.use('/servicios', serviciosRouter);
app.use('/temasinteres', temasinteresRouter);
app.use('/tecnoambiental', tecnoambientalRouter);
app.use('/tecnologiacontabilidad', tecnologiacontabilidadRouter);
  app.use('/admin/login', loginRouter);
  app.use('/admin/tib', tibRouter);

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