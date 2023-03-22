// llama al modelo
const Server = require('./models/server')
// siempre va en el app archivo principal
// permite usar archivo .env
require('dotenv').config()

// instancia del modelo
const server = new Server()

server.listen()
