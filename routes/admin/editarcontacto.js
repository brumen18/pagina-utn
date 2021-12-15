    var express=require('express');
    var router=express.Router();
    var contacto=require('./../../models/contacto');
    var contactanos=require('./contactanos');

        router.get('/', async(req, res, next)=>{
            var texto=contactanos.datosContacto;
            res.render('admin/editarcontacto', {
                layout: 'admin/layout',
                isEditarcontacto: true,
                texto
            });
        });

            router.post('/', async(req, res, next)=>{
                try{
                var id=contactanos.id;
                var nombre=req.body.nombre;
                var apellidos=req.body.apellidos;
                var correo=req.body.correo;
                var mensaje=req.body.mensaje;
                await contacto.actualizarContacto(nombre, apellidos, correo, mensaje, id);
                res.render('admin/editarcontacto', {
                    isContactoeditado: true,
                });
            }catch(error){
                console.log(error);
                res.render('admin/editarcontacto', {
                    isErrorcontactoeditado: true,
                });
            }
            });

    module.exports=router;