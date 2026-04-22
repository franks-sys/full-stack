const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produto.controller');

router.get('/listar', produtoController.listar);
router.get('/buscar/:id/', produtoController.buscarPorId);
router.post('/criar', produtoController.criar);
router.put('/atualizar/:id', produtoController.atualizar);
router.delete('/deletar/:id', produtoController.deletar);

module.exports = router;