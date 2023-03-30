const { response, request } = require("express");
// el modelo de la schema se importa al controlador, por estandar se usa en mayuscula
const Usuario = require("../models/usuario");
// encripta las contraseñas
const bcryptjs = require("bcryptjs");

const usuariosGet = (req, res = response) => {
  const { q } = req.query;

  res.json({
    msg: "metodo-get",
    q,
  });
};

const usuariosPut = (req = request, res = response) => {
  const id = req.params;

  res.json({
    msg: "metodo-put",
    id,
  });
};

const usuariosPost = async (req, res) => {
  // se pasa como argumento a la instancia del modelo
  const { nombre, correo, password, rol } = req.body;
  // instancia del modelo Usuario
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Verificar contraseña
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({ msg: "Este correo ya está registrado" });
  }

  // Encriptar contraseña
  const salt = bcryptjs.genSaltSync(10);
  // selecciona el campo para encriptar
  usuario.password = bcryptjs.hashSync(password, salt);

  // guarda usuario en base de datos
  await usuario.save();

  res.status(201).json({
    usuario,
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    ok: true,
    msg: "metodo-delete",
  });
};

const usuariosPatch = (req, res) => {
  res.json({
    ok: true,
    msg: "metodo-patch",
  });
};

// exportacion de funciones al archivo de rutas
module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
