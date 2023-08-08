const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Leonardo',
    idade: 19,
    endereco: {
        rua: 'Gararu',
        numero: 1315
    }
}

// Atribuição por desestruturação em objetos;

const {nome, sobrenome, ...resto} = pessoa;
// O resto virou um objeto que contém o resto do outro objeto;
console.log(nome,sobrenome,resto, '\n\n')

const {endereco: {rua, numero}, idade: idade} = pessoa;
// Aqui é outra forma de atribuição
console.log(rua, numero, idade);
// Alterando o conteúdo dentro do Objeto
const {idade: idade2 = 20} = pessoa;
console.log(idade2)
