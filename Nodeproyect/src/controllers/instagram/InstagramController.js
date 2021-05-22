const InstagramModels = require('../../models/instagram/InstagramModels');

async function consultarUsuarios(req,res){
    const data = [
        req.params.id_usuarios,
    ]
    const result_usuarios = await InstagramModels().consultUsuarios(data);
    const result_comentario = await InstagramModels().consultComentario(data);
    res.render('instagram/view_instagram',{result_usuarios,result_comentario});
}

async function like(req,res){
    const data = [
        req.params.id_user,
    ]
    const result_usuarios = await InstagramModels().insertLike(data);
    res.redirect('/instagram/like',{result_usuarios});
}

module.exports={
    consultarUsuarios,
    like
}