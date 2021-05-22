const express = require('express');
const router= express.Router();
const AlumnosController = require('../../controllers/cuartosemes/AlumnosController');

router.get('/',(req,res)=>{
    res.send('hola');
});

router.get('/primercorte',(req,res)=>{
    res.send('primercorte');
});

router.get('/alumnos',(req,res)=>{
    //direccionar a una vista
    res.render('electivacomple/view_alumnos');
});

//ruta que conecta con el controlodor, ejemplo AlumnosContorller
router.get('/alumnosListar',AlumnosController.listarAlumnos);
router.get('/alumnosCrear',AlumnosController.crearAlumnos);
router.get('/alumnosModificar',AlumnosController.modificarAlumnos);
router.get('/alumnosEliminar',AlumnosController.eliminarAlumnos);

module.exports= router;