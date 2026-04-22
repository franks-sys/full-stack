
const produtosPadrao = [
    {
        nome: "Camiseta Básica Branca",
        descricao: "Camiseta de algodão confortável",
        preco: 49.90,
        imagem: "https://picsum.photos/seed/camiseta-branca/400/300"
    },
    {
        nome: "Camiseta Preta",
        descricao: "Camiseta preta lisa unissex",
        preco: 45.00,
        imagem: "https://picsum.photos/seed/camiseta-preta/400/300"
    },
    {
        nome: "Calça Jeans Azul",
        descricao: "Calça jeans tradicional",
        preco: 129.90,
        imagem: "https://picsum.photos/seed/calca-azul/400/300"
    },
    {
        nome: "Calça Jeans Preta",
        descricao: "Modelo slim fit",
        preco: 139.90,
        imagem: "https://picsum.photos/seed/calca-preta/400/300"
    },
    {
        nome: "Jaqueta de Couro",
        descricao: "Jaqueta estilosa para frio",
        preco: 299.90,
        imagem: "https://picsum.photos/seed/jaqueta-couro/400/300"
    },
    {
        nome: "Moletom Cinza",
        descricao: "Moletom com capuz",
        preco: 149.90,
        imagem: "https://picsum.photos/seed/moletom-cinza/400/300"
    },
    {
        nome: "Shorts Esportivo",
        descricao: "Shorts leve para treino",
        preco: 59.90,
        imagem: "https://picsum.photos/seed/shorts-sport/400/300"
    },
    {
        nome: "Vestido Floral",
        descricao: "Vestido leve estampado",
        preco: 99.90,
        imagem: "https://picsum.photos/seed/vestido-floral/400/300"
    },
    {
        nome: "Camisa Social",
        descricao: "Camisa para ocasiões formais",
        preco: 119.90,
        imagem: "https://picsum.photos/seed/camisa-social/400/300"
    },
    {
        nome: "Tênis Casual",
        descricao: "Tênis confortável para o dia a dia",
        preco: 199.90,
        imagem: "https://picsum.photos/seed/tenis-casual/400/300"
    }
];
const dadosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];

const extrasDoUsuario = dadosSalvos.filter(function(salvo) {
    return !produtosPadrao.some(function(padrao) {
        return padrao.nome === salvo.nome;
    });
});

let data = produtosPadrao.concat(extrasDoUsuario);
salvarDados();


function salvarDados() {
    localStorage.setItem('produtos', JSON.stringify(data));
}

function abrirModal() {
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;

    data.push({ nome, preco, descricao, imagem });

    salvarDados();
    renderizar();
    fecharModal();
}

function renderizar() {
    const container = document.getElementById('produtos');
    container.innerHTML = '';

    data.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${produto.imagem}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <b>R$ ${produto.preco}</b>
        `;

        container.appendChild(card);
    });
}

renderizar();