const RolesModels = require('../../models/electiva/RolesModels');

async function listarRoles(req,res){
    const result_roles = await RolesModels().installRoles();
    //console.log(result_roles);
    res.render('electivacomple/view_roles',{result_roles});
}
/*
async function listarRolesApi(req,res){
    const result_roles = await RolesModels().installRoles();
    req.status(200).json(result_roles)
}*/

async function crearRoles(req,res){
    const data = req.body;
    await RolesModels().createRoles(data);
    res.redirect('/roles/rolesListar');
}
/*
async function crearRolesApi(req,res){
    const data = req.body;
    req.status(200).json({
        success:1,
        message:"Agregado con Exito"
    })
}*/

async function eliminarRoles(req,res){
    const data = req.params.id;
    console.log(data)

    await RolesModels().eliminateRoles(data);
    res.redirect('/roles/rolesListar')
}
/*
async function eliminarRolesApi(req,res){
    const data = req.parans.id;
    await RolesModels().eliminateRoles(data);
    req.status(200).json({
        success:1,
        message:"Agregado con Exito"
    })
}*/

async function modificarRoles(req,res){

    const data = [
        req.body.nombre,
        req.body.codigo,
        req.body.nivel,
        req.params.id,
    ]

    await RolesModels().modifyRoles(data);
    res.redirect('/roles/rolesListar')
}
/*
async function modificarRolesApi(req,res){

    const data = [
        req.body.nombre,
        req.body.nivel,
        req.body.codigo,
        req.parans.id,
    ]

    await RolesModels().modifyRoles(data);
    req.status(200).json({
        success:1,
        message:"Modificado con Exito"
    })
}*/

module.exports={
    listarRoles,
    crearRoles,
    eliminarRoles,
    modificarRoles,
    //listarRolesApi,
    //crearRolesApi,
    //eliminarRolesApi,
    //modificarRolesApi
}