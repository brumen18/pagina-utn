    var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');
    var articulo=require('./articulo');
    var tib=require('./tib');


    router.get('/', async(req, res, next)=>{
        var id=articulo.id;
      
        var texto=tib.texto;
        res.render('admin/editar', {
            isEditar: true,
            layout: 'admin/layout',
            id,
            texto,
        });
    });

    router.post('/', async(req, res, next)=>{
        try{
            var id=articulo.id;
            var titulo=req.body.titulo;
            var cuerpo=req.body.cuerpo;
            await tisys.actualizarTI(titulo, cuerpo, id);
            res.render('admin/editar', {
                        isEditado: true,
        });
    }catch(error){
        console.log(error);
        res.render('admin/editar', {
        isErrored: true,
    });
}
});
    module.exports=router;