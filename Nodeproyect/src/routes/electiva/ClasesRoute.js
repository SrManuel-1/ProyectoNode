const express = require('express');
const router= express.Router();
const ClasesController = require('../../controllers/cuartosemes/ClasesController');

//ruta que conecta con el controlodor, ejemplo AlumnosContorller
router.get('/ClasesListar',ClasesController.listarClases);
router.get('/ClasesCrear',ClasesController.crearClases);
router.get('/ClasesModificar',ClasesController.modificarClases);
router.get('/ClasesEliminar',ClasesController.eliminarClases);

module.exports= router;