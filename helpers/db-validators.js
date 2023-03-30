const Role = require("../models/role");

// valida el rol y se importa al check().custom(esValidoRol) en la ruta
async function esRolValido(rol = "") {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la BD`);
  }
}

module.exports = {
  esRolValido,
};
