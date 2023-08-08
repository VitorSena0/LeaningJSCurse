// -> retorne a soma do dobro de todos os pares
// -> filtrar pares;
// -> Dobrar valorse;;
// -> Reduzir (somar tudo);


const numeros = [1,2,3,4,5,6,7,56,12,15,4,34,5,46,56];

console.log('\n--------Retornando o dobro da soma-------\n')


    const filtraPares = numeros.
    filter(elemento => elemento % 2 === 0)
    .map(dobrado =>  dobrado * 2)
    .reduce((acumulador,valor) => acumulador += valor,0)

console.log(filtraPares)

