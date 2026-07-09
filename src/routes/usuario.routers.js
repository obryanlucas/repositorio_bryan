const express = require('express');
const controller = require('../controllers/usuario.controllers');

const router = express.Router();

router.post('/', controller.cadastrar);
router.get('/', controller.listar_usuarios);
router.get('/:id', controller.busacar_usuario);
router.put('/:id', controller.alterar_usuario);
router.delete('/:id', controller.deletar);
router.get('email/:email', controller.buscarEmail);
router.post('/desafio', controller.criar_desafio);

module.exports = router;
