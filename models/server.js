// express se requiere siempre en el modelo
const express = require('express')
const cors = require('cors')
 
class Server{

    constructor(){
        // ejecución de express
        this.app = express()
        // variable de entorno de .env
        this.port = process.env.port

        // middlewares
        this.middlewares()


        // ejecucion de funciones
        this.rutas()
    }

    middlewares(){
        // directorio publico
        this.app.use(express.static('public'))

        this.app.use(cors())
    }


    rutas(){
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'metodo-get'
            })
        })
        this.app.put('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'metodo-put'
            })
        })
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                ok: true,
                msg: 'metodo-post'
            })
        })
        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'metodo-delete'
            })
        })
        this.app.patch('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'metodo-patch'
            })
        })
    }

    listen(){
        this.app.listen(this.port, function(){
            console.log(`Puerto en línea`)
        })
    }
}

// exporta la clase del modelo
module.exports = Server