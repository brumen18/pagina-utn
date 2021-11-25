var express=require('express');
var router=express.router();


router.get('/'), function(req, res, next){
    res.render('admin/login',{
    isLogin: true;    
    });
});

router.post('/'), async (req, res, next) =>{
    try{
        var usuario=req.body.usuario;
        var password=req.body.password;
        console.log(req.body);
        var data=await usuariosBD.GetUserYPassword(usuario, password);
        if (data != undefined) {
            res.redirect('/admin/inicio');

        }else{
            res.render('admin/login', {
                error: true;
            });
        }
    } catch(error){
        console.log(error);
    }
});
