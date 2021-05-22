const express = require('express');
const router= express.Router();
const FacebookController = require('../../controllers/facebook/FacebookController');

router.get('/Facebook/:id_usuario/:id_post',FacebookController.consultarUsuarios);

module.exports= router;