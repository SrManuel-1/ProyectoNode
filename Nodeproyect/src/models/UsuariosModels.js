const pool = require('../database');

module.exports=function(){

    async function consultUsuarios(datos){
        let query = 'select * from usuarios where id_usuarios =?';
        return await pool.query(query,datos);
    }

    return{
        consultUsuarios
    }
}