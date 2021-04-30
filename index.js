const express = require( 'express' )
const cors = require( 'cors' );
const { dbConnection } = require( "./db/config" );
require( 'dotenv' ).config();

//console.log(process.env)


const app = express();

//Conexion base de datos
dbConnection();

//Directorio publico
app.use(express.static('./public'))

// CORS
app.use( cors() );

//Lectura y paseo del body
app.use( express.json() )


// Rutas
app.use( '/api/auth', require( './routes/auth.routes.js' ) );


const port = process.env.PORT

app.listen( port, () => {
    console.log( `Servidor corriendo en puerto ${port}` )
} )
