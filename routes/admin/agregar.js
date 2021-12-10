var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');


    router.get('/', async function (req, res, next) {
        res.render('admin/agregar', {
            isAgregar: true,
            layout: 'admin/layout',
        });
            });

            router.post('/', async function (req, res, next){
                try{
                    var titulo=req.body.titulo;
                    var cuerpo=req.body.cuerpo;
                    await tisys.insertarTema(titulo, cuerpo);
                    res.render('admin/agregar', {
                        isAgregado: true,
                    });
                    } catch(error){
                        console.log(error);
                        res.render('admin/agregar', {
                            isError: true,
                        });
                    }
                                              });

            module.exports=router;
