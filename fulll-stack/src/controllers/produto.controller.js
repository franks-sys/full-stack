const db = require('../data/connection');

const listar = async (req, res) => {
    try {
        const [produtos] = await db.query('SELECT * FROM produto');
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao listar produtos'});
    }
};

const buscarPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const [produtos] = await db.query('SELECT * FROM produto WHERE id = ?', [id]);

        if (produtos.length === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.status(200).json(produtos[0]);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar produto'});
    }
};

const criar = async (req, res) => {
    const { nome, descricao, preco } = req.body;
    try {
        const sql = `
            INSERT INTO produto (nome, descricao, preco)
            VALUES (?, ?, ?)
        `;
        const values = [nome, descricao, preco];
        const [resultado] = await db.query(sql, values);

        const novoProduto = {
            id: resultado.insertId,
            nome,
            descricao,
            preco
        };

        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao criar produto'});
    }
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    try {
        const sql = `
            UPDATE produto
            SET nome = ?, descricao = ?, preco = ?
            WHERE id = ?
        `;
        const values = [nome, descricao, preco, id];
        const [resultado] = await db.query(sql, values);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.status(200).json({ mensagem: 'Produto atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao atualizar produto'});
    }
};

const deletar = async (req, res) => {
    const { id } = req.params;
    try {
        const [resultado] = await db.query('DELETE FROM produto WHERE id = ?', [id]);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' });
        }

        res.status(200).json({ mensagem: 'Produto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao deletar produto'});
    }
};

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    deletar
};