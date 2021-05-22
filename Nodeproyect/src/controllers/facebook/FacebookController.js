const FacebookModels = require('../../models/facebook/FacebookModels');

async function consultarUsuarios(req,res){
    const data = [
        req.params.id_usuario,
        req.params.id_post,
    ]
    const result_usuarios = await FacebookModels().consultUsuarios(data);
    //const result_comentario = await FacebookModels().consultComentario(data);
    res.render('facebook/view_facebook',{result_usuarios});
}

async function like(req,res){
    const data = [
        req.params.id_user,
    ]
    const result_usuarios = await FacebookModels().insertLike(data);
    res.redirect('/facebook/like',{result_usuarios});
}

module.exports={
    consultarUsuarios,
    like
}