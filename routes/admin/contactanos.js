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

    router.get('/eliminar/:id', async (req, res, next)=>{
        var id=req.params.id;
        await contacto.eliminarContacto(id);
        res.redirect('/admin/contactanos');
    });

    module.exports=router;