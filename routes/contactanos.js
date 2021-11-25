var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('contactanos', {
        isContactanos: true
    });

 // contactanos.hbs
});
router.post('/', async (req, res, next) => {
    console.log(req.body);
    var nombre = req.body.nombre; //1
    var apellidos = req.body.apellidos; //1
    var correo = req.body.correo; //2
    var mensaje = req.body.mensaje; //3


    var obj = {
        to: 'elagusiglesias1916@gmail.com',
        subject: 'CONSULTA DEL FORMULARIO',
        html: nombre + ' se ha comunicado mediante el formulario de la página. Su mensaje es el siguiente: .<br/>' + mensaje + '.<br/>  Su dirección de correo electrónico es: ' + correo
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    var info = await transport.sendMail(obj);

    res.render('contactanos', {
        message: 'Mensaje enviado correctamente'
        
    });
});

module.exports = router;
