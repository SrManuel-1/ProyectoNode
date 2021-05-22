const express = require('express');
const router= express.Router();
const UsuariosController = require('../../controllers/UsuariosController');

router.get('/usuariosConsultar/:id_usuarios',UsuariosController.consultarUsuarios);

module.exports= router;