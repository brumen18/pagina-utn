var express=require('express');
    var router=express.Router();
    var tib=require('./tib');
    var tisys=require('./../../models/tisys');


    router.get('/', async function (req, res, next) {
        // console.log(texto)
 var texto=tib.texto;
        res.render('admin/articulo', {
            isArticulo: true,
            layout: 'admin/layout',
texto
        });
            });

            router.get('/eliminar/:id', async(req, res, next)=>{
                var id=req.params.id;
                await tisys.eliminarTema(id);
                res.redirect('/admin/tib');
            });

            router.get('/editar/:id/:titulo/:cuerpo', async(req, res, next)=>{
                var id=req.params.id;
                var titulo=req.params.titulo;
                var cuerpo=req.params.cuerpo;
               modules.exports.id=id;
                module.exports.titulo=titulo;
                module.exports.cuerpo=cuerpo;
                //res.redirect('/admin/editar');
            });

            module.exports=router;
