const express = require('express');
const router= express.Router();

router.get('/consultar',async(req,res)=>{
    //res.send('agregado');
    res.render('vistasmenu/reportes');
});

module.exports= router;