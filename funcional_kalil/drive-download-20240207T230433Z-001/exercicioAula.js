const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.00, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
    { nome: 'Teclado', qtde: 3, preco: 129.00, fragil: true },
]

const filtro = 'I'

const nomeProdutos = (carrinho) => carrinho.map((produto) => produto.nome);

const preco_com_c = (carrinho) => carrinho.filter((produto)=>produto.nome[0] == 'C').map((produto)=> produto.preco)
//console.log(preco_com_c(carrinho));

const somaTota = (carrinho) => carrinho.reduce((acc, produto) => acc + produto.preco,0)
//console.log(somaTota(carrinho));

const listaNomePrecofiltra = (carrinho) => (filtro) =>  carrinho.filter((produto)=> produto.nome[0] == filtro || filtro == '').map((produto) => {return {nome: produto.nome, preco: produto.preco}})
//console.log(listaNomePrecofiltra(carrinho)(filtro));

const cambio =(taxa) => (filtro) => (f) => (carrinho) => f(carrinho)(filtro).map((produto)=>{return {nome: produto.nome, preco: (produto.preco * taxa).toFixed(2)}})
const cambioDollar = cambio(1/5) // real para o dollar


console.log(`Cambio com filtro começando com C: ${console.log(cambio(5)('C')(listaNomePrecofiltra)(carrinho))} \n`) // do dollar para o real
console.log(`Cambio com filtro começando com I: ${console.log(cambio(5)(filtro)(listaNomePrecofiltra)(carrinho))}\n`) // do dollar para o real
console.log(`Aplica o cambio a todos os produtos: ${console.log(cambioDollar('')(listaNomePrecofiltra)(carrinho))}\n`)
console.log(`Aplica o cambio filtro com T: ${console.log(cambioDollar('T')(listaNomePrecofiltra)(carrinho))}\n`)