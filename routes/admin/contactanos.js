var express=require('express');
    var router=express.Router();
    var contacto=require('./../../models/contacto');

    router.get('/', async(req, res, next)=>{
        var datosContacto=await contacto.ObtenerContacto();
        module.exports.datosContacto=datosContacto;
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

            router.get('/editarcontacto/:id', async(req, res, next)=>{
                var id=req.params.id;
                module.exports.id=id;
                res.redirect('/admin/editarcontacto');
            });

    module.exports=router;