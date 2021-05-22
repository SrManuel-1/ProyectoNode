const UsuariosModels = require('../models/UsuariosModels');

async function consultarUsuarios(req,res){

    const data = [
        req.params.id_usuarios,
    ]

    const result_usuarios = await UsuariosModels().consultUsuarios(data);
    //console.log(result_usuarios);
    res.render('quiz/view_usuarios',{result_usuarios});
}

module.exports={
    consultarUsuarios
}