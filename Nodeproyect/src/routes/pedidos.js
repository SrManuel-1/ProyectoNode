const express = require('express');
const router= express.Router();

router.get('/consultar',async(req,res)=>{
    //res.send('consulta');
    res.render('vistasmenu/pedidos');
});

module.exports= router;