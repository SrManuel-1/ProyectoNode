const express = require('express');
const router= express.Router();
const AdminController = require('../../controllers/cuartosemes/AdminController');

//ruta que conecta con el controlodor, ejemplo AlumnosContorller
router.get('/adminListar',AdminController.listarAdmin);
router.get('/adminCrear',AdminController.crearAdmin);
router.get('/adminModificar',AdminController.modificarAdmin);
router.get('/adminEliminar',AdminController.eliminarAdmin);

module.exports= router;