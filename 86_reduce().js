const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 90, 34, 23, 9, 6, 234]

const totalSoma = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    return acumulador
}, 0 /*Valor inicial do acumulador*/)

console.log(totalSoma + '\n\n')

const totalMultiplica = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador *= valor
    return acumulador
}, 1)

console.log(totalMultiplica)

console.log('\n-----------Atividade---------');

// Some todos os números (reduce);
// Retorne um array com os pares (filter);
// Retorne um array com o dobro dos valores (map);

console.log('\n------Retornando array com pares------')

const arrayPares = numeros.reduce((acumulador, valor, indice, array) => {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador
}, [])

console.log(arrayPares)

console.log('\n------Retornando array Dobrados------')

const ArrayDobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)

    return acumulador
}, []);
console.log(ArrayDobro)

console.log('\n------Retornando objeto da pessoa mais velha------\n')

// Retornar a pessoa mais velha;
const pessoas = [
    { nome: 'Vitor', idade: 19 },
    { nome: 'Ricardo', idade: 34 },
    { nome: 'Thiago', idade: 59 },
    { nome: 'Leandro', idade: 30 },
    { nome: 'Jorge', idade: 85 },
    { nome: 'Michacel', idade: 70 },
    { nome: 'Kátia', idade: 46 },
    { nome: 'Leonardo', idade: 66 },
]

const maisVelha = pessoas.reduce((acumulador, obj) => {

    //acumulador = (obj.idade >= acumulador)? acumulador = obj.idade : acumulador;
    //return acumulador

    // Outra maneira
    console.log(acumulador.idade, obj.idade)
    if (acumulador.idade >= obj.idade) return acumulador;
    return obj
    // Verificações:
    // 19 >= 34? false
    // 34 >= 59? false
    // 59 >= 30? true
    // 59 >= 85? false
    // 85 >= 70? true
    // 85 >= 46? true
    // 85 >= 66? true
    //Resultado:
    // { nome: 'Jorge', idade: 85 }
})
console.log(maisVelha)