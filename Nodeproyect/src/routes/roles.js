const express = require('express');
const router= express.Router();

router.get('/consultar',async(req,res)=>{
    //res.send('consultado');
    res.render('vistasmenu/roles');
});

module.exports= router;