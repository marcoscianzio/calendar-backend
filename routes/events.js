const { Router } = require("express");
const { check } = require("express-validator");
const {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

router.get("/", getEventos);

router.post(
    "/",
    [
        check("title", "Titulo es obligatorio").not().isEmpty(),
        check("start", "fecha de inicio es obligatoria").custom(isDate),
        validarCampos,
    ],
    crearEvento
);

router.put(
    "/:id",
    [
        check("title", "Titulo es obligatorio").not().isEmpty(),
        check("start", "fecha de inicio es obligatoria").custom(isDate),
        validarCampos,
    ],
    actualizarEvento
);

router.delete(
    "/:id",
    [
        check("title", "Titulo es obligatorio").not().isEmpty(),
        check("start", "fecha de inicio es obligatoria").custom(isDate),
        validarCampos,
    ],
    eliminarEvento
);

module.exports = router;
