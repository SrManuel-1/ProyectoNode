const express= require('express');
const morgan= require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');

//inicio
const app=express();

//configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views' ));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//rutas complementaria 2021
app.use('/ejercicioUno',require('./routes/complementaria'));
app.use('/home',require('./routes/home'));
app.use('/pedidos',require('./routes/pedidos'));
app.use('/productos',require('./routes/productos'));
app.use('/reportes',require('./routes/reportes'));
app.use('/roles',require('./routes/roles'));
app.use('/usuarios',require('./routes/usuarios'));

//rutas parcial
app.use('/menu',require('./routes/routesparcial/inicio'));
app.use('/clientes',require('./routes/routesparcial/clientes'));
app.use('/servicios',require('./routes/routesparcial/servicios'));
app.use('/ventas',require('./routes/routesparcial/ventas'));

//clase18
app.use('/formacion',require('./routes/electiva/CuartoSemestre'));
app.use('/admin',require('./routes/electiva/AdminRoute'));
app.use('/class',require('./routes/electiva/ClasesRoute'));
app.use('/roles',require('./routes/electiva/RolesRoute'));

//Quiz
app.use('/consulta',require('./routes/quiz/UsuariosRouter'));

//Instagram
app.use('/instagram',require('./routes/instagram/instagram'))

//Facebook
app.use('/facebook',require('./routes/facebook/facebook'))


//public
app.use(express.static(path.join(__dirname,'public')));

//inicia el servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});