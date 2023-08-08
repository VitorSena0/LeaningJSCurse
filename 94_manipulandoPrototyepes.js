    // Declarando utilizando uma função construtora (Object);
const objA = Object({
    chaveA: 'A',
});
console.log(objA)

const objB = Object({
    chaveB: 'B',
});

const objC = Object.create(objB)// // cria um novo objeto 'a' com 'b' como protótipo
console.log(objC.chaveB)

Object.setPrototypeOf(objB, objA); // Seta o prototype de a em b assim criando uma corrente podendo ser estendido para mais objetos;
console.log(objB.chaveA)

console.log(objC.chaveA)

console.log(Object.getPrototypeOf(objC))

const objD = Object({
    chaveD:  'D', 
});

Object.setPrototypeOf(objD,objB);

console.log(objD)

console.log('\n--------Com funções construtoras---------\n');

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

}
// Criação de métodos dentro de prototypes de funções;
// É melhor por os métodos fora da função construtora, pois é mais performático;

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};
Produto.prototype.aumentaPreco = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

const produto1 = new Produto('Camiseta', 50);
produto1.desconto(50);
console.log(produto1);

produto1.aumentaPreco(100);
console.log(produto1)


console.log("\n-------Em Objetos Literais-------\n");

const produto2 = {
    nome: 'Tênis',
    preco: 90
}

// Reutilizando o prototype de Produto
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.desconto(50);
console.log(produto2);


console.log("\n-------Utilizando o Object.create()-------\n");

const produto3 = Object.create(Produto.prototype, {
    tamanho:{
        enumerable: true,
        writable: true,
        configurable: true,
        value: 43,
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 60,
    }
})
produto3.aumentaPreco(100);
console.log(produto3)