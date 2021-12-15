var express=require('express');
    var router=express.Router();
    var contacto=require('./../../models/contacto');

    router.get('/', async(req, res, next)=>{
        var datosContacto=await contacto.ObtenerContacto();
        res.render('admin/contactanos', {
            layout: 'admin/layout',
            isContactanos: true,
            datosContacto
        });
    });


    module.exports=router;