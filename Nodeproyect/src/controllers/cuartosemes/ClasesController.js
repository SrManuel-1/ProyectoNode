const ClasesModels = require('../../models/electiva/ClasesModels');

async function listarClases(req,res){
    res.render('electivacomple/view_clases');
}

async function crearClases(req,res){
    res.render('electivacomple/view_clases');
}

async function modificarClases(req,res){
    res.render('electivacomple/view_clases');
}

async function eliminarClases(req,res){
    res.render('electivacomple/view_clases');
}

module.exports={
    listarClases,
    crearClases,
    modificarClases,
    eliminarClases
}