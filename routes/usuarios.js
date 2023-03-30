// sirve para el archi de rutas
const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controller/usuarios");
const { check } = require("express-validator");
const router = Router();

// validadores centralizados en funciones
const { validarCampos } = require("../middlewares/validar-campos");
const { esRolValido } = require("../helpers/db-validators");
// ejecuta el Router, se usa con los metodos http

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe tener más de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es válido").isEmail(),
    // check("rol", "No es un rol permitido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuariosPost
);
router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);

// exportacion de router
module.exports = router;
