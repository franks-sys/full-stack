
const produtosPadrao = [
    {
        nome: "Camiseta Básica Branca",
        descricao: "Camiseta de algodão confortável",
        preco: 49.90,
        imagem: "https://images.tcdn.com.br/img/img_prod/815948/bsica_branca_camiseta_sr_elegncia_alg_egpcio_1_20250827085352_71ca63eec4bf.jpg"
    },
    {
        nome: "Camiseta Preta",
        descricao: "Camiseta preta lisa unissex",
        preco: 45.00,
        imagem: "https://images.tcdn.com.br/img/img_prod/947450/camiseta_basic_color_preto_1021_1_4a739bf8de5955b412d3e004aa92dd20.jpg"
    },
    {
        nome: "Calça Jeans Azul",
        descricao: "Calça jeans tradicional",
        preco: 129.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPzx3sBCfgSQMddOB4htYQroWV61ibx1-Sg&s"
    },
    {
        nome: "Calça Jeans Preta",
        descricao: "Modelo slim fit",
        preco: 139.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OeU_vvFMGukTUYWdGIX-ZSsy4o0MqD0_HA&s"
    },
    {
        nome: "Jaqueta de Couro",
        descricao: "Jaqueta estilosa para frio",
        preco: 299.90,
        imagem: "https://images.tcdn.com.br/img/img_prod/1091563/jaqueta_de_couro_ribana_preta_479_1_3892a1929f78966c1431f4d3166d6c97.jpg"
    },
    {
        nome: "Moletom Cinza",
        descricao: "Moletom com capuz",
        preco: 149.90,
        imagem: "https://backwash.fbitsstatic.net/img/p/moletom-careca-ous-crewneck-fili-flag-cinza-mescla-96294/361339-2.jpg?w=800&h=800&v=no-change&qs=ignore"
    },
    {
        nome: "Shorts Esportivo",
        descricao: "Shorts leve para treino",
        preco: 59.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFe1KL4GHSKiK0DasuZ48uDuDZ2-dy8bRGyw&s"
    },
    {
        nome: "Vestido Floral",
        descricao: "Vestido leve estampado",
        preco: 99.90,
        imagem: "https://images.tcdn.com.br/img/img_prod/914364/vestido_longo_floral_revanche_81310_3643_1_a1c2ea78f17816d5ca896b5265f62d20_20250812143613.jpg"
    },
    {
        nome: "Camisa Social",
        descricao: "Camisa para ocasiões formais",
        preco: 119.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg2pGtK6-h-dLVabCGlI0STMuol5hzR2sX0w&s"
    },
    {
        nome: "Tênis Casual",
        descricao: "Tênis confortável para o dia a dia",
        preco: 199.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRskyfvk036kSlspi8RGi2IZhBOravHmPi5Q&s"
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