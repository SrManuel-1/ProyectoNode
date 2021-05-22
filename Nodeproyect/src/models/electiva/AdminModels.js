const pool = require('../../database');

module.exports= function(){

    async function installAdmin(){
        let query = 'select * from admin'
    }

    async function createAdmin(){
        
    }

    async function modifyAdmin(){
        
    }

    async function eliminateAdmin(){
        
    }

    return{
        installAdmin,
        createAdmin,
        modifyAdmin,
        eliminateAdmin
    }
}