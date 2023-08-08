function maiorDeles(){
    const numeros = arguments;
    let maior = 0;
    for(let i of numeros){
        if(maior <= i){
            maior = i;
        }
    }

 return maior;
}
console.log(maiorDeles(100,500,12,434,56,354656,3453,5))
////////////////////////////////////////////////////////////////


// Usando o arrow Function
const maiorDeles2 = (x,y) => {
    return x > y ? x : y;    
}
console.log(maiorDeles2(3,5))
//////////////////////////////////////////////////////////////


// Como retorna um bloco pequeno de código e só tem uma codicional pode escrever em uma linha só;

const maiorDeles3 = (x,y) => x > y ? x : y
console.log(maiorDeles3(6,8)) 