const express = require( 'express' )
const cors = require( 'cors' );
const path = require( 'path');
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

//Manejar demas rutas
app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

const port = process.env.PORT

app.listen( port, () => {
    console.log( `Servidor corriendo en puerto ${port}` )
} )
