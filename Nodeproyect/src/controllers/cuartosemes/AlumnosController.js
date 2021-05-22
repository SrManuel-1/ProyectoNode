const AlumnosModels = require('../../models/electiva/AlumnosModels');

async function listarAlumnos(req,res){
    res.render('electivacomple/view_alumnos');
}

async function crearAlumnos(req,res){
    res.render('electivacomple/view_alumnos');
}

async function modificarAlumnos(req,res){
    res.render('electivacomple/view_alumnos');
}

async function eliminarAlumnos(req,res){
    res.render('electivacomple/view_alumnos');
}

module.exports={
    listarAlumnos,
    crearAlumnos,
    modificarAlumnos,
    eliminarAlumnos
}