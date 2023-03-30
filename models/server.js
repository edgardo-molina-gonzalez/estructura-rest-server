// express se requiere siempre en el modelo
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/confing");

class Server {
  constructor() {
    // ejecución de express
    this.app = express();
    // variable de entorno de .env
    this.port = process.env.port;
    // ruta principal del modelo usuarios
    this.usuariosPath = "/api/usuarios";

    // conexion con base de datos

    // middlewares
    this.middlewares();

    // ejecucion de funciones
    this.rutas();
    this.conectarDb();
  }

  async conectarDb() {
    await dbConnection();
    console.log("Base de datos conectada");
  }

  middlewares() {
    // directorio publico
    this.app.use(express.static("public"));
    // cors
    this.app.use(cors());
    // lectura y pareseo del body, la informacion que venga sera en json
    this.app.use(express.json());
  }

  rutas() {
    // aplica un path principal e importa las rutas con require
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, function () {
      console.log(`Puerto en línea`);
    });
  }
}

// exporta la clase del modelo
module.exports = Server;
