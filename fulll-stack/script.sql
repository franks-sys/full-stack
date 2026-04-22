DROP DATABASE IF EXISTS loja_roupa;

CREATE DATABASE loja_roupa;

USE loja_roupa; 

CREATE TABLE produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL
);

INSERT INTO produto (nome, descricao, preco) VALUES
('Camiseta Básica Branca', 'Camiseta de algodão confortável', 49.90),
('Camiseta Preta', 'Camiseta preta lisa unissex', 45.00),
('Calça Jeans Azul', 'Calça jeans tradicional', 129.90),
('Calça Jeans Preta', 'Modelo slim fit', 139.90),
('Jaqueta de Couro', 'Jaqueta estilosa para frio', 299.90),
('Moletom Cinza', 'Moletom com capuz', 149.90),
('Shorts Esportivo', 'Shorts leve para treino', 59.90),
('Vestido Floral', 'Vestido leve estampado', 99.90),
('Camisa Social', 'Camisa para ocasiões formais', 119.90),
('Tênis Casual', 'Tênis confortável para o dia a dia', 199.90);