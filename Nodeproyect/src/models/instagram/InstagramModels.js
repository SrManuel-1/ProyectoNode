const pool = require('../../database');

module.exports=function(){

    async function consultUsuarios(datos){
        let query = 'select * from usuarios where id_usuario =?';
        return await pool.query(query,datos);
    }

    async function consultComentario(datos){
        let query = 'select * from comentario where id_usuario =?';
        return await pool.query(query,datos);
    }    

    async function insertLike(datos){
        let query = 'insert into like set ?';
        return await pool.query(query,datos);
    } 

    async function insertComentario(datos){
        let query = 'insert into comentario set ?';
        return await pool.query(query,datos);
    } 

    return{
        consultUsuarios,
        consultComentario,
        insertLike,
        insertComentario,
    }
}