const array = [1, 23, 3, 4, 55, 63, 6, 0, 453, 34, 9];

const dobraNumeros = array.map((numeros) =>  numeros * 2);
console.log(dobraNumeros);

    console.log('\n---------Com objetos----------\n')
    
    // Para cada elemento:
    // Retorne apenas uma string com o nome da pessoa
    // Remova apenas a chame "nome" do objeto
    // Adicione uma chave id em cada objeto;
    const objArray = [
    { nome: 'Vitor', idade: 19},
    { nome: 'Ricardo', idade: 34},
    { nome: 'Thiago', idade: 59},
    { nome: 'Leandro', idade: 30},
    { nome: 'Jorge', idade: 85},
    { nome: 'Michacel', idade: 70},
    { nome: 'Kátia', idade: 46},
    { nome: 'Leonardo', idade: 46},
]
console.log(objArray)

console.log('\n----------Mostra nomes do objeto----------\n')

const pessoa = objArray.map((elemento,indice) => elemento.nome)
console.log(pessoa,'\n\n' + pessoa.length)


console.log('\n---------Remover nome de objetos----------\n')

const removeNome = objArray.map((elemento,indice) => { 
    delete elemento.nome 
    return elemento
} )
console.log(removeNome)
// Uma meneira mais sucinta:
//const removeNome = objArray.map((elemento,indice) => ({idade : elemento.idade})


console.log('\n---------Adiciona id em objetos sem alterar o obj original----------\n')
// Para adicionar um atributo em um objeto, você pode utilizar a sintaxe de ponto ou colchetes, como no exemplo a seguir:
// pessoa.endereco;
// pessoa["telefone"];


const adicionaID = objArray.map((elemento,indice) => {
    CopiaObj = {...elemento} // Copiou o objeto, portanto não irá alterar o objeto original, pois não estará apontado mais para o mesmo local de memória;
    numeroAleatorio = Math.floor(Math.random()*1000,1)
    CopiaObj.id = (indice+1) * numeroAleatorio;

     return CopiaObj
})

console.log(adicionaID)

console.log('\n---------Não foi alterada----------\n')
console.log(objArray)