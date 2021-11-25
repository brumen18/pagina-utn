var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('tecnoambiental',{
        isTecnoambiental:true
    }); // tecnoambiental.hbs 
});

module.exports = router;
