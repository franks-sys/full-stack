const db = require('../data/connection');

const listar = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM produto');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.execute('SELECT * FROM produto WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const criar = async (req, res) => {
    try {
        const { nome, descricao, preco } = req.body;

        const [result] = await db.execute(
            'INSERT INTO produto (nome, descricao, preco) VALUES (?, ?, ?)',
            [nome, descricao, preco]
        );

        res.status(201).json({
            id: result.insertId,
            nome,
            descricao,
            preco
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, descricao, preco } = req.body;

        const [result] = await db.execute(
            'UPDATE produto SET nome = ?, descricao = ?, preco = ? WHERE id = ?',
            [nome, descricao, preco, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.json({ mensagem: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.execute(
            'DELETE FROM produto WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.json({ mensagem: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};