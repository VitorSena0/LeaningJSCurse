const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero, ...resto] = numeros
console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto)
console.log(resto[1],resto[2]);


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const [primero, , terceiro, , quinto, , , oitavo] = numeros2;
const [primeiro1, , , , ...restante] = numeros2
console.log(primero, terceiro, quinto, oitavo)
console.log(restante, '\n')

const arraysBidimensionais = [[1,2,3],[4,5,6],[7,8,9]];
const [primeiroArray, segundoArray, terceiroArray] = arraysBidimensionais;
console.log(primeiroArray, segundoArray, terceiroArray);
console.log(primeiroArray[2],terceiroArray[0]);
