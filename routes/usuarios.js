// sirve para el archi de rutas
const {Router} = require('express')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controller/usuarios')
// ejecuta el Router, se usa con los metodos http
const router = Router()

router.get('/', usuariosGet )
router.put('/:id', usuariosPut)
router.post('/', usuariosPost)
router.delete('/', usuariosDelete)
router.patch('/', usuariosPatch)

// exportacion de router
module.exports = router