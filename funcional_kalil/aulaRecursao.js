// append é funcional e push não é

const fat = (num) => {
    if(num == 0) return 1
    const x = num * fat(num-1)
    console.log(x)
    return x
    
}
//fat(5)

const fatInverso = (num) => {
    return fatAux(num)(1)(1)
}
const fatAux = (num) =>(conta) => (acc) => {
    if(conta > num) return acc
    const novoAcc = acc * conta
    fatAux(num)(conta + 1)(novoAcc)
    console.log(novoAcc)
}
//fatInverso(5)




/////////////////////////////////////
// tem haver com o empilhamento dos dados, um empilha e depois imprime e depois o outro imprime e depois empilha

// 2)
const contaAte_0_A_n = (num) => {
    if(num == 0) return console.log(num)
    contaAte_0_A_n(num-1)
    console.log(num) 
}
//contaAte_0_A_n(6)
//console.log('\n\n')

//1)
const contaAte_n_A_0 = (num) => {
    if(num == 0) return console.log(num)
    console.log(num)
    contaAte_n_A_0(num-1)
    console.log(num)
}

//contaAte_n_A_0(6)

///////////////////////////////////////////////

// 3)
// Soma entre dois números na qual o intervalo é aberto, depois tentar para o intervalo aberto
// faz a troca do maior para o maior no argumento fora da função
const somaEntreNum = (num1) => (num2) => {
   return num1> num2? somaEntreNumAux(num2)(num1) : somaEntreNumAux(num1)(num2)
}
const somaEntreNumAux = (num1) => (num2) => {
    if(num1 == num2-1) return 0
    return (num1+1) + somaEntreNumAux(num1+1)(num2)

}
//console.log(somaEntreNum(3)(8))



// 4)
const somaNprimeirosCubos = (n) => {
    if(n == 0) return 0
    return n**3 + somaNprimeirosCubos(n-1)
} 
//console.log(somaNprimeirosCubos(8))

// 5)
const somaMult = (x) => (y) => {
    if(x == 1) return y
    return y + somaMult(x-1)(y)
}

const ultimoEfc = (lista) => {
    const [x,y, ...xs] = lista
    if(typeof y == 'undefined') return x
    return ultimo(xs)
}
//console.log(ultimo([1,2,3,4,5]))



const ultimo = (lista) => {
    const [x,...xs] = lista
    if(typeof x == 'undefined') return 'lista vazia'
    return ultimoAux([x,...xs])
}
const ultimoAux = ([x,...xs]) => {
    if(typeof xs == 'undefined') return x
    return ultimoAux(xs)
}

//console.log(ultimo([1,2,3,4,5]))


const ordena = (lista) => {
    const [x,...xs] = lista
    if(typeof x == 'undefined') return 'lista vazia'
    return ordenaAux(lista)
}
const ordenaAux = ([x,...xs]) => {
    if(xs.length == 0) return x
    const maior = ordenaAux(xs)
    return maior < x? x : maior
}
//console.log(ordena([1,6,54,3,6,7,7,655,3,5,44,3]))

