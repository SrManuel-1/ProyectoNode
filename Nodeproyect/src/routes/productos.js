const express = require('express');
const router= express.Router();

router.get('/consultar',async(req,res)=>{
    //res.send('consultar');
    res.render('vistasmenu/productos');
});

module.exports= router;