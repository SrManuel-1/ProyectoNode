const pool = require('../../database');

module.exports=function(){

    async function consultUsuarios(datos){
        let query = 'SELECT usu.nombre, post.text_post FROM usuarios usu, post WHERE usu.id_usuario= post.id_usuario AND usu.id_usuario =? AND post.id_post =?;';
        return await pool.query(query,datos);
    }

    async function consultComentario(datos){
        let query = 'select * from post where id_post =?';
        return await pool.query(query,datos);
    }    

    async function insertLike(datos){
        let query = 'insert into like set ?';
        return await pool.query(query,datos);
    } 

    async function insertComentario(datos){
        let query = 'insert into post set ?';
        return await pool.query(query,datos);
    } 

    return{
        consultUsuarios,
        consultComentario,
        insertLike,
        insertComentario,
    }
}