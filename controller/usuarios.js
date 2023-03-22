
const { response, request} = require('express')

const usuariosGet = (req, res = response) => {

    const {q} = req.query

    res.json({
        msg: 'metodo-get',
        q
    })
}

const usuariosPut = (req = request, res = response) => {

    const id = req.params

    res.json({
        msg: 'metodo-put',
        id
    })
}

const usuariosPost = (req, res) => {

    const {nombre, apellido} = req.body

    res.status(201).json({

        msg: 'metodo-post',
        nombre,
        apellido
    })
}

const usuariosDelete =  (req, res) => {
    res.json({
        ok: true,
        msg: 'metodo-delete'
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'metodo-patch'
    })
}

// exportacion de funciones al archivo de rutas
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
}