const AdminModels = require('../../models/electiva/AdminModels');

async function listarAdmin(req,res){
    res.render('electivacomple/view_admin');
}

async function crearAdmin(req,res){
    res.render('electivacomple/view_admin');
}

async function modificarAdmin(req,res){
    res.render('electivacomple/view_admin');
}

async function eliminarAdmin(req,res){
    res.render('electivacomple/view_admin');
}

module.exports={
    listarAdmin,
    crearAdmin,
    modificarAdmin,
    eliminarAdmin
}
