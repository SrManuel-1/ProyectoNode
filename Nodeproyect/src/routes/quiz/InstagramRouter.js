const express = require('express');
const router= express.Router();
const InstagramController = require('../../controllers/InstagramController');

router.get('/instagramConsultar/:id_comentario',InstagramController.consultarInstagram);

module.exports= router;