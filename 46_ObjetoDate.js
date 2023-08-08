const trehoras =  60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000; 
const data = new Date(0 + trehoras + umDia);
// A primeira letra de uma função construtora é maiúscula.

console.log(data.toString());


const data2 = new Date();

console.log(data2.getDate());
console.log(data2.getHours());
console.log(data2.getMinutes());
console.log(data2.getSeconds());
console.log(data2.getMilliseconds());
console.log(data2.getFullYear());
console.log(data2.getMonth() + 1); // Os meses vão de 0 até 11
console.log(data2.getDay() + 1);// Os dias da semana vão de 0 à 6

console.log(data2.getTime() + '\n\n');


const zeroAEsquerda = function(num){
    return num >= 10? num : `0${num}`;
}

const formataData = function(data) {
        const dia = zeroAEsquerda(data.getDate());
        const mes = zeroAEsquerda(data.getMonth() + 1);
        const ano = zeroAEsquerda(data.getFullYear());
        const horas = zeroAEsquerda(data.getHours());
        const minutos = zeroAEsquerda(data.getMinutes());
        const segundos = zeroAEsquerda(data.getSeconds());

        return `${ano}/${mes}/${dia} ${horas}:${minutos}:${segundos}`

}

const data3 = new Date();
const dataBrasilHoje = formataData(data3)
console.log(dataBrasilHoje)