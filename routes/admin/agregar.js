var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');


    router.get('/', async function (req, res, next) {
        res.render('admin/agregar', {
            isAgregar: true,
            layout: 'admin/layout',
            message: 'El artículo se ha insertado correctamente.',
        });
            });

            router.post('/', async function (req, res, next){
                try{
                    console.log(req.body);
                    var titulo=req.body.titulo;
                    var cuerpo=req.body.cuerpo;
                    await tisys.insertarTema(titulo, cuerpo);
                    console.log('hola');
                    } catch(error){
                        console.log(error);
                    }
            
                                  });

            module.exports=router;
