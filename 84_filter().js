// filter();

const arrayNumeros = [5,50,80,1,2,3,4,5,8,9,11,15,27,0];
// O primeito parâmetro da função callback do filter recebe o elemento e o segundo parâmetro recebe o índice
const arrayFiltradoIndice = arrayNumeros.filter((elementos,indice) => { return indice > 10 }) // índices maiores que 10
const arrayFiltradoElemento = arrayNumeros.filter((elementos,indice) => { return elementos > 10 }) // Elementos maiores que 10
console.log(arrayFiltradoIndice)
console.log(arrayFiltradoElemento)

console.log('\n--------------------------------\n')

const arrayNumeros2 = [1,2,3,4,5,6,7,8,23,543,67,33,77,234,6,9,0]


//filter com objetos;

// Retornar valores com nomes acima de 7 letras;
// Retornar valores com pessoas com mais de 50 anos;
// Retonar pessoas cujo nome termina com a letra 'o';
const listaObjeto = [
    { nome: 'Vitor', idade: 19},
    { nome: 'Ricardo', idade: 34},
    { nome: 'Thiago', idade: 59},
    { nome: 'Leandro', idade: 30},
    { nome: 'Jorge', idade: 85},
    { nome: 'Michacel', idade: 70},
    { nome: 'Kátia', idade: 46},
    { nome: 'Leonardo', idade: 46},
]

const objArrayNomes = listaObjeto.filter((elementos) => elementos.nome.length > 7)

for(let i in objArrayNomes){
    console.log(objArrayNomes[i].nome)
    }

    console.log('\n------Maiores idades-------\n')
    
    const objArrayIdades = listaObjeto.filter((elemento) => elemento.idade >= 50)
    
    for(let i in objArrayIdades){
        console.log(objArrayIdades[i].nome)
    }
    
    console.log("\n------Contém final 'o'-------\n")

    const objArrayTerminaNome = listaObjeto.filter(elemento => elemento.nome.toLowerCase().slice(-1,elemento.nome.length) === 'o')
                                                                                          // Outra opção seria usar o método | endWith('o') |                                      
    for(let i in objArrayTerminaNome){
        console.log(objArrayTerminaNome[i].nome)
    }
