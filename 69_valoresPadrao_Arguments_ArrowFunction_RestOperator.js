// Arguments suporta todos os argumentos enviados;
function argumentos(){
    console.log(arguments);
    console.log(arguments[5]);
    for(let argumento of arguments){
        console.log(argumento)
    }
}
argumentos('Valor',1,2,3,4,5,6,'etc');
// A arrow function não suporta o arguments

console.log("\n-----------------------\n")

// Valores padrão em argumentos de funções 
const ValorPadrao = (a,b = 0, c = 4) => {
    console.log(a + b + c);
}

// Se o valor for undefined ou não for passado nenhum valor no argumento e esse argumento tiver um valor padrão, então esse valor será atribuído ao parâmetro
// O null passado como argumento é convertido para o parâmetro com o valor '0'
ValorPadrao(2);
ValorPadrao(2,undefined);
ValorPadrao(2,undefined,6);
ValorPadrao(2,8);
ValorPadrao(2,undefined);

console.log("\n------------------------\n");

const Desestruturacao_Obj = ({nome,sobrenome,idade}) => {
    console.log(nome,sobrenome,idade);
}
obj = {nome: 'vitor', sobrenome: 'leonardo', idade: 19};
Desestruturacao_Obj(obj)

console.log("\n------------------------\n")

const Desestruturacao_Array = ([valor1,valor2,valor3]) =>{
    console.log(valor1,valor2,valor3);
}
Desestruturacao_Array(['Vitor Leonardo', 'Marcos', 19])

console.log("\n-------------------------\n");

// Rest operator pega tudo depois do acumulador, neste exemplo.
const conta = (operador,acumulador,...numeros) => {
    for(let i of numeros){
        if(operador === '+') (acumulador += i);
        if(operador === '-') (acumulador -= i);
        if(operador === '*') (acumulador *= i);
        if(operador === '/') (acumulador /= i);
    }
    console.log(acumulador)
}
conta('*', 1, 1,2,3,4,5,6);