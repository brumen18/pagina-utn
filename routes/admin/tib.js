var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');


    router.get('/', async function (req, res, next) {
        var temas=await tisys.ObtenerTI();
        res.render('admin/tib', {
            isTib: true,
            layout: 'admin/layout',
            temas
        }); // admin/tib.hbs
    });

    router.get('/articulo/:id', async (req, res, next)=>{
        try{
        var id=req.params.id;
        var texto= await tisys.ObtenerTI1(id);
        module.exports.texto=texto;
         res.redirect('/admin/articulo');
        console.log('holaaaa');

        }catch(error) {
            console.log(error);
        }
        });
        

    module.exports=router;