
// Valores primitivos - Copiam o conteudo da variavel

let a0 = 'vitor'
let b0 = a0

console.log(a0,b0)

a0 = 'Luiz'
console.log(a0,b0,"\n") // Não muda o valor de b0 pois não está apontando para o mesmo local de memória que o a0

// Por referência com array

const a = [1,2,3,4]
const b = a


console.log(a,b)
a.push(5);

console.log(a,b)

// Copiar um valor por referência
//Spread operator (...): você pode usar o spread operator para copiar todos os elementos de um objeto para um novo array.
const c = [...a]

delete a[0]
console.log(a,b,c,'\n')


// Por referência por objeto

const a1 = {
    nome : 'vitor',
    sobrenome : 'leonardo',
}

const b1 = a1


console.log(a1,b1,'\n');

const c1 = {...a1} // Copiei o a1 com o spread

a1.nome = 'Gabriel'

console.log(a1,b1,c1)
