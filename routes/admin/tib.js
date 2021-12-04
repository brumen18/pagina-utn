var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');


    router.get('/', async function (req, res, next) {
        var temas=await tisys.ObtenerTI();
console.log(temas);
        res.render('admin/tib', {
            temas
        }); // admin/tib.hbs
    });

    module.exports=router;