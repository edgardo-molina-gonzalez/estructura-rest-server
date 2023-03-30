const { validationResult } = require("express-validator");
const { request, response } = require("express");

// valida los campos en las rutas
// siempre se usa esta misma logica para todos
function validarCampos(req = request, res = response, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
}

module.exports = {
  validarCampos,
};
