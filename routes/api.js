const router = require('express').Router();

const medicosRouter = require('./api/medicos');
const habitacionesRouter = require('./api/habitaciones');
const pacientesRouter = require('./api/pacientes');

router.use('/medicos', medicosRouter);
router.use('/habitaciones', habitacionesRouter);
router.use('/pacientes', pacientesRouter);

module.exports = router;