const express = require('express');
const router= express.Router();
const InstagramController = require('../../controllers/instagram/InstagramController');

router.get('/VistaInstagram/:id_usuarios',InstagramController.consultarUsuarios);
router.get('/like/:id_user',InstagramController.like);

module.exports= router;