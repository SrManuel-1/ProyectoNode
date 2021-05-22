const express = require('express');
const router= express.Router();

router.get('/consultar',async(req,res)=>{
    //res.send('Vista inicial');
    res.render('parcial2/servicios');
});

module.exports= router;