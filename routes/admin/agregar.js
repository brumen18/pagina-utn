var express=require('express');
var router=express.Router;  
    var tisys=require('./../../models/tisys');

    router.get('/', async function (req, res, next) {
        res.render('admin/agregar', {
            layout: 'admin/layout',
          isAgregar: true

        });
    });

    module.exports=router;