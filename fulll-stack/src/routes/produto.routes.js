const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produto.controller');

router.get('/listar/produto', produtoController.listar);
router.get('/buscar/produto/:id/', produtoController.buscarPorId);
router.post('/criar/produto', produtoController.criar);
router.put('/atualizar/produto/:id', produtoController.atualizar);
router.delete('/deletar/produto/:id', produtoController.deletar);

module.exports = router;