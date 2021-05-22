const express = require('express');
const router= express.Router();

router.get('/inicio',async(req,res)=>{
    //res.send('Vista inicial');
    res.render('administrador/home');
});

module.exports= router;