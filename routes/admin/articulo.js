var express=require('express');
    var router=express.Router();
    var tib=require('./tib');


    router.get('/', async function (req, res, next) {
        // console.log(texto)
 var texto=tib.texto;
        res.render('admin/articulo', {
            layout: 'admin/layout',
texto
        });
            });



            module.exports=router;
