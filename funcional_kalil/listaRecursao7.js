const geraListaAleatoria = (min) => (max) => (tam) => {
    if(tam == 0) return []
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return [num, ...geraListaAleatoria(min)(max)(tam-1)]
}
const lista = geraListaAleatoria(1)(100)(30)
//console.log(lista)

//1)
const _indexOf = (lista) => (elem) => {
    const [x,...xs] = lista
    if(x == undefined) return -1
    if(x == elem) return 0
    const indiceRecursivo = _indexOf(xs)(elem) // Armazena a pilha de chamadas recursivas
    //console.log(indiceRecursivo) // Irá imprimir a pilha de chamadas recursivas, que no exemplo é: 0, 1, 2, 3, 4 que no final será somado 1 a cada chamada, resultando em 5
    return indiceRecursivo === -1 ? -1 : 1 + indiceRecursivo
}
//console.log("Resultado: " + _indexOf(lista)(79))

//2)
const max = (lista) => {
    return maxAux(lista)(0)
}
const maxAux = (lista) => (maior) => {
    const [x,...xs] = lista
    if(x == undefined) return maior
    const novoMaior =  x > maior? x : maior
    return maxAux(xs)(novoMaior)
}
//console.log(max(lista))
//2.1)
const min = (lista) => {
    const [min,...xs] = lista
    return minAux(lista)(min)
}
const minAux = (lista) => (menor) => {
    const [x,...xs] = lista
    if(x == undefined) return menor
    const novoMenor =  x < menor? x : menor
    return minAux(xs)(novoMenor)
}
//console.log(min(lista))


//3)
const somaLista = (lista) => {
 const [x,...xs] = lista
    if(x == undefined) return 0
    if(typeof x == "object") return somaLista(x) + somaLista(xs) // Se for um array, ele irá chamar a função somaLista passando o array como parâmetro e assim irá somar os valores do array e do restante da lista
    return x + somaLista(xs)   
}
//console.log(somaLista([1,2,3,4,5,6,7,8,50,9,10,[1,2,3,4,5,6,7,[2,3,4,5],8,9,10, 39],1]))


//4)
const contaVogais = (string) => {
    const [x,...xs] = string
    if(x == undefined) return 0
    if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') return 1 + contaVogais(xs)
    return contaVogais(xs)
} 
//console.log(contaVogais('coroa de ouro'))


//5)
const eliminaPontuacao = (string) => {
    const pontuacao = achaPontuacao(string)
    return eliminaPontuacaoAux(string)(pontuacao)

}
const achaPontuacao = (string) => {
    const [x,...xs] = string
    if(x == undefined) return 'frase sem pontuacao'
    const pontuacao = (x == '!' || x == '?')? x : achaPontuacao(xs)
    return pontuacao
}
const eliminaPontuacaoAux = (string) => (pontuacao) => {
    const [x,y,...xs]  = string
    if(y == undefined) return pontuacao
    if(x == pontuacao && y == pontuacao) return eliminaPontuacaoAux(xs)(pontuacao)
    return x + y + eliminaPontuacaoAux(xs)(pontuacao)
}
//console.log(eliminaPontuacao('como é!!!!!!'))

//6)
const montanteAcumuladoCasos = (casosLista) => {
    return montanteAcumuladoCasosAux(casosLista)(0)
}
const montanteAcumuladoCasosAux = (casosLista) => (montanteAcumulado) => {
    const [x,...xs] = casosLista
    if(x == undefined) return []// não retorno o montante acumulado aqui pois ele daria erro, porque estaria tentando "copiar os elementos de um inteiro" como se fosse uma lista. O spread operator copia os elementos da lista
    const listaMontante = [montanteAcumulado + x, ...montanteAcumuladoCasosAux(xs)(montanteAcumulado+x)]
    return listaMontante
}
//console.log(montanteAcumuladoCasos([7,3,19,5,15,10]))   


//7)

const quickSort = (lista) => {
    const [pivo,...xs] = lista
    if(pivo == undefined) return []
    const menor = filtro(xs)(pivo)('menor')
    const maior = filtro(xs)(pivo)('maior') // a lista tem que ser a xs como argumento e não a 'lista' pois ficaria em loop infinito pois o pivô seria sempre o mesmo
    return [...quickSort(menor), pivo, ...quickSort(maior)];
}
const filtro = (lista) => (pivo2) => (sinal) => {
        const [x,...xs] = lista
        if(x == undefined) return []
        if (sinal == 'menor'){
            const menor = x <= pivo2? [x, ...filtro(xs)(pivo2)('menor')] : filtro(xs)(pivo2)('menor'); // Com esta condicional ele irá incluir os itens repetidos
            return menor
        } 
        if (sinal == 'maior'){
            const maior = x > pivo2 ? [x, ...filtro(xs)(pivo2)('maior')] : filtro(xs)(pivo2)('maior');
            return maior
        } 
    }
    //console.log(quickSort(lista))   

//8)



//9)
const eliminaOcorrencia = (lista) => (elem) => {
    const [x,...xs] = lista
    if(x == undefined) return []
    const listaArmazena = x != elem? [x, ...eliminaOcorrencia(xs)(elem)] : eliminaOcorrencia(xs)(elem)
    return listaArmazena == []? "Todos os itens eliminados" : listaArmazena // Arrumar a impressão se true
}
console.log(eliminaOcorrencia([7,7,7,7,7,7])(7))
//console.log(eliminaOcorrencia([-4,0,3,7,11, 7, 90, 45,44,11,7,8,54,34,7,7,0,-8,-4])(7))


//10)
