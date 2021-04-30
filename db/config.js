const mongoose = require( "mongoose" );

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        } )
        console.log('BAse De Datos Online')

    } catch( e ) {
        console.log( e )
        throw new Error( 'Error al inicializar la Base de Datos' );
    }
}

module.exports={
    dbConnection
}
