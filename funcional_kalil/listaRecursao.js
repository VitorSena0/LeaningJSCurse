const aluno = {
    nome: "Vitor Leonardo Sena De Lima",
    matricula: "202200014622"
}


//1)
const crescente_0_A_n = (num) => {
    if(num == 0) return console.log(0)
    crescente_0_A_n(num-1)
    console.log(num)
}
//crescente_0_A_n(6)

//2)
const decrescente_n_A_0 = (num) => {
    if(num == 0) return console.log(0)
    console.log(num)
    decrescente_n_A_0(num-1)
}
//decrescente_n_A_0(6)

//3)
const somasSucessivas = (num1) => (num2) => {
    return num1 > num2? somasSucessivasAux(num2)(num1) : somasSucessivasAux(num1)(num2)
}
const somasSucessivasAux = (num1) => (num2) => {
    if(num1 == 0) return 0
    return num2 + somasSucessivasAux(num1-1)(num2)
}
//console.log(somasSucessivas(300000)(3))

//4)
const potenciaXZ = (x) => (z) => {
    if(z == 0) return 1
    return x * potenciaXZ(x)(z-1)
}
//console.log(potenciaXZ(3)(4))

//5)
const potenciaBase2 = potenciaXZ(2)
//console.log(potenciaBase2(4))

//6)
const SomaprimeirosCubos = (num) => {
    if(num == 0) return 0
    return num**3 + SomaprimeirosCubos(num-1)
}
//console.log(SomaprimeirosCubos(3))

//7)
const fibonacciEficiente = (num) => {
    if(num == 0) return 0
    if(num == 1) return 1
    return fibonacciEficienteAux(num)(0)(1)
}
const fibonacciEficienteAux = (num) => (a) => (b) => {
    if(num == 0) return a
    return fibonacciEficienteAux(num-1)(b)(a+b) // Ele faz a troca de valores, o a recebe b e o b recebe a+b, pois o a+b é o próximo valor da sequência
}
//console.log(fibonacciEficiente(400))

//8)
const bergamaschiSerie = (num) => {
    if(num == 0) return 1
    if(num == 1) return 1
    if(num == 2) return 1
    return bergamaschiSerieAux(num)(1)(1)(1)
}
const bergamaschiSerieAux = (num) => (a) => (b) => (c) => {
    if(num == 0) return a
    return bergamaschiSerieAux(num-1)(b)(c)(a+b+c) // Bergamaschi é a soma dos 3 números anteriores
}
//console.log(bergamaschiSerie(950))

//9)
const somaEntreDigitos = (num1) => (num2) => {
    return num1 > num2? somaEntreDigitosAux(num2)(num1) : somaEntreDigitosAux(num1)(num2)
}
const somaEntreDigitosAux = (num1) => (num2) => {
    if(num1 == num2-1) return 0
    return num1+1 + somaEntreDigitosAux(num1+1)(num2) // Soma em intervalo aberto
}
//console.log(somaEntreDigitos(4)(8))

//10)
const fatorial = (num) => {
    if(num == 0) return 1
    return num * fatorial(num-1)
}
//console.log(fatorial(5))