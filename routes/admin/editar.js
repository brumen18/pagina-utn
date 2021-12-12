    var express=require('express');
    var router=express.Router();
    var tisys=require('./../../models/tisys');
    var articulo=require('./articulo');


    router.get('/', async(req, res, next)=>{
        var id=articulo.id;
        var titulo=articulo.titulo;
        var cuerpo=articulo.cuerpo;
        res.render('admin/editar', {
            isEditar: true,
            layout: 'admin/layout',
            id,
            titulo,
            cuerpo,
        });
    });

    router.post('/', async(req, res, next)=>{
        try{
            var id=articulo.id;
            var titulo=articulo.titulo;
            var cuerpo=articulo.cuerpo;
            await tisys.actualizarTI(id, titulo, cuerpo);
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