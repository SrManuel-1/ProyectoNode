const express = require('express');
const router= express.Router();

router.get('/listar',async(req,res)=>{
    //res.send('oh yeah');
    res.render('ejercicios/ejercicioU');
});
module.exports= router;