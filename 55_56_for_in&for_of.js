// for in lê os indices ou chaves do objeto ou array

const array_frutas = ['pera', 'maçã', 'uva'];


for(let i = 0; i < array_frutas.length; i++){
    console.log(array_frutas[i])
}

console.log('\n\n')
// for of com array
for(let indice of array_frutas){
    console.log(indice)
}
// for in com arrays
for (let x in array_frutas) {
    console.log(x);
}
console.log('\n\n')

const objeto_pessoa = {
    nome: 'vitor',
    sobrenome: 'Leonardo',
    idade: 19,
    sexo: 'Masculino'
}
// for in com objetos
for (let chave in objeto_pessoa) {
    console.log(chave, objeto_pessoa[chave])
}

console.log('\n\n')

// forEach com array
array_frutas.forEach(function(element, indice, array) {
    console.log(element, indice, array)
});
