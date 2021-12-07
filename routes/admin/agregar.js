var express=require('express');
    var router=express.Router();
    var tib=require('./tib');


    router.get('/', async function (req, res, next) {
        res.render('admin/agregar', {
            isAgregar: true,
            layout: 'admin/layout',
        });
            });



            module.exports=router;
