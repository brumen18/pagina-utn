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
  var articulo1Router=require('./routes/articulo'); // articulo al publico.js
   var loginRouter=require('./routes/admin/login') // admin/login.js
  var tibRouter=require('./routes/admin/tib') // tib.js
  var articuloRouter=require('./routes/admin/articulo') // admin/articulo.js
  var agregarRouter=require('./routes/admin/agregar') // admin/agregar.js
  var editarRouter=require('./routes/admin/editar') // admin/editar.js
    var contactanosAdminRouter=require('./routes/admin/contactanos'); // contactanos admin.js
      var editarcontactoRouter=require('./routes/admin/editarcontacto'); // admin/editarcontacto.js




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

      app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
  app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contactanos', contactanosRouter);
app.use('/historia', historiaRouter);
app.use('/quienessomos', quienessomosRouter);
  app.use('/servicios', serviciosRouter);
  app.use('/temasinteres', temasinteresRouter);
      app.use('/articulo', articulo1Router);
  app.use('/admin/login', loginRouter);
  app.use('/admin/tib', secured, tibRouter);
  app.use('/admin/articulo', articuloRouter);
  app.use('/admin/agregar', secured, agregarRouter);
  app.use('/admin/editar', secured, editarRouter);
          app.use('/admin/contactanos', secured,  contactanosAdminRouter);
      app.use('/admin/editarcontacto', secured, editarcontactoRouter);


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
