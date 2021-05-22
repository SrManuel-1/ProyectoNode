const pool = require('../../database');

module.exports= function(){

    async function installRoles(){
        let query = 'select * from rol'
        return await pool.query(query);
    }

    async function createRoles(datos){
        let query = 'insert into rol set ?'
        return await pool.query(query,datos);
    }

    async function eliminateRoles(datos){
        let query = 'delete from rol where id_rol= ?'
        return await pool.query(query,datos);
    }

    async function modifyRoles(datos){
        let query = 'update rol set nombre=?, codigo=?, nivel=? where id_rol = ?'
        return await pool.query(query,datos);
    }

    return{
        installRoles,
        createRoles,
        eliminateRoles,
        modifyRoles
    }
}