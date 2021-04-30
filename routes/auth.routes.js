const { validarJWT } = require( "../middlewares/validar-jwt" );
const { validarCampos } = require( "../middlewares/validar-campos" );
const { check } = require( "express-validator" );
const { Router } = require( "express" );
const {
    crearUsuario,
    loginUsuario,
    revalidarToken
} = require( "../controllers/auth.controller" );


const router = Router();

// Crear un usuario
router.post( '/new', [
    check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
    check( 'email', 'El email es obligatorio' ).isEmail(),
    check( 'password', 'La contraseña es  obligatoria' ).isLength({min:6}),
    validarCampos
] ,crearUsuario )

//Login de Usuario
router.post( '/', [
    check( 'email', 'El email es obligatorio' ).isEmail(),
    check( 'password', 'La contraseña es  obligatoria' ).isLength({min:6}),
    validarCampos
], loginUsuario )


//Validar y re-validar token
router.get( '/renew', validarJWT,revalidarToken )

module.exports = router
