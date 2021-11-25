var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('tecnologiacontabilidad',{
        isTecnologiacontabilidad:true
    }); // tecnologiacontabilidad.hbs 
});

module.exports = router;
