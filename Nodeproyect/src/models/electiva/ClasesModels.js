const pool = require('../../database');

module.exports= function(){

    async function installClases(){
        let query = 'select * from clases'
    }

    async function createClases(){
        
    }

    async function modifyClases(){
        
    }

    async function eliminateClases(){
        
    }

    return{
        installClases,
        createClases,
        modifyClases,
        eliminateClases
    }
}