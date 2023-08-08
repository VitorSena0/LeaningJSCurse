const produto = {
    nome: 'caneta',
    preco: 1.8,
}
//const outraCoisa = produto; Aponta para o mesmo local da memória;
const outraCoisa = {...produto, material: 'Porcelana'/*Adicionado outro atributo*/}; // Copia o objeto
produto.nome = 'Pizza';

// Object.freeze(nome do objeto) - Conjela os atributos do objeto, impedindo que ele seja alterado ou deletado

console.log(produto);
console.log(outraCoisa);
console.log(Object.keys(outraCoisa)); // Faz a iteração do objeto com suas chaves/atributos sem os seus respectivos valores;
console.log(Object.getOwnPropertyDescriptor(outraCoisa, 'material')) // Ele verifica um objeto de um específico atributo os valores de suas propriedades
console.log(Object.values(outraCoisa)) // Pega somente os valores de cada atributo do objeto;
console.log(Object.entries(outraCoisa)) // Retorna um array de arrays (bidimensional) contendo em cada um o nome do atributo e seu respectivo valor;
console.log("\n-------------------\n");

// Utilizando o entries com iteração;

for (let entry of Object.entries(outraCoisa)){
    console.log(entry);
}
// Por desestruturação para retirar as chaves;

for (let [atributo, valor] of Object.entries(outraCoisa)){
    console.log(atributo,valor);
}
// Ou pode fazer isso
for (let valor of Object.entries(outraCoisa)){
    console.log(valor[0], valor[1]);
}
