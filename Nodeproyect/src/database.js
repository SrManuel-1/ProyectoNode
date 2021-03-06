const mysql=require('mysql');
const {promisify}=require('util');
const {database}=require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{

    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){ //Se pierde la conexion
            console.error('DATABASE CONNECTION WAS CLOSE');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){//Si se envia muchas peticiones
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){//SI el resultado de la peticion fue rechazada
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if(connection) connection.release();
    console.log('En linea exitosamente!');
    return;
});
pool.query=promisify(pool.query);
module.exports=pool;