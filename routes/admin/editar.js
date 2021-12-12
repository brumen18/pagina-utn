    var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');
    var articulo=require('./articulo');


    router.get('/', async(req, res, next)=>{
        res.render('admin/editar', {
            isEditar: true,
            layout: 'admin/layout',

        });
    });

    module.exports=router;