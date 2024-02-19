//Q1. Criar uma função recursiva chamada busca que busca o índice de um determinado item em uma lista ORDENADA. Se o item estiver presente, ele deve retornar o índice, caso contrário, deve retornar -1.

const _indexOf = (lista) => (elem) => {
    const [x,...xs] = lista
   if(x == undefined) return -1
   if(x == elem) return 0
   const indiceRecursivo = _indexOf(xs)(elem)
   return indiceRecursivo === -1 ? -1 : 1 + indiceRecursivo
}

//console.log(_indexOf("vitor leonardo")('n'))

//Q2. Criar uma função que encontre o maior valor numa lista de inteiros usando a recursividade. Considere que a lista possui pelo menos um elemento.

const max = (lista) => {
    const [x, y, ...xs] = lista;
    if (x === undefined) return undefined;
    if (y === undefined) return x; // Caso lista tenha apenas um elemento
    const maior = x > y ? x : y;
    return maior > max(xs) ? maior : max(xs);
}

console.log(max([5, 6, 7, 3, 8, 9, 4, 1])); // Saída: 9
