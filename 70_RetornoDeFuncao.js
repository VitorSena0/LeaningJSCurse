const falaFrase = (comeco) =>{
    const falaResto = (resto) => {
        return console.log(comeco + ' ' + resto);
    }
    return falaResto;
}

const fala = falaFrase('olá');
const resto = fala('mundo!');

// Versão em Arrow function
const Duplica = (n) =>  n * 2;
const Triplica = (n) =>  n * 3;
const Quadriplica = (n) =>  n * 4;

console.log(Duplica(2))
console.log(Triplica(2))
console.log(Quadriplica(2))

console.log("\n------------------------\n")

// Utilidade 
const criaMultiplicador = (multiplicador) => (n) => n * multiplicador;

const Duplica2 = criaMultiplicador(2);
const Triplica2 = criaMultiplicador(3);
const Quadriplica2 = criaMultiplicador(4);

console.log(Duplica2(2))
console.log(Triplica2(2))
console.log(Quadriplica2(2))