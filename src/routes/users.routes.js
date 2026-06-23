const express = require('express');
const controller = require('../controllers/usuarios.controlles');

const router = express.Router();

router.post('/', controller.criar);

module.exports = router;
