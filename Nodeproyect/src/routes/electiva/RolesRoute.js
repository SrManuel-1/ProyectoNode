const express = require('express');
const router= express.Router();
const RolesController = require('../../controllers/cuartosemes/RolesController');

//ruta que conecta con el controlodor, ejemplo AlumnosContorller
router.get('/RolesListar',RolesController.listarRoles);
router.post('/RolesCrear',RolesController.crearRoles);
router.get('/RolesEliminar/:id',RolesController.eliminarRoles);
router.post('/RolesModificar/:id',RolesController.modificarRoles);


//ruta para cargar postman
//router.get('/api/RolesListar',RolesController.listarRolesApi);
//router.post('/api/RolesCrear',RolesController.crearRolesApi);
//router.delete('/api/RolesEliminar/:id',RolesController.eliminarRolesApi);
//router.put('/api/RolesModificar/:id',RolesController.modificarRolesApi);

module.exports= router;