const express = require('express');
const controller = require('../controllers/usuario.controllers');

const router = express.Router();

router.post('/', controller.cadastrar);
router.get('/', controller.listar);
router.get('/:id', controller.busacar_usuario);
router.put('/:id', controller.alterar_usuario);
router.delete('/:id', controller.deletar);

module.exports = router;
