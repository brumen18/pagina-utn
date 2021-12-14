    var express=require('express');
    var router=express.Router();
    var temasinteres=require('./temasinteres');

    router.get('/', async(req, res, next)=>{
        var texto=temasinteres.texto;
        res.render('articulo', {
            isArticulo: true,
            texto
        });
    });

    module.exports=router;